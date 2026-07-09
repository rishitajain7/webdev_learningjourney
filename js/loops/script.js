const number = 10;

// 1. Sum of first n numbers
console.log("Sum of first n numbers");
let sum = 0
for (let i = 1; i <= number; i++) {
    sum = sum + i;
    }
console.log(sum);


// 2. Table of n
console.log("Table of n");
for (let i = 1; i <= 10; i++) {
    let multiply = number * i;
    console.log(number + " x " + i + " = " + multiply);
}


// 3. Check Prime Number
console.log("Check for Prime");
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
    }
    }
}
if (isPrime) {
    console.log(number + " is a Prime Number");
} else {
    console.log(number + " is not a Prime Number");
}


// 4. Print Factors
console.log("Print Factors");

for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        console.log(i);
    }
}


// 5. Sum of Digits
console.log("Sum of Digits");

let digitSum = 0;
let str = String(number);

for (let i = 0; i < str.length; i++) {
    digitSum = digitSum + Number(str[i]);
}

console.log("Sum of digits = " + digitSum);


// 6. Check Armstrong Number
console.log("Check Armstrong Number");

let armSum = 0;
let armStr = String(number);

for (let i = 0; i < armStr.length; i++) {
    let digit = Number(armStr[i]);
    armSum = armSum + digit * digit * digit;
}

if (armSum == number) {
    console.log(number + " is an Armstrong Number");
} else {
    console.log(number + " is not an Armstrong Number");
}