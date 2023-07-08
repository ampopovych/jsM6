// function greet(name) {
//   return `Ласкаво просимо ${name}.`;
// }

// Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Манго")); // Ласкаво просимо Манго.

// Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet);




// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);


// let val = 7
// function createAdder() {
//    function addNumbers(a, b) {
//      let ret = a + b
//      return ret
//    }
//    return addNumbers
//  }
//  let adder = createAdder()
//  let sum = adder(val, 8)
// console.log('example of function returning a function: ', sum);



// function createCounter() {
//    let counter = 0
//    const myFunction = function() {
//      counter = counter + 1
//      return counter
//    }
//    return myFunction
//  }
//  const increment = createCounter()
//  const c1 = increment()
//  const c2 = increment()
//  const c3 = increment()
// console.log('example increment', c1, c2, c3);



const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// Метод перебирання forEach
numbers.forEach(function (ndex, chyslo) {
  console.log(`Індекс ${ndex}, значення ${chyslo}`);
});




