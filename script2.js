console.log("Hello");



const globalNumbers = [5,8,10,12,15,16,20,23];

let newNumbers = globalNumbers.map(i => i +3);
console.log(newNumbers)


let newNumbers2;
newNumbers2 = globalNumbers.filter(i => i > 9);
console.log(newNumbers2);



let newNumbers3;
newNumbers3 = globalNumbers.filter(i => i <= 20);
console.log(newNumbers3);



let filtredGlobalNumbers = globalNumbers.filter(number => number <=18);
console.log(filtredGlobalNumbers);


const funMultiplaing = (a,b,c) => a*b*c;

result = funMultiplaing(3,3,10) * 5
console.log(result);


result02 = globalNumbers.reduce((akumulator,i) => akumulator + i, 0);

console.log(result02);