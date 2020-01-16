const arr = [1,3,4,5,8,9];

/*Percorre o array e multiplica função MAP*/ 

const newArr = arr.map(function(item,idex){

    return item * 2;


});

console.log(newArr);

/*Percorre todos os valores e soma eles ou faz outra coisa*/ 

const sun = arr.reduce(function(total,next){

    return total + next;


});

console.log(sun);

/*Retorna todos os pares, o restur sempre retornará o true.*/
const pares = arr.filter(function(item){


    return item % 2 === 0;

});


/*Procura o valor 4 no array*/ 

const procura = arr.find(function(item){

    return item === 4;

});

console.log(procura);





console.log(pares);