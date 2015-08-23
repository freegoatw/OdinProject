var j=0;
for (i = 1; i < 1000; i++){
	if ( i % 3 === 0 || i % 5 === 0){
		console.log(i);
		j++;}
	}
console.log("there is "+j+" 3 or 5 multiples from 1 to "+i);
