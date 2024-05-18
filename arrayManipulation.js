function processArray (arr){
    return arr.map(num => {
        if (num % 2 === 0) {
            return num**3;
        } else {
            return num*3;
        }
    }

    );
}
