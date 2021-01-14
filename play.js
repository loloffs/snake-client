const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
console.log("Move: up - move up one square (unless facing down)");
console.log("Move: down - move down one square (unless facing up)");
console.log("Move: left - move left one square (unless facing right)");
console.log("Move: right - move left one square (unless facing left)");


setupInput(connect());