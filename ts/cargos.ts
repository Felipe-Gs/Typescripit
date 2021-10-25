interface ICachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

class Meucahorro implements ICachorro{
    nome = 'Apolo';
    idade = 2;
    parqueFavorito? = ''

    constructor(nome:string, idade:number, parqueFavorito?:string){
        this.nome = nome;
        this.idade = idade;
        this.parqueFavorito = parqueFavorito;
    }
}

class Meucahorro2 implements ICachorro{
    nome = 'Apolo';
    idade = 2;
    parqueFavorito? = ''

    constructor(nome:string, idade:number, parqueFavorito?:string){
        this.nome = nome;
        this.idade = idade;
        this.parqueFavorito = parqueFavorito;
    }
}
const cao = new Meucahorro('Apolo', 3, 'Parque nacional');
const cao2 = new Meucahorro2('Madruga', 4, 'Alto da Irmandade');

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

       