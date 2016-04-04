function primeFactorization(integer) {
var originalInteger = integer;
var factors = [];
	for (i=2; i<=integer; i++) {
    		while (integer%i === 0){
        	factors.push(i);
        	integer /= i;
        	}
	}
    if (factors.length===1){
    	return originalInteger + " is a prime number";
    } else {
		return factors;
    }
}
