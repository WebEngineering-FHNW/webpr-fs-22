# 02 lambda

Date: February 28, 2022 8:09 AM
Tags: class note

# `console.`

- `logs` takes any nbr of argument you want separated by comma
- `error` can help to find where your input comes from
- `dir`  is for directory try and you can see deeper whats in it
- `table` helps to inspect objects/maps
there are many more - these can be find in the mdn web docs documentation

## form eager to not eager(goodie)

# Scopes

only 2 scopes! 

- global (will always be in the window for browser) - but be careful with this scope- why?
- function -

## Variables

- `const`const -  variable first declare it as a const! it’s immutable —> you can’t change e.g the type (array stays an array) but you can change the value within the type ( the values of the array is mutable)
- `let`let - if you notice in further coding, that you really need a new x, than go back an change const to let ;)

*Note: 
- without declaration will be automatically global after first use!!! Better not to use it because it is error-prone
- Declaration `var`is an old way and does crazy stuff in behaviour... therefore DON’T USE IT in JS!*  

## Lambda

### IIFE - immediately invoked function expression

```jsx
( () => {...}) ();
```

### Lambda calculus

alpha : Rename parameter
beta : apply argument
eta :  cancel parameter

- alpha translation
- beta reduktion
- eta reduktion

## Lambda boolean logic

```
//const and  = p => q => p (q (T) (F)) ( q(F) (F)) //if p is true then first () else second () in there is q(p&q)(p&!q)
//const and  = p => q => p (q (T) (F)) (F) //simplified because this is always false
//const and  = p => q => p (q ) (F) //simplified because this is always true bzw alwas q But still, is alwas nice without any T and F
const and  = p => q => p (q) (p)
```

```
//or 0or0=0; 0or1=1; 1or1=1; 1or0=1
//const or = p => q => p (q (T)(T))(q (T)(F))//dont forget to tun testcase!!!
//const or = p => q => p (q (T)(T))(T) // remember p(true)(false) bzw p(q(true)(false)) (q()()))
const or = p => q => p (p) (q); //correct!
```

## Pair

is immutable!!! only scope that can not be comprimized!!! only rock silde scope! can not be changed from the outside!

## maybefunction to toolbox!