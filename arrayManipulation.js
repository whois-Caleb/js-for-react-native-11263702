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


function formatArrayStrings (stringArr, numArr){
    return stringArr.map((str, index) =>{
        processedNum = processArray(numArr);

        const num = processedNum[index];
        if (num % 2 === 0){
            return str.toUpperCase();
        }
        else {
            return str.toLowerCase();
        }
    }
)
}

post = [1, 5, 6, 8, 9]
bar = ["coOkiE", "bOok", "CRAbs", "pLayeR", "gYm"]

console.log(formatArrayStrings(bar, post));