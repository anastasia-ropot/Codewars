// First solution
function sumOfMinimums(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        let min = Math.min(...arr[i]);
        result += min;
    }

    return result;
}

// Second solution
function sumOfMinimums(arr) {
    return arr.reduce((accumulator, currentArray) => accumulator + Math.min(...currentArray), 0);
}
