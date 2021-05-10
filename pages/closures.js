import React from 'react'

export default function closures() {
    // What's Closures?
    function outer() {
        const outer = 'Outers';
        function inner() {
            console.log('Outers: ', outer);
        }
        inner()
    }
    outer()
    // outer() return inner()
    function outerV2() {
        const outer = 'OutersV2';
        return function inner() {
            console.log('OutersV2:', outer);
        }
    }
    const innerFunction = outerV2();
    innerFunction()

    //Data privacy
    function createTime() {
        let counter = 0;
        return function times() {
            counter += 1
            console.log('counter', counter);
        }
    }
    const time = createTime()
    time();
    time();
    time();

    // Stateful functions
    function addFive(a) {
        return a + 5
    }
    function addTen(a) {
        return a + 10
    }
    console.log('addFive: ', addFive(6));
    console.log('addTen: ', addTen(8));

    function addNumber(a) {
        return function addNum(b) {
            return a + b
        }
    }
    const addFiveStateful = addNumber(5);
    const addTenStateful = addNumber(10);
    console.log('addFiveStateful: ', addFiveStateful(2));
    console.log('addTenStateful: ', addTenStateful(9));
    
    return (
        <div>
            <h1>Closures</h1>
        </div>
    )
}
