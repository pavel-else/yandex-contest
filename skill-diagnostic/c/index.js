// Решение проходит локальные тесты и работает свиду правильно, однако падает с WA.
class Robot {
  report;

  constructor() {
    this.report = {
      successCount: 0,
      failedCount: 0,
      tasks: [],
      timeSpent: 0
    };
  }

  async run(task) {
    return new Promise(async (resolve) => {
      this.report.tasks.push(task.id);

      let timeStart = performance.now();

      try {
        await task.job();
        this.report.successCount += 1;
      } catch (err) {
        this.report.failedCount += 1;
      } finally {
        const time = Math.ceil(performance.now() - timeStart);
        this.report.timeSpent += time;
        resolve();
      }
    });
  }
}


class TaskManager {
  #queue = [];
  robots = [];

  constructor(n = 1) {
    for (let i = 0; i < n; i += 1) {
      this.robots.push(new Robot());
    }
  }
  
  // Async?
  addToQueue(task) {
    this.#queue.push(task);
    this.#queue.sort((a, b) => (a.priority > b.priority ? 1 : -1));
  }
  
  run() {
    const robotsProcessPromises = [];

    return new Promise((resolve) => {
      const process = async (robot, processResolve) => {
        const task = this.#queue.pop();
        await robot.run(task);
        
        if (!this.#queue.length) {
          processResolve();
          return;
        }

        process(robot, processResolve);
      };

      this.robots.forEach((robot) => {
        if (!this.#queue.length) {
          return;
        }

        const promise = new Promise((processResolve) => {
          process(robot, processResolve);
        });

        robotsProcessPromises.push(promise);
      }); 


      Promise.all(robotsProcessPromises).then(() => {
        resolve(this.robots.map((robot) => robot.report));
      });
    })
  }
}

module.exports = { TaskManager };

(async () => {  
  const generateJob = (id, time, toResolve) =>  
      function () {  
          return new Promise((resolve, reject) => {  
              setTimeout(() => {  
                toResolve ? resolve() : reject();  
              }, time);  
          });  
      };  

  const tm = new TaskManager(3);  

  tm.addToQueue({  
      id: "id0",  
      priority: 10,  
      job: generateJob("id0", 1000, true),  
  });  
  tm.addToQueue({  
      id: "id1",  
      priority: 1,  
      job: generateJob("id1", 1000, false),  
  });  
  tm.addToQueue({  
      id: "id2",  
      priority: 10,  
      job: generateJob("id2", 1000, true),  
  });  
  tm.addToQueue({  
      id: "id3",  
      priority: 5,  
      job: generateJob("id3", 1000, true),  
  });  

  const report = await tm.run();  
  console.log(report);  
})();