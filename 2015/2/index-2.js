const {readFileSync} = require('fs')
const { toUnicode } = require('punycode')

const input = readFileSync('./input.txt', 'utf-8')

let inputs = input.split('\r\n')

// Convert input into arrays of intArrays
for (let i=0; i<inputs.length; i++) {
	inputs[i] = inputs[i].split('x')
	for (let j=0; j<inputs[i].length; j++) {
		inputs[i][j] = parseInt(inputs[i][j])
	}
}

function getRibbonLength(dim) {
	// console.log(dim)

	let l = dim[0], w = dim[1], h = dim[2]
	// console.log('l', l)
	// console.log('w', w)
	// console.log('h', h)

	let min3 = Math.min(...dim)
	let tdim = dim
	tdim.splice(dim.indexOf(min3),1)
	let min2 = Math.min(...tdim)
	let ribbonWrap = 2*min3 + 2*min2
	// console.log('ribbonWrap', min3, min2)

	let bowTie = l*w*h

	return ribbonWrap + bowTie
}

let ft = 0

for (let i of inputs) {
	ft += getRibbonLength(i)
	// if (ft === Infinity) break
	// console.log(i, ft)
}

// console.log(getRibbonLength([10,10,10]))

console.log(ft)