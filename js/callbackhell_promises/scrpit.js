// Arrow function that returns a Promise
const divide=(a,b) => {

    return new Promise((resolve, reject) => {
    if (b == 0) {
        reject("Cannot divide by zero.");
        }
        else {
        resolve(a / b);
        }
    });};

let testCases = [
    [20, 5],
    [18, 3],
    [15, 0],
    [100, 4],
    [81, 9]
];

for (let i = 0; i < testCases.length; i++) {
    divide(testCases[i][0], testCases[i][1])
    .then(function(result) {
        console.log(
            testCases[i][0] + "/" +
            testCases[i][1] + "=" +
            result
        );
        })

    .catch(function(error){
        console.log(
            testCases[i][0] + "/ " +
            testCases[i][1] + " :" +
            error
        );
    });}