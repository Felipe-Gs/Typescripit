"use strict";
var Meucahorro = /** @class */ (function () {
    function Meucahorro(nome, idade, parqueFavorito) {
        this.nome = 'Apolo';
        this.idade = 2;
        this.parqueFavorito = '';
        this.nome = nome;
        this.idade = idade;
        this.parqueFavorito = parqueFavorito;
    }
    return Meucahorro;
}());
var Meucahorro2 = /** @class */ (function () {
    function Meucahorro2(nome, idade, parqueFavorito) {
        this.nome = 'Apolo';
        this.idade = 2;
        this.parqueFavorito = '';
        this.nome = nome;
        this.idade = idade;
        this.parqueFavorito = parqueFavorito;
    }
    return Meucahorro2;
}());
var cao = new Meucahorro('Apolo', 3, 'Parque nacional');
var cao2 = new Meucahorro2('Madruga', 4, 'Alto da Irmandade');
console.log(cao);
console.log(cao2);
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
