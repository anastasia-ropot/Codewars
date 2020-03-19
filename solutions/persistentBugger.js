function persistence(num) {
    return num < 10 ? 0 : persistence([...num.toString()].reduce((accumulator, currentValue) => accumulator * currentValue)) + 1;
}

console.log(persistence(999));

function persistence1(num) {
    let result = 0;

    while(num > 9) {
        result++;
        num = [...num.toString()].reduce((accumulator, currentValue) => accumulator * currentValue);
    }

    return result;
}

console.log(persistence1(999));

function persistence2(num) {
    let array = [...num.toString()];
    let count = 0;
    while (array.length > 1) {
        count++;
        const result = array.reduce((accumulator, currentValue) => accumulator * currentValue);
        array = [...result.toString()];
    }
    return count;
}

console.log(persistence2(999));
