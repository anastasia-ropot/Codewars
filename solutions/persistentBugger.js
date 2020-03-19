function getEvenNumberCount(num) {
    if (num <= 1) {
        return 0;
    } else {
        let number = num;
        let count = 0;

        if (number % 2 === 0) {
            number = number / 2;
            count = 1;
        } else {
            number = number - 3;
            count = 0;
        }
        return getEvenNumberCount(number) + count;
    }
}

console.log(getEvenNumberCount(3));

