

import ArrayQueue from "./01_实现队列结构Queue";

const queue = new ArrayQueue<string>()

queue.enqueue('first')
queue.enqueue('seconde')
queue.enqueue('third')

queue.dequeue()



console.log(queue.size());
 