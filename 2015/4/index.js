const md5 = require('./md5.js')

const input = 'ckczppom'
const zero = 6
const sZero = '0'
const limit = 10000000

let matches = 0

function targetZ(n=zero) {
	let z = sZero
	for (let i=0; i<n-1; i++)
		z += sZero
	return z
}

for (let i=0; i<limit; i++) {
	let hash = md5(input+i)
	if (hash.slice(0,zero)===targetZ()) {
		console.log(input+i,hash)
		matches++
	}
}

console.log(`found ${matches}/${limit}`)
