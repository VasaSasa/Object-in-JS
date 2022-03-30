// task 10

/*
function myFunction(num1,num2) {
    for (let index = num1; index <= num2; index++) {
        console.log(index);
    }
}





function mainFunction() {
    let num1 = prompt("Enter number one: ");
    let num2 = prompt("Enter number two");
    myFunction(num1,num2);
}

mainFunction()
*/

// task 11


/*

function myFunction(num1,num2) {
    if (num1 > num2) {
        for (let index = num1;index >= num2;index--) {
           console.log(index);
        } 
    } else if (num1 < num2) {
        for (index = num1; index <= num2; index++) {
            console.log(index);
        }
    } else if (num1 == num2) {
        console.log("Entered number are equal each other");
    }
}




function mainFunction() {
    let num1 = prompt("Enter number one: ");
    let num2 = prompt("Enter number two: ");
    myFunction(num1,num2);
}



mainFunction();
*/

// task 12




/*
function myFunction(array01,word01,)




function mainFunction() {
    let array01 = new array();
    let stop = false;
    while  {

    }

}




mainFunction()
*/


/*
let array01 = new Array();
array01.push(prompt("Enter number: "));
console.log(array01);
*/


/*
let array01 = []
array01.push(prompt("Enter item: "));
console.log(array01);
*/


/*
let stop = true;
let array01 = []
let item;
while (stop == true) {
    item = prompt("Enter item of list or 'STOP'.");
    if (item == "STOP") {
        break
    }
    array01.push(item);
    //console.log(array01);
} 


console.log(array01)
*/



//function myFunction(st,ar) {

//}




//function myFunction()



/*
let item;
let array01 = []
let string01;
function mainFunction() {
    while (true) {
        item = prompt("Enter item of list: ");
        array01.push(item);
        if (prompt("Would you like to proceed to enter items? (y/n)") == "n") {
            break
        }
    }
    string01 = prompt("Enter whatever you want: ");
    array01.push(string01);
    array01.unshift(string01);
    console.log(array01);
}


mainFunction()

*/

/*
function myFunction(ar,st) {
    ar.push(st + "!!");
    ar.unshift(st + "$$");
    console.log(ar)
}


let item;
let array01 = []
let string01;
function mainFunction() {
    while (true) {
        item = prompt("Enter item of list: ");
        array01.push(item);
        if (prompt("Would you like to proceed to enter items? (y/n)") == "n") {
            break
        }
    }
    string01 = prompt("Enter whatever you want: ");
    //array01.push(string01);
    //array01.unshift(string01);
    //console.log(array01);
    myFunction(array01,string01)
}


mainFunction()

*/

/*
function myFunction(ar,st) {
    ar.push(st + "!!");
    ar.unshift(st + "$$");
    console.log(ar)
}

function mainFunction() {
    let item;
    let array01 = [];
    let string01;
    while (true) {
        item = prompt("Enter item of list: ");
        array01.push(item);
        if (prompt("Would you like to proceed to enter items? (y/n)") == "n") {
            break
        }
    }
    string01 = prompt("Enter whatever you want: ");
    myFunction(array01,string01)
}


mainFunction();

*/


/*
function myFunction(ar,st) {
    ar.push(st + "!!");
    ar.unshift(st + "$$");
    console.log(ar)
}



myFunction(['auto','eva'],'2000');
*/



function myFunction(x1) {
    let number = 10;
    console.log(x1 + number)
    return x1 * 5;
    
}

console.log(myFunction(50) + 50);


const myFunction2 = function(x2) {
    return x2 + 5;
}

myFunction2(10);


console.log(myFunction2(20));



const myFunction3 = (x3) => {
    return x3 + 3;
}

console.log(myFunction3(10));


const myFunction4 = x4 => x4 +10; 



console.log(myFunction4(1000));