//// [tests/cases/compiler/arrayLiteralComments.ts] ////

//// [arrayLiteralComments.ts]
var testArrayWithFunc = [
    // Function comment
    function() {
        let x = 1;
    },
    // String comment
    '1',
    // Numeric comment
    2,
    // Object comment
    { a: 1 },
    // Array comment
    [1, 2, 3]
]

//// [arrayLiteralComments.js]
var testArrayWithFunc = [
    // Function comment
    function () {
        let x = 1;
    },
    // String comment
    '1',
    // Numeric comment
    2,
    // Object comment
    { a: 1 },
    // Array comment
    [1, 2, 3]
];
