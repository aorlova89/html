/*
На вход приходит строка с выражением. Внутри выражения записываются вещественные числа
(с точкой в качестве разделителя целой и дробной части), разделенные математическими
операторами (+-* /). Между числом и оператором могут быть любые символы, кроме цифр и точек.
В конце строки стоит знак «равно».
Результат выражения вычисляется последовательно.
Приоритет операций не учитывается.
Результат выводить с точностью до 2 знаков после запятой.
3.5 землекопа +4 поросенка *10 рублей - 5.5 $ /5 человек = ->13.90
7+7*2=ёжик -> 28.00

1) Для вычисления нельзя пользоваться функцией eval.
2) Не следует разбирать строку вручную, надо использовать регулярные выражения.
3) Вычисление должно работать корректно на корректных строках, а именно:
a. С единственным знаком равенства
b. Без лишних операторов и цифр
4) Дополнительный плюс за поддержку унарных операторов перед числами.
 */
var runOperation = {
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    '*': function (a, b) { return a*b},
    '/': function (a, b) { return a/b}
};

var calculate = function(input) {
    const extractNumbersRegex = /\d+(\.\d+)?/g;
    const extractOperatorsRegex = /[+*\/-]/g;

    var values = input.match(extractNumbersRegex).map((v) => parseFloat(v));
    var operators = input.match(extractOperatorsRegex);

    let result = values[0];

    for (var i = 0; i < values.length-1; i++) {
        result = runOperation[operators[i]] (result, values[i+1]);
    }

    return result;
}

document.getElementById("calculateBtn").addEventListener("click", function() {
    var res = calculate(document.getElementById("operation").value);
    document.getElementById("result").innerText = res;
});