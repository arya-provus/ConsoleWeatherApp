import start from "./src/start.mjs";
import  readline from "readline/promises";

//const { stdin: input, stdout: output } = require('node:process');//the input is being taken from keyboard and op from screen

const rl = readline.createInterface({ input:process.stdin, output: process.stdout });//rl is the object that we will use to take the input from user

start(rl);
