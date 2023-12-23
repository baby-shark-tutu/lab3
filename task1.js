function min_max_digits() {
    let number = parseInt(document.getElementById('number').value);
    number = String(number);
    let min = number[0];
    let max = number[0];

    for (let digit = 1; digit <= number.length; digit++) {
        if (number[digit] < min) {
            min = number[digit];
        }
        if (number[digit] > max) {
            max = number[digit];
        }
    }
    document.getElementById('min').innerHTML = "Минимальная цифра числа: " + min;
    document.getElementById('max').innerHTML = "Максимальная цифра числа: " + max;
}