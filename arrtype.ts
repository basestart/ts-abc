let fibnacci: number[] = [1, 1, 2, 3, 5];
let arr: Array<number> = [1,2,3,4,5];

interface numberArr {
    [index: number]: number
}

let fib: numberArr = [1, 1, 2, 3, 5];

let list: any[] = ['a', 1, 2, {}];

// arguments
/**
 * 类数组（Array-like Object）不是数组类型，比如 arguments：
 * 事实上常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
 */
function sun () {
    // let args: number[] = arguments;
    let args: IArguments = arguments;
}