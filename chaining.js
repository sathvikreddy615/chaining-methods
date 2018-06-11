const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// Challenge #1

const sortDescending = (a, b) => {
    return b - a;
}

// Challenge #2

const greaterThan19 = integer => {
    return integer < 19;
}

// Challenge #3

const multiplyArr = integer => {
    return (integer * 1.5) - 1;
}

// Challenge #4

const sumArr = (runningTotal, next) => {
    return runningTotal + next;
}

const finalAnswer = `${integers.sort(sortDescending).filter(greaterThan19).map(multiplyArr).reduce(sumArr)}`;

console.log(`Final Output: ${finalAnswer}`); // Final Output = 111.5 (console)

document.write(`Final Output: ${finalAnswer}`); // Final Output = 111.5 (DOM)