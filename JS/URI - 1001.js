#https://www.beecrowd.com.br/judge/pt/problems/view/1001

var input = require("fs").readFileSync("stdin", "utf8");

var varlores = input.split("\n");

var A = parseInt(varlores.shift());
var B = parseInt(varlores.shift());

var X = A + B;

console.log("X = " + X);
