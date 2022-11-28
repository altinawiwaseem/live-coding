const student:number = 5;

const userName:string = 'george';

let email = '213' // implicit or infer

email = '5';

let age: any = 3;
age = 'four'

const numbers:number[] = []

numbers.push(1)
// numbers.push('1') error in type

const fruits = ['apple', 'orange']
// fruits.push(3)

const address: {street: string, code?: string, streetNum: number} = {
    street: 'avc',
    // code: '19009',
    streetNum: 12,
}

const fruit = {
    taste: 'sweet',
    color: 'blue'
}

// fruit.odor = 54;
// fruit.taste = 3

const car: { [index: string]:string, model: string} = {
    model: 'a180'
}

car.number = 'abv'

interface props { // interface works ONLY with objects
    post: string,
    key: number,
    item: string
}

const component:props = {
    post: 'abc',
    key: 4,
    item: 'some item'
}

//union

let carPlates: string | number;

carPlates= 'abc'
carPlates=123


function returnsNothing(): void {

    console.log('hello')
    return 

}

function returnString(): string {

    return '123'
}

function namedParameters({address, email}: {address: string, email: string} ): string {

    return 'abc'
}

namedParameters({address: 'abfc', email: 'av'})


type PropType = (a: number, b: number) => number

const add: PropType = (a, b) => a + b;

// add(1, '2')
// add(1)
add(4, 5)