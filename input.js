const { connect } = require('./client');
const { stdin } = require('process');
// connect();


/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */


let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'h') {
    connection.write('Say: Hey');
  }
  if (key === 'i') {
    connection.write('Say: I win!');
  }
  if (key === 'l') {
    connection.write('Say: You lose!');
  }

};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);
  
  return stdin;
};


setupInput();

module.exports = {setupInput};
