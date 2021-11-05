import { Conta } from "./conta";
import {Cadastro} from "./cadastro"


let cadastrar = new Cadastro();
cadastrar.nome = 'Felipe Gomes da Silva'
cadastrar.idade = 19
cadastrar.senha = 123

let conta = new Conta();
conta.limite = 3000;
conta.saldo = 1900;
conta.titular = 'Felipe Gomes da Silva'

let cont = new Conta();
cont.getSacar()
console.log(cont.getSacar)



console.log(cadastrar)
console.log(conta)




