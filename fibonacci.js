function fibonacci(n){
    if(n<=1)
        return n;
    else
    // recursion
        return fibonacci(n-1) + fibonacci (n-2);
    }

fibonacci(12);
//144
