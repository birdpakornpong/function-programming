import React from 'react'

export default function recursion() {
    // What's Recursion? ฟังชันเรียกใช้ตัวมันเอง
    function countDown(n) {
        if (n < 0) return 0;
        console.log('countDown: ', n);
        countDown(n - 1);
    }
    countDown(10);

    // Why/When should we use Recursion?
    //// 1. Shorter and more readable
    //// 2. A problem can be built off of sub-problems

    // How to use Recursion?
    //// 1. Base case
    //// 2. Recursive case

    // f(1) = 1
    // f(2) = 2 * f(1)
    // f(3) = 3 * f(2)
    function factorial(n) {
        if (n === 0) return 1;
        return n * factorial( n - 1 );
    }
    console.log('factorial: ', factorial(5));

    // abc => cba
    // c => c
    // bc => reverse(c) + b
    // abc => reverse(bc) + a
    function reverse(str) {
        if (str.length === 1) return str;
        const [firstCharacter] = str;
        const remainingCharacter = str.substring(1);
        return reverse(remainingCharacter) + firstCharacter
    }
    console.log('reverse: ', reverse('abcd'));

    return (
        <div>
            <h1>Recursion</h1>
        </div>
    )
}
