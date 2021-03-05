import { rest, setupWorker } from 'msw';
export const handlers = [
  rest.get('https://dog.ceo/api/breeds/image/random', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({ status: 'success', message: 'http://dogimage/msw.jpg' })
    )
  ),
];

const worker = setupWorker(...handlers);
console.log('starting worker');
worker.start();
console.log('worker start run');
export { worker };
