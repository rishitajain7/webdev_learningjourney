// Predefined values
const P = 40000; 
const r = 0.08;  
const n = 4;     
const t = 3;     

const A = P *(1 +r/n) **(n*t);
console.log("The compound interest after" , t ," years is: " + A);