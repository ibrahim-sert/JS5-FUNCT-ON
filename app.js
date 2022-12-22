// function greet(firstName, lastName) {
//   console.log(`Hi, ${firstName} ${lastName}`);
// }

// greet("Sabata", "2288");
// greet("Sercan", "Yılmaz");
// greet("İbarhim", "Sert");

// const name = prompt("Your name:");
// const surname = prompt("Your surname:");
// greet(same, surname); //! JS' de fonsiyonlar parametrelere değişkenleri değil onların değerlerini aktarırlar

// function calculate(name, YoB) {
//   const age = 2022 - YoB; //? 2022 yerine new Date().getFullYear()
//   console.log(`${name}'s age is ${age}`);
// }

// calculate("elif", 2000);

// function topla(s1, s2) {
//   const toplam = s1 + s2;
//   console.log(toplam);
// }

// topla(2, 3);
// console.log(x);

// function oddOrEven(num) {
//   return num % 2 ? "ODD" : "EVEN";
// }

// const number = Number(prompt("please enter a number to check odd or even"));
// const oddEven = oddOrEven(number);
// console.log(`${number} is ${oddEven}`);

//?    YA DA

// function oddOrEven(num) {
//   return num % 2 === 0 ? "EVEN" : "ODD";
// }

// const number = Number(prompt("please enter a number to check odd or even"));
// const oddEven = oddOrEven(number);
// console.log(`${number} is ${oddEven}`);

//?    YA DA

// const oddOrEven = function (num) {
//   return num % 2 === 0 ? "EVEN" : "ODD";
// };

// console.log(oddOrEven(5));

const findBiggest = function (n1, n2, n3) {
  let biggest = n1;
  if (n2 >= biggest) {
    biggest = n2;
  }
  if (n3 >= biggest) {
    biggest = n3;
  }
  return biggest;
};

console.log(`The Biggest:${findBiggest(2, 1, 4)}`);
