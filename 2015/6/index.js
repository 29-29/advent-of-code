const {readFileSync} = require('fs')

const input = readFileSync('./input.txt','utf-8')
// const input = 'turn on 0,0 through 1,1'

let grid = []
// let oCount = 0 // on counter
let tBrightness = 0 // total brightness

function gridInit(grid,size) {
	for (let i=0; i<size; i++) {
		grid.push([])
		for (let j=0; j<size; j++) {
			grid[i].push(0)
		}
	}
}

function convCoord(coord) { // convert coords ('0,0') to ([0,0])
	let a = coord.split(',')
	for (let i=0; i<a.length; i++) a[i] = parseInt(a[i])
	return a
}

function toggle(start,end) {
	let s = convCoord(start) // start
	let e = convCoord(end) // end
	for (let i=s[1]; i<=e[1]; i++) {
		for (let j=s[0]; j<=e[0]; j++) {
			grid[i][j] += 2
		}
	}
}

function turnOn(start,end) {
	let s = convCoord(start) // start
	let e = convCoord(end) // end
	for (let i=s[1]; i<=e[1]; i++) {
		for (let j=s[0]; j<=e[0]; j++) {
			grid[i][j] += 1
		}
	}
}

function turnOff(start,end) {
	let s = convCoord(start) // start
	let e = convCoord(end) // end
	for (let i=s[1]; i<=e[1]; i++) {
		for (let j=s[0]; j<=e[0]; j++) {
			if (grid[i][j]>0)
				grid[i][j] -= 1
		}
	}
}

function displayGrid() {
	for (let i of grid) {
		let s = ''
		for (let j of i) {
			if (j) s += 'O'
			else s += '-'
		}
		console.log(s)
	}
}

function main() {
	let inp = input.split('\n')
	for (let i=0; i<inp.length; i++) {
		let instr = inp[i].split(' ')
		let s, e
		switch (instr[0]) {
			case 'turn':
				s = instr[2]
				e = instr[4]
				if (instr[1]==='on') turnOn(s,e)
				else if (instr[1]==='off') turnOff(s,e)
				break
			case 'toggle':
				s = instr[1]
				e = instr[3]
				toggle(s,e)
				break
		}
	}
}

gridInit(grid,1000)

main()

for (let i of grid) {
	for (let j of i) {
		tBrightness += j
	}
}

console.log(tBrightness)
// displayGrid()