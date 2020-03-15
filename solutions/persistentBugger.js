function persistence(num) {
    let result = 0;

    while(num > 9) {
        result++;
        num = [...num.toString()].reduce((accumulator, currentValue) => accumulator * currentValue);
    }

    return result;
}

console.log(persistence(39));

function persistenceRecursion(num) {
    return num < 10 ? 0 : persistenceRecursion([...num.toString()].reduce((accumulator, currentValue) => accumulator * currentValue)) + 1;
}

console.log(persistenceRecursion(39));
