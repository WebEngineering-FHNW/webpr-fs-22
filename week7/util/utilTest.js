
// requires util.js

test("test-util-times", assert => {
    const collect = [];

    (10).times( n => collect.push(n) );

    assert.is(collect.length , 10);
    assert.is(collect[0]     , 0, "the first value should be 0");
    assert.is(collect[9]     , 9);
});

// extending the prototype of many objects
( () => {
    let ok = [];


    const collect = [];

    (10).times( n => collect.push(n) );

    ok.push(collect.length === 10);
    ok.push(collect[0]     === 0);
    ok.push(collect[9]     === 9);

    report("util-times", ok);
}) ();

( () => {
    let ok = [];



    const collect = (10).times( n => n+1 );

    ok.push(collect.length === 10);
    ok.push(collect[0] === 1);
    ok.push(collect[9] === 10);

    report("util-times2", ok);
}) ();
