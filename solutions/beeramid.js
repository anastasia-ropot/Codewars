function getBeeramidLevel(bonus, price) {
    let countBeer = bonus / price,
        countLevel = 1;

    while (countBeer > 0) {
        countBeer = countBeer - countLevel ** 2;

        if (countBeer >= 0) {
            countLevel++;
        }
    }

    return countLevel - 1;
}

console.log(getBeeramidLevel(1500, 2)); // 12
console.log(getBeeramidLevel(5000, 3)); // 16
