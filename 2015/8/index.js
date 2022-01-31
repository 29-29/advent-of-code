import {readFileSync, readSync} from 'fs'

const input = readFileSync('./test.txt','utf-8')

function main(input) {
	const textinput = input.split('\r\n')

	var codeCount = 0
	var memoryCount = 0
	var prevChar = ''

	for (let i=0; i<textinput.length; i++) {
		for (let j=0; j<textinput[i].length; j++) {
			let curChar = textinput[i][j]
			// if ()
			codeCount++
		}
	}

	// console.log(textinput)
	console.log('code count',codeCount)
	console.log('memory count',memoryCount)
}

main(input)