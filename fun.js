function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(6)); // Output: 8

console.log(fibonacci(8)); 
console.log(fibonacci(40)); 

console.log(fibonacci(78)); //this is the fourth commit