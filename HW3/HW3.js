//* Task 1
let arrayTest = [2,3,4,5];
let resultTest =1;
for(let i=0; i < arrayTest.length;i++){
resultTest *= arrayTest[i];

}
console.log ( ` Test result: `  + resultTest);

//Task 2

for (let i=0; i < 15; i++) {

    if (( i % 2 ) == 0) {
console.log (i+ `is even`);


    } else {
        console.log (i+ `is odd`)
    }
}

//Task 3
function randArray (n) {

    let arrayNextTask = []
    for (let i =0; i < n; i++) {
        arrayNextTask =[]
        for (let i = 0; i< n; i++) {
            arrayNextTask[i] = Math.round (Math.random () * 499) + 1;
        }
        return arrayNextTask;
    } 

    let NextTaskInputValue = prompt(`Enter the number:`, `3`);
    let arrayResultNextTask = randArray (parseInt (NextTaskInputValue));
    console.log(`Next task result:` +arrayResultNextTask)


// Task 4 

function raiseToDegree (a, b) {

    let result = a;

    for (let i =1; i< b; i++) {

        result *= a;
    }
return result;
}

let a = prompt ("a?", ``);
let b = prompt ("b?", ``);

if (b < 1) {
    console.log (`Degree ${b} not supported, please use natural number` );
}
else {
    console.log( raiseToDegree(a,b) );
}

// Task 5

function findMin() {}
    let min = arguments[0];
    for (i = 1; i < arguments.length; i++){
        if (arguments[i] < min) {
            min =arguments [i];

        }
    }
    return  min;

}
findMin (12, 14, 4, -4, 0.2)

// Task 6

function findUnique(arr) {
for (let i = 0; i < arr.length; i++){
    for (let j = (i + 1); j < arr.length; j++){
    if(arr[i] === arr [j]){
        return false;
    }
}

}
return true;
}
findUnique ([1,2,3,5,3])

// Task 7

function lastElement (arr, count) {
    if (count== null) {
console.log(arr.pop())

    }
    else {
console.log (arr.slice(-count));


    }
}

lastElement ([3, 4, 10, -5]);
lastElement ([3, 4, 10, -5], 2);
lastElement ([3, 4, 10, -5], 8)