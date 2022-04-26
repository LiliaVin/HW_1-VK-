// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10,
//  начиная со степени 1


let base = 2;
let exp = 10;
let result = 1;
let count = 1;
while (count <= exp) {
    result = result*base;
    console.log(result)

  count ++;
}
;

