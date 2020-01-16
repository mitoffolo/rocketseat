class List {

    constructor(){

        this.data = [];




    }

    AddData(data){

        this.data.push(data);
        console.log(data);



    }


}


class TodoList extends List{

    constructor(){

        super();

        this.usuario = 'Michel';
    }


    MostrarUsuario(){

        console.log(this.usuario);

    }

}
const MinhaLista = new TodoList();

document.getElementById('novotudo').onclick = function() {

MinhaLista.AddData('NovoTudo');

MinhaLista.MostrarUsuario();


}



