const {readFileSync} = require('fs')

const input = readFileSync('./input.txt','utf-8')

let wires = {}

const interpreter = (instr) => {
	instr = instr.split(' ')
}