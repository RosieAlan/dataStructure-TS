import ArrayStack from "./02_实现栈结构(重构)";

function isTrue(quoto: string): boolean {
    const stack = new ArrayStack
    for (let i = 0; i < quoto.length; i++) {
        switch (quoto[i]) {
            case "(":
                stack.push(")");
                break;
            case "{":
                stack.push("}");
                break;
            case "[":
                stack.push("]");
                break;
            default:
                if (quoto[i] !== stack.pop()) return false

        }
    }
    return stack.isEmpty()
}

console.log('isTrue("(")', isTrue("{{}"));
console.log('isTrue("{{}}")', isTrue("{{}})"));