"use strict";

var arr = [1, 3, 4, 5, 8, 9];
/*Percorre o array e multiplica função MAP*/

var newArr = arr.map(function (item, idex) {
  return item * 2;
});
console.log(newArr);
/*Percorre todos os valores e soma eles ou faz outra coisa*/

var sun = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sun);
/*Retorna todos os pares, o restur sempre retornará o true.*/

var pares = arr.filter(function (item) {
  return item % 2 === 0;
});
/*Procura o valor 4 no array*/

var procura = arr.find(function (item) {
  return item === 4;
});
console.log(procura);
console.log(pares);
