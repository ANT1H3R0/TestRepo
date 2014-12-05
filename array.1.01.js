//arrays might be the most important thing in any programming
//you'll find yourself pretty much always creating arrays and looping through them
//this part covers the creation, we'll loop on the next file

// this is how to declare an array
var walrusArray = [];

// this is also how to declare an array
var walrus = [];

// you can name it anything you want, but you can always tell an array because of those square brackets []
// both of the arrays above are empty


// This is how you declare an array with objects in it - arrays can contain strings(strings are words or text in quotes), numbers, arrays, ...pretty much anything
var mattsWalrus = ["fish", "penguins", "plankton", "whale meat", "seals", 4];

// you can view the objects in an array 
console.log(mattsWalrus);

// you can count how many objects are in an array 
console.log(mattsWalrus.length);

//if you know how many things are in the array and you always want to get the third thing
console.log(mattsWalrus[2]); //computers start counting at 0 not 1, I'm sure you already knew that

//if you wanted to read it more easily in the console you could add some text
console.log("the third object in the walrus is " + mattsWalrus[2]);

//you can add things to the array
mattsWalrus.push("some new thing");		   
//then check it
console.log(mattsWalrus);

//you can reverse the order of the array
console.log(mattsWalrus.reverse());

//you can have two or more arrays and join them together
var theNewWalrus = ["squid", 93, "ice", "something from the titanic"];

var combinedWalrusArray = mattsWalrus.concat(theNewWalrus);

console.log(combinedWalrusArray);

// PRACTICE(get creative, type everything out, don't copy/paste what i did above)
// 1 create 2 arrays with different names
// 2 print both arrays to the console
// 3 select one object in either array and print it to the console
// 4 print the lengths of both arrays to the console
// 5 print some text with some array values to the console
// 6 push some stuff to either array and print to the console with some text
// 7 combine both arrays and print to the console with some text
// 8 print something to the console using .reverse()


//to see this working put this code into the document ready part of the boilerplate file
//when you are done with this name it array.1.01.practice.js and commit it to the git repo you set up
//if you dont' know how to do that or have any questions im tmrw when you're home and we'll run through it

