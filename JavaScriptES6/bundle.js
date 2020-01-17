"use strict";

var arr = [1, 3, 4, 5, 8, 9];
/*Percorre o array e multiplica função MAP*/

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return 'teste';
};

var obj = function obj() {
  return {
    nome: 'michel'
  };
};

console.log(teste());
console.log(obj());
