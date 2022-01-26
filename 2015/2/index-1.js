const {readFileSync} = require('fs')

const input = readFileSync('./input.txt', 'utf-8')

let inputs = input.split('\r\n')

// Convert input into arrays of intArrays
for (let i=0; i<inputs.length; i++) {
	inputs[i] = inputs[i].split('x')
	for (let j=0; j<inputs[i].length; j++) {
		inputs[i][j] = parseInt(inputs[i][j])
	}
}

function getSqft(l,w,h) {
	let x = w*h
	// console.log('x', x)
	let y = l*w
	// console.log('y', y)
	let z = l*h
	// console.log('z', z)
	let tsa = 2*x + 2*y + 2*z // Total Surface Area
	// console.log(tsa+'=2*'+x+'+2*'+y+'+2*'+z)
	return tsa + Math.min(x,y,z)
}

// Total square feet
let sqft = 0

// Calculation
for (let i of inputs) {
	// Assign l, w, h
	let l = i[0]
	let w = i[1]
	let h = i[2]
	// Calculate Total Surface Area + Extra
	sqft += getSqft(l,w,h)
}

console.log(sqft)
// console.log(getSqft(2,3,4))
