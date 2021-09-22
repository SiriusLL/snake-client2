const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
// connect();

const calls = connect();

setupInput(calls);
