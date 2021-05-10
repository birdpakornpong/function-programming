import React from 'react'

export default function tipjs() {
    // 1. Default parameters

    const API = {
        getWeather: () => 'Sunny'
    };

    // Bad
    function getWeather(input) {
        return API.getWeather(input || 'Bangkok');
    }
    console.log('getWeatherInputBad: ', getWeather());

    // Good
    function getWeatherGood(input = 'Bangkok'){
       return API.getWeather(input)
    }
    console.log('getWeatherGood: ', getWeatherGood())
   
    // ถ้าไม่มี input ต้องการ error
    function getWeatherError(input = requireInput()) {
        return API.getWeather(input)
    }
    function requireInput() {
        throw new Error('input parameter is required')
    }
    console.log('getWeatherError: ', getWeatherError(''))

    // 2. Template literals

    // Bad
    function toString(name, lastName) {
        return 'Name: ' + name + ', LastName: ' + lastName;
    }

    // Good
    function toStringGood(name, lastname) {
        return `Name: ${name}, LastName: ${lastname}`;
    }

    // 3. Destructuring
    const person = {
        name: 'John',
        lastName: 'Doe',
        age: 25,
        location: {
            city: 'Bangkok',
            country: 'Thailand'
        }
    }
    // ใส่ default parameter ด้วย 
    // *** สำคัญ
    function stringDestructuring({name, lastName, location: { city } = '' } = '') {
        return `Name: ${name}, lastName: ${lastName}, location: ${city}`
    }
    console.log('stringDestructuringDefaultParameter: ', stringDestructuring())
    console.log('stringDestructuring: ', stringDestructuring(person));

    const food = ['a', 'b', 'c', 'd'];
    const [cake, pizza, apple] = food;
    console.log(`cake : ${cake}, pizza : ${pizza}, apple ${apple}`);
    const [, , , manga] = food;
    console.log(`manga : ${manga}`)

    // 4. Spread
    let animal = { name: 'Pig'};
    animal = { ...animal, color : 'pink'}
    console.log('animal: ', animal)

    // Good 
    const number = [1, 2, 3, 4, 5];
    let numbers = [...number, 6];
    console.log('number: ', numbers);

    // Bad 
    number.push(6)
    console.log('pushBad: ', number)

    // 5. Reduce Filter Map
    const dataTest = [1, 3, 6, 8, 13, 14, 15, 16];
    const sum = dataTest.reduce((sum,data) => {
        return sum + data
    },0)
    console.log('sum: ', sum);
    const modTwo = dataTest.filter((data) => {
        return data % 2 === 0
    })
    console.log('modTwo: ', modTwo);
    const powerTwo = dataTest.map(data => data ** 2)
    console.log('powerTwo: ', powerTwo);

    // 6. Async,Await
    const APIs = {
        getWeather: () => Promise.resolve(),
        process: () => Promise.resolve()
    }
    async function getAPI() {
        const weather = await APIs.getWeather();
        console.log(`show weather ${ await APIs.process(weather)}`)
    }
    getAPI();
    return (
        <div>
            <h1>Tips JavaScript</h1>
        </div>
    )
}
