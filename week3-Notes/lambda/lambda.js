const id = x => x;
const konst = x => y => x;
const snd = x => y => y;

//const T = x => y => x; //make it run and then make it better!
//const F = x => y => y;
const T = konst;
const F = snd;

//imoplement & (p = predicet; q following because of historical reasons and not x and y anymore!)
//const and  = p => q => p (q (T) (F)) ( q(F) (F)) //if p is true then first () else second () in there is q(p&q)(p&!q)
//const and  = p => q => p (q (T) (F)) (F) //simplified because this is always false
//const and  = p => q => p (q ) (F) //simplified because this is always true bzw alwas q But still, is alwas nice without any T and F
const and  = p => q => p (q) (p) ;//therefore because the second p is alwasy flase, we can replace it with p
// (THIS is all done by sequenziell reasoning and now equational reasoning (what simple is just algerba=) )

//or 0or0=0; 0or1=1; 1or1=1; 1or0=1
//const or = p => q => p (q (T)(T))(q (T)(F))//dont forget to tun testcase!!!
//const or = p => q => p (q (T)(T))(T) // remember p(true)(false) bzw p(q(true)(false)) (q()()))
const or = p => q => p (p) (q); //correct!

const Pair      = x => y => f => f(x)(y); //f for function because of the test we know, firstname ist a function - !!!only scope that can not be comprimized!!!
//const firstname = x => y => x; //make it run make it right!
//const lastname  = x => y => x; //
const firstname = konst;
const lastname  = snd;

const Left   = x => f => g => f(x);//left we want the f function
const Right  = x => f => g => g(x); // right we want the g function
//const either = e => f => g => e(f)(g); // for complement we want either one or the other
//this can be improved! by using eta reduction
//const either = e => f => e(f);
//now eta era reduction
//const either = e => e;
// this is id function
const either = id;



// ----- special -----

const Tuple = n => [
    parmStore (n + 1) ( [] ) (parms => parms.reduce( (accu, it) => accu(it), parms.pop() ) ), // ctor
    ...Array.from( {length:n}, (it, idx) => iOfN (n) (idx) () )                    // selectors
];

const iOfN = n => i => value => // from n curried params, take argument at position i,
    n === 0
    ? value
    : x => iOfN (n-1) (i-1) ( i === 0 ? x : value );


const parmStore = n => args => onDone =>  // n args to come
    n === 0
    ? onDone(args)
    : arg => parmStore(n - 1)([...args, arg]) (onDone); // store parms in array

const Choice = n => [
    ...Array.from( {length:n}, (it, idx) => parmStore(n+1) ([]) (parms => parms[idx+1] (parms[0]) ) ), // ctors
    id
];




