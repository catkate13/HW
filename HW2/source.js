/* Exercise 1*/
 
let x = 1;
let y = 2;

let res1 = `` +x+y;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = `true`+y; 
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x!=y; 
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseInt(!!x)+y;
console.log(res4); // NaN
console.log(typeof res4) // "number"

///Exercise 4

let cities = ["Rome", "Lviv", "Warsaw"]; ;
console.log(cities.join('*'))

//Exercise 5

/*Exercise 7*/

let a = Number (prompt(`Set first side value`)); 
let b = Number (prompt(`Set second side value`)); 
let c = Number (prompt(`Set third side value`)); 

/// Triangle area calculation

if ( a > 0 && b > 0 && c > 0) {

   let p = (a+b+c)/2;
   let triangleArea = Math.sqrt(p * (p-a) * (p-b ) * (p-c));
   console.log(`Triangle area is: `+ triangleArea.toFixed(3)); 
}

else {
    alert (`Invalid data`)
}

///Checking that triangle is right-angled

if ((a*a+b*b*b===c*c) || (b*b+c*c===a*a) || (c*c+a*a===b*b))  {
    console.log (`Right-angled triangle`)
}
else {
console.log (`Not  right-angled triangle`)

}
