class ArrayStack<T = any> {
    private data: T[] = []

    push(element: T): void {
        this.data.push(element)
    }

    pop(): any | undefined {
        return this.data.pop()
    }

    peek(): any {
        return this.data[this.data.length - 1]
    }

    isEmpty(): boolean {
        return this.data.length !== 0
    }

    size(): any {
        return this.data.length
    }
}

const stack1 = new ArrayStack<string>()

stack1.push('aaa')

const stack2 = new ArrayStack()
stack2.push(1)


export { }