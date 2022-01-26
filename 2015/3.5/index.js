const {readFileSync, copyFileSync} = require('fs')

const input = readFileSync('./input.txt','utf-8')
// const input = '^>v<'

let sx = 0, rx = 0 // sx is Santa X, and rx is Robot X
let sy = 0, ry = 0 // likewise here

let sv = [] // visited by Santa
let rv = [] // visited by Robot
let uv = [] // visited by both Santa & Robot

function toCoord(x,y) {
	return `${x}x${y}`
}

function addCoord(coord, arr) {
	// console.log(`commencing adding ${coord} to [${arr}]----`)
	for (let i of arr) {
		// console.log(`${coord} == ${i}`, coord==i)
		if (coord == i) {
			// console.log(`${coord} == ${i}`)
			// console.log(`----failed to add ${coord} to [${arr}]`)
			return
		} else {
			// console.log(`${coord} != ${i}`)
			continue
		}
	}
	arr.push(coord)
	// console.log(`----successfully added ${coord} to [${arr}]`)
}

function moveSanta(i) {
	switch (i) {
		case '>':
			sx++
			break
		case '^':
			sy++
			break
		case '<':
			sx--
			break
		case 'v':
			sy--
			break
	}

	[sv,uv].forEach(x=>addCoord(toCoord(sx,sy),x))
}

function moveRobot(i) {
	switch (i) {
		case '>':
			rx++
			break
		case '^':
			ry++
			break
		case '<':
			rx--
			break
		case 'v':
			ry--
			break
	}

	[rv,uv].forEach(x=>addCoord(toCoord(rx,ry),x))
}

// MAIN

[sv,rv,uv].forEach(x=>addCoord(toCoord(0,0),x))
let santaMove = true
for (let i of input) {
	santaMove ? moveSanta(i) : moveRobot(i)
	santaMove ? santaMove = false : santaMove = true
}

// console.log('santa',sv)
// console.log('robot',rv)
// console.log('both ',uv)
console.log('visited at least once',uv.length)
