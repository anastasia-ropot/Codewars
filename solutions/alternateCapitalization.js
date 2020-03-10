function capitalize(s) {
    return [
        [...s].map((item, index) => index % 2 === 0 ? item.toUpperCase() : item).join(''),
        [...s].map((item, index) => index % 2 !== 0 ? item.toUpperCase() : item).join('')
    ]
}

console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']
console.log(capitalize("codewars")); // ['CoDeWaRs', 'cOdEwArS']
console.log(capitalize("abracadabra")); // ['AbRaCaDaBrA', 'aBrAcAdAbRa']
console.log(capitalize("codewarriors")); // ['CoDeWaRrIoRs', 'cOdEwArRiOrS']
