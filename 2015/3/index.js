const {readFileSync,writeFileSync} = require('fs')

const input = readFileSync('./input.txt', 'utf-8')
// const input = '><^>v>v<^<^^^'

let visitedH = [] // Visited Houses
let doubleVA = []
let doubleV = 0 // Count of DoubleVisited Houses

let x = 0
let y = 0

function currentCoord() {
	return x.toString()+'x'+y.toString()
}

function moveHouse(s) {
	switch (s) {
		case '<':
			x--
			break
		case '>':
			x++
			break
		case '^':
			y++
			break
		case 'v':
			y--
			break
	}
}

visitedH.push(currentCoord())
// console.log('adding', currentCoord(), 'to visitedH')
// console.log('going thru input ---------')
for (let i of input) {
	moveHouse(i)

	// console.log('----- moved',i,'now at',currentCoord())
	// console.log('visitedH',visitedH)

	let c = currentCoord()
	let nFoundMatch = true
	for (let j=0; j<visitedH.length; j++) {

		// console.log('iterating',j,'of',visitedH.length)
		// console.log('asking if', c, 'is equal to', visitedH[j])

		if (c === visitedH[j]) {

			// console.log('✅', c, 'is equal to', visitedH[j], 'so breaking out of this for loop and doubleV++')

			doubleV++
			visitedH.push(c)
			doubleVA.push(c)
			nFoundMatch = false
			break

		} else {

			// console.log('❎ it isnt so continuing on')

			continue
		}
	}

	if (nFoundMatch) {
		// console.log('found no matches, so adding', c, 'to visitedH')
		visitedH.push(c)
	}
}
// console.log('done with input ------------')

// console.log('input:', input.length)
// console.log('visited houses:', visitedH)
// console.log('double visited:', doubleVA)
console.log('houses visited at least once:', visitedH.length-doubleVA.length)