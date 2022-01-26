const {readFileSync} = require('fs')

const input = readFileSync('./input.txt','utf-8')
// const input = 'laskjdldkngljfj'
let niceStr = 0 // nice string counter

/* OLD RULES
function cond1(str) { // has 3 of any vowels
	const vowels = ['a','e','i','o','u']
	let vCount = 0 // vowel counter
	for (let i of str) {
		if (vowels.includes(i)) vCount++
		if (vCount>=3) return true
	}
	return false
}

function cond2(str) { // has a letter that appears twice in a row
	for (let i=0; i<str.length-1; i++) {
		if (str[i]==str[i+1]) return true
	}
	return false
}

function cond3(str) { // doesnt contain specific words
	const forb = ['ab','cd','pq','xy'] // forbidden
	for (let i=0; i<str.length-1; i++) {
		if (forb.includes(str[i]+str[i+1])) return false
	}
	return true
}
*/

function cond1(str) { // pair of two letters that appears at least twice w/o overlapping
	let cs // current pair of strings
	for (let i=0; i<str.length-3; i++) {
		cs = str[i]+str[i+1]
		for (let j=i+2; j<str.length-1; j++) {
			if (cs==str[j]+str[j+1]) return true
		}
	}
	return false
}

function cond2(str) { // letter that repeats after one letter
	for (let i=0; i<str.length-2; i++)  {
		if (str[i] == str[i+2]) return true
	}
	return false
}

function main(input) {
	let i = input.split('\n').forEach(x=>{
		if (cond1(x) && cond2(x)) niceStr++
	})

	console.log('nice strings',niceStr)
}

main(input)