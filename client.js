/**
 * Establishes connection with the game server
 */

const net = require('net');
const { LOADIPHLPAPI } = require('dns');


const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', function(data) {
    console.log('Server says:', data);
  });

  conn.on('connect', function() {
    console.log('Successfully connected to game server');
    conn.write('Name: LPO');

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 500);

    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 1000);

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 1500);

    // setTimeout(() => {
    //   conn.write("Move: right");
    // }, 1500);

    
  });

  return conn;
}


module.exports = {connect};

