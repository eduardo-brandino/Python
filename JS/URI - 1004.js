#https://www.beecrowd.com.br/judge/pt/problems/view/1004

var input = require("fs").readFileSync("stdin", "utf8");

var varlores = input.split("\n");

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());

var PROD = A * B;

console.log("PROD = " + PROD);
