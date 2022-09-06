let varName: string = 'valoare'
let age: number = 1.2
const numberOfMonths = 12

let msg = `Putem interpola ${varName} variabile si apeluri de metoda ${varName.length}`

console.log(msg)

let isSo: boolean = true;

let ages: number[] = [10, 15, 22, 33];
let names: Array<String> = ["Hellen", "John", "Miriam"];
names.push("New name");
console.log(names);
console.log(names.pop());
console.log(names);
names.splice(1, 1);
console.log(names);

let nuFolositi: any = "string";
nuFolositi = 3;

console.log(nuFolositi);
myFunction('test');

function myFunction(name: string) {
    console.log(`Name is ${name}`)
}

myFunction('test');

let myFunc = function () {
    console.log("test")
};

myFunc()

let otherVar = myFunction;
otherVar('other');

const lambda = input => console.log(`my input is ${input}`);

lambda("test");

function printInfo(name: string, age = 10) {
    if (age != null) {
        console.log(`name:${name}, age: ${age}`);
    } else {
        console.log(name);
    }
}

printInfo("Maria")
printInfo("Maria", 33);

function addStudent(student: { name: string, age: number }): { name: string, highschool: boolean, note?: string } {
    return {
        name: student.name,
        highschool: student.age > 14,
        note: "OK"
    }
}

console.log(addStudent({
    name: "Paul",
    age: 30
}));

type MyInput = string | any[] | Array<string>;

function multiple(str: MyInput) {
    console.log(str.length);
    console.log(typeof str);
    console.log(Array.isArray(str));
}

multiple('salut');
multiple([1, 2, 3]);
multiple(["1", "2"]);

type Person = {
    name: string,
    address: string
};

let p: Person = {name: 'Ion', address: 'Oradea'}
console.log(p);

interface Address {
    city: string,
    zipcode?: number
}

let addr: Address = {
    city: 'Cluj'
}

console.log(addr);

function printAddr(addr: Address) {
    console.log(addr.city + " " + addr.zipcode);
}

printAddr(addr);

enum Cardinal {
    NORTH = 'NORTH',
    SOUTH = 'SOUTH',
    WEST = 'WEST',
    EAST = 'EAST'
}

console.log(Cardinal.SOUTH)

interface HouseAddress extends Address {
    houseNumber: string
}

let houseAddress: HouseAddress = {...addr, houseNumber: "3A"};
console.log(houseAddress);

function getLength(str: string)
function getLength(arr: any[])
function getLength(input: any) {
    console.log(input.length);
}

getLength('test');
getLength([1, 2, 3]);


function drive(speed: number)
function drive(speed: number, direction: Cardinal)
function drive(speed: number, direction: Cardinal, acceleration: number)
function drive(speed: number, direction = Cardinal.SOUTH, acceleration = 0) {
    console.log(`${speed} - ${direction} - ${acceleration}`)
}


drive(12);
drive(12, Cardinal.NORTH)
drive(12, Cardinal.NORTH, 3);

class Car {
    private readonly make: string
    _broken: boolean
    color: string

    constructor(make: string, broken: boolean, color?: string) {
        this.make = make;
        this._broken = broken || make === 'BMW';
        this.color = color;
    }

    get broken(): boolean {
        return this._broken;
    }

    set broken(value: boolean) {
        this._broken = value || this.make === 'BMW';
    }
}

let car = new Car('BMW', false, null);
console.log(car);
console.log(car.broken)
car.broken = false;
console.log(car);


export class BMW extends Car {
    constructor() {
        super("BMW", true);
    }

    rejuvenate() {
        console.log("km-100000");
    }
}

const bmw = new BMW();
console.log(bmw);

let pair: [string, number] = ["1", 2];
console.log(pair)

let map = {};
map['test'] = "value";
console.log(map);

