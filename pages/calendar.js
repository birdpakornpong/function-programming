import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
export default function calendar() {
  const [value, onChange] = useState(new Date());
  console.log("Date: ", value);
  const mark = ["04-04-2021", "03-04-2021", "29-04-2021"];

  const persons = [
    { name: "John", age: 17 },
    { name: "Jane", age: 10 },
    { name: "Jim", age: 15 },
  ];

  //reduce for loop
  let totalAge = 0;
  for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    totalAge += person.age;
  }
  console.log("totalAge: ", totalAge);

  // short for loop
  let totalAgeShortForloop = 0;
  // let person of persons เหมือน let i = 0; i < persons.length; i++
  for (let person of persons) {
    totalAgeShortForloop += person.age;
  }
  console.log("totalAgeShortForloop: ", totalAgeShortForloop);

  // want access index
  for (let person in persons) {
    console.log("person: ", person);
  }

  const num1 = parseInt("100");
  console.log("text: ", num1);
  console.log("number: ", +num1);

  const pets = [
    { type: "Dog", name: "Max" },
    { type: "Cat", name: "Karl" },
    { type: "Dog", name: "Tommy" },
    { type: "Dog", name: "Pang" },
    { type: "Cat", name: "Kuy" },
  ];

  // find name
  function findDog(name) {
    for (let i = 0; i < pets.length; i++) {
      if (pets[i].type === "Dog" && pets[i].name === name) {
        console.log("findDog: ", pets[i]);
      }
    }
  }
  findDog("Pang");

  function findCat(name) {
    for (let pet of pets) {
      if (pet.type === "Cat" && pet.name === name) {
        console.log("findCat: ", pet);
      }
    }
  }
  findCat("Kuy");

  function findPet(type, name) {
    const petFind = pets.find((pet) => pet.type === type && pet.name === name);
    console.log("petFind: ", petFind);
  }
  findPet("Dog", "Tommy");

  // joining arrays
  const odd = [1, 4, 6, 7];
  const concatOdd = [2, 3, 5].concat(odd);
  console.log("concatOdd: ", concatOdd);
  // joining Spread
  const spreadOdd = [2, 3, 5, ...odd];
  console.log("spreadOdd: ", spreadOdd);
  // cloning arrays
  const arr = [1, 2, 3, 4];
  const arr2 = arr.slice();
  console.log("arr2: ", arr2);
  const arr3 = [...arr];
  console.log("arr3: ", arr3);

  const statusMathfloor = Math.floor(4.9) === 4;
  console.log("statusMathfloor: ", statusMathfloor);
  const mathFloor = Math.floor(-4.5) === -4;
  console.log("mathFloor = -5 ไม่ใช่ -4", mathFloor);
  const mathFloorShort = ~~-6.7;
  const mathFloorShorts = ~~6.7;
  console.log("mathFloorShort: ", mathFloorShort);
  console.log("mathFloorShort: ", mathFloorShorts);

  // power ยกกำลัง
  const power = Math.pow(2, 4);
  console.log("power: ", power);
  const powerShort = 2 ** 5;
  console.log("mathPower: ", powerShort);
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        tileDisabled={({ date }) => {
          if (mark.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
            return true;
          }
        }}
      />
    </div>
  );
}
