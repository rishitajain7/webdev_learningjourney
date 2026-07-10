let array = [4,8,2,11,6,7,10]

let max=0;
console.log("Max element finding");
function maxElement(){
for(let i=0;i<array.length;i++){
    if(array[i+1]>array[i]){
        max=array[i+1];
    }
}
return max
}
console.log("max element in the array is:",maxElement());


console.log("sum of all elements");
let sum=0;
let sumOfElements= function(){
for(let i=0;i<array.length;i++){
    sum=sum+array[i];
}
return sum}


console.log("sum of all elements in the array is:",sumOfElements());


console.log("count the no. of odd numbers");
let count =0;

let oddElements=()=>{
for(let i=0;i<array.length;i++){
    if(array[i]%2!==0){
        count++;
    }
}
return count}

console.log("the number of odd numbers in the array is :",oddElements());



