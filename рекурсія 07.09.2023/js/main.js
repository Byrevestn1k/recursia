// 1. Напишіть функцію зведення числа у ступінь.
// function st(x, n) {
//    if (n != 1) {
//       return x *= st(x, n - 1);
//    } else {
//       return x;
//    }
// }
// alert(st(4, 3));
// 2. Напишіть функцію пошуку найбільшого спільного дільника.
// function dilnuk(x, y) {
//    if (y > x) return dilnuk(y, x);
//    if (!y) return x;
//    return dilnuk(y, x % y);
// }
// alert(dilnuk(35, 25));

// 3. Напишіть функцію для пошуку максимальної цифри у
// числі.
// let numArr = []
// function maxNum(x) {
//    if (x > 0) {
//       numArr.push(x % 10)
//       return maxNum(parseInt(x / 10))
//    }
//    else {
//       return Math.max.apply(null, numArr)
//    }
// }
// alert(maxNum(911111125524));
// 4. Напишіть функцію, яка визначає чи є передане число простим.

// function easyNum(x, i) {
//    if (i <= x / 2) {
//       if (x % i == 0) {
//          return alert(`Число складене`)
//       }
//       else {
//          return easyNum(x, i + 1)
//       }
//    }
//    else {
//       return alert(`Число просте`)
//    }
// }
// alert(easyNum(11, 2));

// 5. Напишіть функцію для виведення усіх множників, переданих числу у зростаючому порядку.
// Наприклад: число 18 – множники 2*3*3.
// let numArr = []
// function allmn(x, i) {
//    if (i <= x / 2) {
//       if (x % i == 0) {
//          numArr.splice(numArr.length - 1, 1)
//          numArr.push(i)
//          numArr.push(x / i)
//          return allmn(x / i, i)
//       }
//       else {
//          allmn(x, i + 1)
//          return numArr
//       }
//    }
//    else {
//       return numArr
//    }
// }
// alert(allmn(18, 2));

// 6. Написати функцію, яка повертає число Фібоначчі за переданим порядковим номером.
// Числа Фібоначчі: 1, 1, 2, 3, 5, 8, 13 ... Ряд ґрунтується на
// тому, що кожне число дорівнює сумі двох попередніх чисел.
// Наприклад: порядковий номер 3 – число 2, порядковий
// номер 6 – число 8.
function fibonachi(num) {
   return num <= 1 ? num : fibonachi(num - 1) + fibonachi(num - 2);
}
alert(fibonachi(5)); 
