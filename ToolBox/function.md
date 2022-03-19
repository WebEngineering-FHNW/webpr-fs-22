# function

Date: February 21, 2022 9:59 AM
Tags: class note

Structure of a function:

```jsx
// structure of a function
function name(parameter) { statement; }

function fun1()    { return 1; }
document.writeln( fun1()   === 1 );
document.writeln( fun1(42) === 1 );
```

Always last defined function is the current used function:

```jsx
function fun2()    { return 1; }
function fun2(arg) { return arg; }
```

If a function returns something, `return` is mandatory in the statement. (If it sets directly a new value to a parameter, then `return`is not needed.)

```jsx
function noReturn()    { 1; } // returns undefiend!
```

A shorter way to write a function without using return is the **fat arrow notation**:

```tsx
const noReturn3 = () => 1;
```

*Note: fat arrow notation can also be written with {} but in this case the return key word is again mandatory!*

## Higher order function

A function that does multiple things - in this example: a function that calls another function with a parameter

```jsx
function doit(whatToDo) {
     return function bla(arg) { return whatToDo(arg); } 
 }

document.writeln( doit(fun1)(10) === 1 ); 
document.writeln( doit(fun2)(10) === 10 );
```

*Note: a function in a function is called without parentheses!*  

A higher function can also be called by using fat arrows but this is called **curried style:**

```jsx
const doit2 = callme => arg => callme(arg) ;
```

Or instead with embedded function with multiple values:

```jsx
const plus = (x) => (y) => x+y;

document.writeln( plus(3)(4)  === 3 + 4 && plus(3) === 3);
```