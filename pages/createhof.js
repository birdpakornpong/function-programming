import React from 'react'

export default function createhof() {
    const persons = [
        { name: "John", age: 17 },
        { name: "Jane", age: 10 },
        { name: "Jim", age: 15 }
    ];

    // filter
    const filterPerson = persons.filter(person => person.age <= 15)
    console.log('filterPerson: ', filterPerson);

    // myFilter
    function myFilter(arr, callback) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if (callback(element)) {
                result.push(element);
            }
        }
        return result;
    }
    const testMyFilter = myFilter(persons, person => person.age <= 15);
    console.log('testMyFilter', testMyFilter);

    // myFilter ผูกกับ Array.Prototype
    Array.prototype.myFilterV2 = function myFilterV2(callback) {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            const element = this[i];
            if (callback(element)) {
                result.push(element);
            }
        }
        return result
    }
    const testMyFilterV2 = persons.myFilterV2(person => person.age <= 15);
    console.log('testMyFilterV2: ', testMyFilterV2);

    // map
    const mapPerson = persons.map(person => {
        return {
            ...person,
            age : person.age * 2
        }
    });
    console.log('mapPerson: ', mapPerson);
    // myMap
    function myMap(arr, callback) {
        const result = [];
        for (let i = 0; i < arr.length;i++) {
            const element = arr[i];
            result.push(callback(element))
        }
        return result
    }
    const testMyMap = myMap(persons, person => {
        return {
            ...person,
            age: person.age * 2
        }
    })
    console.log('testMyMap: ', testMyMap);
    // myMap ผูกกับ Array.Prototype
    Array.prototype.myMapV2 = function myMapV2(callback) {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            const element = this[i];
            result.push(callback(element))
        }
        return result
    }
    const testMyMapV2 = persons.myMapV2(person => {
        return {
            ...person,
            age: person.age * 2
        }
    })
    console.log('testMyMapV2: ', testMyMapV2);
    
    return (
        <div>
            <h1>Create Higher-Order Functions</h1>
        </div>
    )
}
