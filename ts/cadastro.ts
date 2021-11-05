//FELIPE GOMES DA SILVA --498842
//PROBLEMA: REALIZAR SAQUE E DEPOSITOS DE UMA CONTA NO BANCO


export class Cadastro{
    idade: number;
    senha: number

    constructor(idade?:number, senha?:number){
        (senha !== undefined? this.senha = senha: this.senha = 1234);
        (idade !== undefined? this.idade = idade: this.idade = 18);
}
}
export class Conta2 extends Cadastro{
    titular: string;
    saldo: number;
    limite: number;

    constructor(titular?:string, saldo?:number, idade?:number, senha?:number, limite?:number){
        super(idade, senha);
        (saldo !== undefined? this.saldo = saldo: this.saldo = 0);
        (titular !== undefined? this.titular = titular: this.titular = 'Nome ainda indefinido!');
        (limite !== undefined? this.limite = limite: this.limite = 1900);
    }  
    }
export class Transferencias extends Conta2{
   
    constructor(titular:string, saldo?:number, idade?:number, senha?:number, limite?:number){
        super(titular, saldo, idade, senha);
        
        (saldo !== undefined? this.saldo = saldo: this.saldo = 0);
        (idade !== undefined? this.idade = idade: this.idade = 18);
        (senha !== undefined? this.senha =senha: this.senha = 1234);
        (limite !== undefined? this.limite = limite: this.limite = 1900);

    }

    getRetirar2(valor:number):string{
        if(valor < this.saldo){
            this.saldo = (this.saldo - valor);
            return `Saque realizado com sucesso, seu saldo atual é de: ${this.saldo}`;
        }
        return 'Saque indisponivel! Saldo Insuficiente!'
    }
    getDepositar(valor:number):string{
        if(valor >= 0){
            this.saldo = (valor + this.saldo)
            return `Deposito Realizado com sucesso, seu saldo atual é de: ${this.saldo}`;
        }
            
        return ''; 
    }
}

//criar objeto
let usu = new Transferencias('Felipe', 2000)


//realizar retirada
console.log(usu.getRetirar2(500))
//realizar deposito
console.log(usu.getDepositar(200))




