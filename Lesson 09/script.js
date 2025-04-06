"use strict";

console.log("*** Цикл c параметром for ***");
for (let i = 1; i <= 5; i++) console.log(i);

let k = 0;
for (; k < 2; ) {
  console.log(Boolean(k));
  k++;
}

console.log("*** Цикл c предусловием while ***");
let n = 5;
while (n > 0) {
  console.log(n);
  n--;
}

console.log("*** Цикл c послеусловием do...while ***");
let m = 0;
do {
  console.log(m < 0);
  m++;
} while (m < 0);

console.log("*** Переход к следующей итерации - continue ***");
for (let i = 0; i < 10; i++) {
  if (i % 2 == 1) continue;
  console.log(i);
}

console.log("*** Прерывание цикла - break ***");
let s = 0;
while (s < 5) {
  if (s == 2) break;
  console.log(s);
  s++;
}

console.log("*** Использование меток в циклах ***");
outer: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 3; j++) {
    if (j == 2) break outer;
    console.log(j);
  }
}

console.log("*** Бесконечный цикл ***");
// let infinity = 0;
// while(infinity < 1) {
//     console.log(infinity);
// }

console.log("*** Префиксная форма инкремента в цикле ***");
let prefix = 0;
while (++prefix < 4) {
  console.log(prefix);
}

console.log("*** Постфиксная форма инкремента в цикле ***");
let postfix = 0;
while (postfix++ < 4) {
  console.log(postfix);
}
