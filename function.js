//Work home pow//

// function power(x, n) {
//     let result = x;
// for (i = 1; i < n; i++) {
//     result *= x;
//     }
//     return result;
// }

// function test(testValue) {
//     if (testValue === "0")
//     return +testValue;
//     else if (!+testValue)
//     return "error";
//     return +testValue
// }

// let userNumber = test(+prompt('Введите число')),
//     userPow = test(+prompt('Введите степень'));
//     if (userNumber === "error" || userPow === "error") {
//         alert("Введите число и степень. Цифрами.");
//     }   else if (alert(power(userNumber, userPow)));

//     // Work - home arguments

function logArgsFunc() {
    if (!arguments.length) {
        console.log("No arguments in function")
        return
    } else {
        for(let i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === "function") {
                arguments[i]()
                console.log("function was called")
            } else {
                console.log( `${arguments[i]} , type, ${typeof(arguments[i])}`)
            }
        }
    }
}

    function uselessFunction () {
    console.log("I'm a function")
}

logArgsFunc()
logArgsFunc(100)
logArgsFunc(100, 'test', uselessFunction)



