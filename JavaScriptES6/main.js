const arr = [1,3,4,5,8,9];

/*Percorre o array e multiplica função MAP*/ 

const newArr = arr.map(item => item * 2);

console.log(newArr);


const teste = () => {return 'teste'};

const obj = () => ({nome: 'michel'});


console.log(teste());
console.log(obj());