interface ICachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

/*const Meucahorro: ICachorro = {
    nome: 'Apolo',
    idade: 2,
}*/

class Meucahorro implements ICachorro{
    nome = 'Apolo';
    idade = 2;

    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
}
const cao = new Meucahorro('Apolo', 3);

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

       