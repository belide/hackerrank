'use strict';

// https://www.hackerrank.com/challenges/30-binary-numbers
// tip: try to search the maximum in the same loop where you convert n to binary
// tip2: one-line solution, but cheating (it uses native function to convert to binary)
// Math.max(...Number(n).toString(2).split(/0+/).map(e => e.length))

function main(n) {
    let current = 0, answer = 0;
    while (n > 0) {
        let binaryDigit = n % 2;
        n = Math.trunc(n / 2);
        if (binaryDigit) answer = Math.max(answer, ++current);
        else current = 0;
    }

    process.stdout.write('' + answer);
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main(+ readLine());
});

function readLine() {
    return input_stdin_array[input_currentline++];
}
