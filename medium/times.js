/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

import { time } from 'console';

function calculateTime(n) {
    const startFallbackTime = Date.now();
    var sum=0;
    for(let i=0;i<n;i++){
        sum+=i;
    }

    const endFallbackTime = Date.now();
    return(endFallbackTime-startFallbackTime);


    return 0.01;
}
console.log("time taken: " +calculateTime(1000000000)+" ms");