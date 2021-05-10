import React from 'react'

export default function hof() {
    // Higher-Order Functions

    const persons = [
        { name: "John", age: 17 },
        { name: "Jane", age: 10 },
        { name: "Jim", age: 15 }
    ];
    
    // filter
    // เขียนแบบ for loop
    const kids = [];
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        if (person.age <= 15) {
            kids.push(person)
        }
    }
    console.log('filterForLoop: ', kids);
    // เขียนแบบ HOF filter
    const filterHOF = persons.filter(person => person.age <= 15)
    console.log('filterHOF: ', filterHOF);

    //map
    // เขียนแบบ for loop
    const olderPersons = [];
    for ( let i = 0; i < persons.length; i++) {
        const person = persons[i];
        olderPersons.push({
            ...person,
            age : person.age * 2
        })
    }
    console.log('mapForLoop: ', olderPersons);
    // เขียนแบบ HOF map
    const mapHOF = persons.map(person => {
        return {
            ...person,
            age : person.age * 2
        }
    })
    console.log('mapHOF', mapHOF);

    // reduce
    // เขียนแบบ for loop
    let totalAge = 0;
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        totalAge += person.age
    }
    console.log('reduceForLoop: ', totalAge);
    // เขียนแบบ HOF reduce
    const reduceHOF = persons.reduce((age, person) => {
        return age + person.age
    }, 0)
    console.log('reduceHOF: ', reduceHOF);

    // forEach
    // เขียนแบบ for loop
    for ( let i = 0; i < persons.length; i++) {
        const person = persons[i];
        if (person.age > 15) continue; // ถ้า age มากกว่า 15 ข้ามไปเลย
        console.log(`Name ${person.name}, age ${person.age}`)
    }
    // เขียนแบบ HOF forEach
    persons.forEach((person) => {
        console.log(`HOFName ${person.name}, age ${person.age}`)
    })

    // find
    // เขียนแบบ for loop
    let jane;
    for ( let i = 0; i < persons.length; i++ ) {
        const person =persons[i];
        if (person.name === "Jane") {
            jane = person;
            break; // เจอแล้วหยุด
        }
    }
    console.log('fineForLoop: ', jane);
    // เขียนแบบ HOF find
    const findPerson = persons.find(person => person.name === "Jane")
    console.log('findHOF: ', findPerson);
    // เขียนแบบ HOF findIndex
    const findIndexPerson = persons.findIndex(person => person.name === "Jane") // findIndex หาตำแหน่งใน object
    console.log('findIndexHOF: ', findIndexPerson);

    // evevry, some
    // for loop
    let isKids = true;
    for (let i = 0; i < persons.length; i++) {
        const person =persons[i];
        if (person.age > 15) {
            isKids = false;
            break;
        }
    }
    console.log('isKids: ', isKids);

    const everyISKids = persons.every(person => person.age > 15);
    console.log('everyISKids: ', everyISKids);
    const someIsKids = persons.some(person => person.age > 15);
    console.log('someIsKids: ', someIsKids);
    
    return (
        <div>
            <h1>Higher-Order Functions</h1>
        </div>
    )
}
