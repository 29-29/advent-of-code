const { readFile, readFileSync } = require('fs')

const input = readFileSync('./input.txt', 'utf-8')

let floor = 0

for (let i=0; i<input.length; i++) {
	if (input[i]=='(') floor++
	else if (input[i]=')') floor--
}

console.log(floor)
