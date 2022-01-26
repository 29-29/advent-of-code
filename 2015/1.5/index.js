const {readFileSync, writeFileSync} = require('fs')

const input = readFileSync('./input.txt', 'utf-8')

let floor = 0
let out = ''

for (let i=0; i<input.length; i++) {
	if (input[i]=='(') floor++
	else if (input[i]==')') floor--
	out+=input[i] + ': ' + floor + '\n'
}

writeFileSync('./output.txt', out)
