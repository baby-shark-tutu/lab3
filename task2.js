function expression_value() {
    let x = parseFloat(document.getElementById('x').value);
    let n = parseInt(document.getElementById('n').value);
    let result = 0;

    if (isNaN(x) || isNaN(n) || Math.abs(x) >= 1 || n <= 0) { 
        document.getElementById("result").innerHTML = "Ошибка. Пожалуйста, введите корректные значения для x (|x|<1) и n (n>0).";
      } else {
        for (var i = 1; i <= n; i++) {
          result += (-1) ** (i-1) * x ** i / i;
        }
        document.getElementById("result").innerHTML = "Значение выражения: " + result;
      }
}