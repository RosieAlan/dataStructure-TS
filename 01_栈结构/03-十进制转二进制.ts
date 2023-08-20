import ArrayStack from './02_实现栈结构(重构)'
function decimalToBinary(decimal: number): string {
    const stack = new ArrayStack
    while (decimal > 0) {
        const res = decimal % 2
        stack.push(res)
        decimal = Math.floor(decimal / 2)
    }
    while (!stack.isEmpty()) {
        console.log(' stack.pop()',  stack.pop());
    }
    return ''
}

decimalToBinary(35)

export { }