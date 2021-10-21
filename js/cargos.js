"use strict";
/*const Meucahorro: ICachorro = {
    nome: 'Apolo',
    idade: 2,
}*/
var Meucahorro = /** @class */ (function () {
    function Meucahorro(nome, idade) {
        this.nome = 'Apolo';
        this.idade = 2;
        this.nome = nome;
        this.idade = idade;
    }
    return Meucahorro;
}());
var cao = new Meucahorro('Apolo', 3);
console.log(cao);
/*interface Iusuario{
    id: string;
    email: string;
    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor';
}


function redirecione(usuario: Iusuario){
  if (usuario.cargo){
      //redirecionar();

  }
  //redirecionar para a area do usuario
}*/
