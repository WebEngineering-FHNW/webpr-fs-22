// first always make a cont even if you know, it's going to change!
//const a = "hello";
/**
 * @type { String}
 * */
let a = "hello";
console.log(a);
//a = 0; // with the java doc , now you see, that this should not be a number!
//left click on dir, analzye code, instpect code and check warnings
a = "0"; // now you have a string!

// js doc: {} defineds type!
// String | Number are called ???
/**
 * here is some more ingo about foo
 * @param { String | Number } x - some more info about x
 */

const foo = x => console.log(x);

foo("hi"); // now you have the js doc info within the function
foo(0);
//foo(true); should not work, because not defenied


// here ar just those kind of Strings allowed!
/**
 * here is some more ingo about foo
 * @param { "hi" | "h3llo" } x - some more info about x
 */
const faa = x => console.log(x);
faa("hi");
faa("h3llo");
//https://webengineering-fhnw.github.io/Kolibri/


