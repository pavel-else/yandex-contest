function optimizeTree(node, treeSet = new Set()) {
  const nodeSet = new Set();

  for (const [key, value] of Object.entries(node.info)) {
    const fullKey = `info_${key}_${value}`;

    if (!treeSet.has(fullKey)) {
      nodeSet.add(fullKey)
    }

    treeSet.add(fullKey);
  }

  node.info = Array.from(nodeSet);

  if (!node.children.length) {
    return nodeSet;
  }

  const childrenSets = node.children.map((chidrenNode) => optimizeTree(chidrenNode, treeSet, nodeSet));
  
  // const joinSet = new Set()
  // childrenSets.forEach((childrenSets) => {
  //   childrenSets.forEach((item) => joinSet.add(item));
  // });
}

function optimize(inputTree) {
  optimizeTree(inputTree);
  return {
    inputTree,
  };
}

console.log(optimize({
  "info": {
    "oreType": "gold",
    "weather": "rainy"
  },
  "children": [
    {
      "info": {
        "oreType": "gold",
        "weather": "rainy"
      },
      "children": [
        {
          "info": {
            "oreType": "gold",
            "weather": "rainy"
          },
          "children": []
        },
        {
          "info": {
            "oreType": "cooper",
            "weather": "sunny"
          },
          "children": []
        }
      ]
    }
  ]
}));