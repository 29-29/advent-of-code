import {read, readFileSync} from 'fs'

const input = readFileSync('./input.txt','utf-8')
// const input = readFileSync('./test.txt','utf-8')

function main(input) {
	const DIRECTIONS = ['N', 'E', 'S', 'W']
	const nInput = input.split(', ')

	let dir = 0
	let x=0,y=0

	for (let instr of nInput) {
		dir = ((dir+(instr[0]=='R'? 1:-1)) % 4)
		if (dir<0) dir = 4 + dir
		const d = parseInt(instr.slice(1))
		switch (dir) {
			case 0:
				y += d
				break
			case 1:
				x += d
				break
			case 2:
				y -= d
				break
			case 3:
				x -= d
				break
		}
		console.log('---')
		console.log(instr)
		console.log('facing', DIRECTIONS[dir])
		console.log('moved', instr[1], 'block/s')
		console.log('new coord', x,y)
	}

	console.log(x,y)
	console.log('distance', Math.abs(x)+Math.abs(y))
}

main(input)