/**
 * js数据类型： 原始数据类型 + 对象类型
 * 原始数据类型： 布尔值， 数值， 字符串， null， undefined， Symbol
 * 
 */
// boolean
let isDone: boolean = false;
let createdByNewBoolean: Boolean = new Boolean(1);
let createdByBoolean: boolean = Boolean(1);

 // number
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// 字符串
let myname: string = "fride";
let centence: string = `hello, my name is ${myname}`;
console.log(centence);


// void
function alertName(): void {
    alert("hello my name");
}
let unusable: void = undefined;


//null undefined

let u: undefined = undefined;
let n: null = null;


 


