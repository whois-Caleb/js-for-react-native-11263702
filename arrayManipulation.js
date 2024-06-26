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


export function formatArrayStrings (stringArr, numArr){
    return stringArr.map((str, index) =>{
        var processedNum = processArray(numArr);

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
