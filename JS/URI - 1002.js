#https://www.beecrowd.com.br/judge/pt/problems/view/1002

var input = require("fs").readFileSync("stdin", "utf8");

var PI = 3.14159;
var raio = parseFloat(input);

var area = PI * math.pow(raio, 2);

console.log("A=" + area.toFixed(4));
