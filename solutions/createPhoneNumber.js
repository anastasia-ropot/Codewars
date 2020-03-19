function createPhoneNumber1(numbers) {
    const numbersLength = numbers.length;
    let template = "(xxx) xxx-xxxx";

    for (let i = 0; i < numbersLength; i++) {
        template = template.replace('x', numbers[i]);
    }

    return template;
}

console.log(createPhoneNumber1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function createPhoneNumber2(numbers){
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
}

console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function createPhoneNumber3(numbers){
    const phoneNumber = ['('];

    for (let i = 0; i < numbers.length; i++) {
        phoneNumber.push(numbers[i]);

        if(i === 2) {
            phoneNumber.push(')');
            phoneNumber.push(' ');
        }

        if(i === 5) {
            phoneNumber.push('-');
        }
    }

    return phoneNumber.join('');
}

console.log(createPhoneNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
