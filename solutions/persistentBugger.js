function persistence(num) {
    return num < 10 ? 0 : persistence([...num.toString()].reduce((accumulator, currentValue) => accumulator * currentValue)) + 1;
}

console.log(persistence(39));

function persistenceRecursion(num) {
    return num < 10 ? 0 : persistenceRecursion([...num.toString()].reduce((accumulator, currentValue) => accumulator * currentValue)) + 1;
}

console.log(persistenceRecursion(39));
