const divideNumbers = (num1, num2) => {

    return new Promise(function(resolve, reject) {

        if (num2 === 0) {
            reject("Error: Division by zero is not allowed.");
        } else {
            resolve(num1 / num2);
        }

    });

};

divideNumbers(20, 5)
.then(function(result) {
    console.log("20 / 5 =", result);
})
.catch(function(error) {
    console.log(error);
});

// Test Case 2
divideNumbers(15, 3)
.then(function(result) {
    console.log("15 / 3 =", result);
})
.catch(function(error) {
    console.log(error);
});

// Test Case 3
divideNumbers(10, 0)
.then(function(result) {
    console.log("10 / 0 =", result);
})
.catch(function(error) {
    console.log(error);
});

// Test Case 4
divideNumbers(50, 10)
.then(function(result) {
    console.log("50 / 10 =", result);
})
.catch(function(error) {
    console.log(error);
});

// Test Case 5
divideNumbers(81, 9)
.then(function(result) {
    console.log("81 / 9 =", result);
})
.catch(function(error) {
    console.log(error);
});