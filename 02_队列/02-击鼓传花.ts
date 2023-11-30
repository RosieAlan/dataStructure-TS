import ArrayQueue from './01_实现队列结构Queue';

function hotPotato(names: string[], num: number) {
  const queue = new ArrayQueue<string>();
  for (let i = 0; i < names.length; i++) {
    queue.enqueue(names[i]);
  }
  let i = 1;
  while (queue.size() > 1) {
    let a = queue.dequeue();
    if (i !== num && a) {
      queue.enqueue(a);
    } else {
      i = 1;
    }
    i++;
  }
  return queue.dequeue();
}

const leftName = hotPotato(['why', 'jamsses', 'sskobe', 'cussrry'], 3);
console.log('leftName', leftName);
