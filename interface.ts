interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id: 1,
    name: 'tom',
    age: 25
}

let jim: Person = {
    id: 2,
    name: "fride"
}

let home: Person = {
    id: 3,
    name: 'hell',
    gender: "male"
}
// home.id = 4;