// import { TextDecoderStream } from 'node:stream/web';
const { TextDecoderStream } = require('stream/web');

async function fetchStream() {
    const response = await fetch('http://ya.ru');
    const stream = response.body;
    const textStream = stream.pipeThrough(new TextDecoderStream());

    for await (const chunk of textStream) {
        console.log(chunk);
    }
}

fetchStream();