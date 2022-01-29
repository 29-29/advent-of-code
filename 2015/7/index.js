import { sign } from 'crypto'
import {copyFileSync, readFileSync} from 'fs'
import { isMainThread } from 'worker_threads'

const input = readFileSync('./input.txt','utf-8').split('\r\n')

let wires = {}

const opCode = {
	'AND': '&',
	'OR': '|',
	'NOT': '~',
	'RSHIFT': '>>',
	'LSHIFT': '<<'
}

function sendSignal(signal,wire) { 
	wires[wire] = signal
}

function assignValues(i) {
	let instr = i.split(' ')
	if (instr.length==3) sendSignal(instr[0],instr[2])
	else wires[instr[instr.length-1]] = instr.slice(0,instr.length-2).join(' ')
}

function calcValues(wire) {
	// console.log(`setting value to ${wires[wire]}`)
	let value = wires[wire]
	if (!isNaN(wire)) {
		// console.log(`${wire} is a number so return ${wire}`)
		return parseInt(wire)
	}
	if (!isNaN(value)) {
		// console.log(`wire ${wire} signal is a number`)
		wires[wire] = parseInt(parseInt(value).toString(2).slice(-16),2)
		return wires[wire]
	} else {
		// console.log(`wire ${wire} contains instruction: ${value}`)
		// console.log(`evaluating instruction: ${value}`)
		let instr = value.split(' ')
		let evalStr = ''
		for (let i of instr) {
			// console.log(`now evaluating ${i}`)
			if (opCode[i]!=undefined) {
				// console.log(`${i} is an opCode: ${opCode[i]}`)
				evalStr += opCode[i] + ' '
			}
			else {
				if (!isNaN(i)) {
					// console.log(`${i} is a number`)
					evalStr += i + ' '
				}
				else {
					// console.log(`${i} is a wire`)
					evalStr += calcValues(i) + ' '
				}
			}
		}
		// console.log(`final operation:${evalStr}`)
		wires[wire] = eval(evalStr+'& 0xFFFF')
	}
	return wires[wire]
}

function main() {
	for (let i of input) {
		assignValues(i)
	}
	console.log(wires)
	console.log(calcValues('a'))
}

function test(wires) {
	let instrA = [
		'123 -> x',
		'456 -> y',
		'x AND y -> d',
		'x OR y -> e',
		'x LSHIFT 2 -> f',
		'y RSHIFT 2 -> g',
		'NOT x -> h',
		'NOT y -> i'
	]
	instrA.forEach(instr=>assignValues(instr))
	for (const wire in wires) calcValues(wire)
	console.log(wires)
}

main()
// test(wires)