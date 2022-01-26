for (let i=0; i<10; i++) {
	console.log(i)
	for (let j=0; j<5; j++) {
		if (i==5 && j==2) break
		else console.log('\t',j)
	}
}