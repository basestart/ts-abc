function sayHello (person: string) {
    return "hello, " + person;
}

let user = "Tom";
console.log(sayHello(user));
let errperson = [1, 2, 3];
console.log(sayHello(errperson));