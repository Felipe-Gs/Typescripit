class Conta{
    private titular: string;
    saldo: number;
    limite: number;


     constructor(titular:string, saldo:number, limite?:number){
         this.titular = titular;
         this.saldo = saldo;
         (limite !== undefined? this.limite = limite: this.limite = 1900);
        
     }

    // //Getters
     public get Titular() : string {
         return this.titular
     }
    
     public get Saldo() : number {
         return this.saldo
     }
     public get Limite() : number {
         return this.limite 
     }
    
    // //Setters
    
     public set Titular(Titular : string) {
         this.titular = Titular;
     }
    
     public set Saldo(Saldo : number) {
         this.saldo = Saldo;
     }
    
     public set Limite(Limite : number) {
         this. limite = Limite;
     }

    getDepositar(){
         let deposito : number
        
       return Number
   } 
}

class cadastro extends Conta{
    idade: number;
    senha: number

    constructor(titular:string, saldo:number, limite:number ,idade:number, senha:number){
        super(titular, saldo, limite);
        this.idade = idade;
        this.senha = senha;

    }
}

class RetirarDinheiro extends cadastro{
    valorDaConta:number;
    valorDaRetirada:number;

    constructor(valorDaconta:number, valorDaRetirada:number){
        super('Felipe Gomes', 1900, 3000, 19, 1232)
        this.valorDaConta = valorDaconta;
        this.valorDaRetirada = valorDaRetirada;
    }
    getRetirar():string{
        if(this.valorDaConta < this.valorDaRetirada){
            return 'Não foi possivel realizar o saque! saldo insuficiente'
        }
        return 'Retirada Realizada com sucesso!'
    }
}
let retirar = new RetirarDinheiro(2000, 1000);
retirar.getRetirar()
console.log(retirar.getRetirar())



// let conta = new Conta('Felipe Gomes', 1900, 3000);
// let cadastrar = new cadastro('Felipe Gomes', 1999, 3000, 19, 123);
// conta.getSacar()

// console.log(conta.getSacar())

// cadastrar.getSacar()

// console.log(cadastrar.getSacar())

// console.log(cadastrar)

// console.log('---------------------------');
// console.log('|-----------BANCO-----------|');
// console.log('|   1--Sacar----------------|');
// console.log('|   2--Depositar------------|');
// console.log('|---------------------------|');

// let cont = new Conta('Felipe Gomes', 1000, 100);
// cont.getSacar()
// console.log(cont.getSacar())
// console.log(cont)