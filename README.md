//# prime-factorization
//Take any number and return prime factorization
function primeFactorization(integer) {
var factors = [];
	for (i=2; i<integer; i++)
    	while (integer%i === 0){
        factors.push(i);
        integer /= i;
        i=2;
        }
return factors;
}


console.log(primeFactorization(30));
