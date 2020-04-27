function rgb(r, g, b) {
    return `${convertHex(r)}${convertHex(g)}${convertHex(b)}`;
}

function convertHex(number) {
    if (number < 0) {
        return '00';
    }

    if (number > 255) {
        return 'FF';
    }

    return  ('0' + number.toString(16)).slice(-2).toUpperCase();
}

console.log(rgb(255, 255, 255)); // FFFFFF
console.log(rgb(255, 255, 300)); // FFFFFF
console.log(rgb(0,0,0)); // 000000
console.log(rgb(148, 0, 211)); // 9400D3
