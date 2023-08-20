class ArrayStack {
    private data: any[] = []

    push(element): void {
        this.data.push(element)
    }

    pop(): any {
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

const stack1 = new ArrayStack()

stack1.push('aaa')