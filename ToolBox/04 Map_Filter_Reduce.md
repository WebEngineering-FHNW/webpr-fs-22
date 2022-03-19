# 04 Map Filter Reduction

Date: March 14, 2022 8:16 AM
Tags: class note

# Goodie

## jsDoc

by using jsDoc over a function, function can be descriped with the help of annotations. Therefore the function is bind to those information and it helps to avoid errors

```jsx
// first always make a cont even if you know, it's going to change!
//const a = "hello";
/**
 *@type{ String}
* */
leta= "hello";
console.log(a);
//a = 0; // with the java doc , now you see, that this should not be a number!
//left click on dir, analzye code, instpect code and check warnings
a= "0"; // now you have a string!

// js doc: {} defineds type!
// String | Number are called ???
/**
 * here is some more ingo about foo
 *@param{ String | Number } x- some more info about x
 */

const foo = x =>console.log(x);

foo("hi"); // now you have the js doc info within the function
foo(0);
//foo(true); should not work, because not defenied

// here ar just those kind of Strings allowed!
/**
 * here is some more ingo about foo
 *@param{ "hi" | "h3llo" } x- some more info about x
 */
const faa = x =>console.log(x);
faa("hi");
faa("h3llo");
//https://webengineering-fhnw.github.io/Kolibri/

```

# Agenda

## map

```jsx
**const***times* =a=>b=>a*b;
**const** *twoTimes* = times(2);
# [1, 2, 3].map(x => times(2)(x)); [1, 2, 3].map(times(2)); [1, 2, 3].map(twoTimes);
```

## filter

```jsx
**const** *odd* = x => x%2 === 1;
[1, 2, 3].filter(x => x % 2 === 1);
[1, 2, 3].filter(x => odd(x));
[1, 2, 3].filter(odd);
```

## reduce

**reduce((acc, cur) => acc + cur)**

```jsx
**const** *plus* = (accu, cur) => accu + cur;
[1, 2, 3].reduce((accu, cur) => accu + cur);
[1, 2, 3].reduce(plus);
// variant with initial accu value as 2nd argument
// then cur starts at first element
[1, 2, 3].reduce(plus, 0);
```