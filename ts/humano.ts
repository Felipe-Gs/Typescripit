class Funcionario {
    _nome: string = "Nao consta";
    endereco: string = "Nao consta";
    telefone: number = 2;
    cpf: number = 4;

    constructor(nome: string, endereco:string, telefone?:number, cpf?:number){
        this._nome = nome;
        this.endereco = endereco;
        (telefone !== undefined? this.telefone = telefone: this.telefone = 3);
        (cpf !== undefined? this.cpf = cpf:this.cpf = 4)

    }
    getCor():string{
        return this._nome  
    }
    setCor(_nome:string):void{
        this._nome = _nome
    }
    
}
let c: Funcionario;
c = new Funcionario("Felipe", "Alto da irmandade");
console.log(`Seu nome é ${c._nome} seu endereço é ${c.endereco},seu telefone é ${c.telefone} e seu cpf${c.cpf} `)