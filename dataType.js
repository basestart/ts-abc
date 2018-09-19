/**
 * js数据类型： 原始数据类型 + 对象类型
 * 原始数据类型： 布尔值， 数值， 字符串， null， undefined， Symbol
 *
 */
// boolean
var isDone = false;
var createdByNewBoolean = new Boolean(1);
var createdByBoolean = Boolean(1);
// number
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
// 字符串
var myname = "fride";
var centence = "hello, my name is " + myname;
console.log(centence);
// void
function alertName() {
    alert("hello my name");
}
var unusable = undefined;
//null undefined
var u = undefined;
var n = null;
