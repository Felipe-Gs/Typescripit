class Estudante{
    id: number;
    nome: string;
    private _credito: number;


    constructor(id:2, _credito:number, nome?:string){
        this.id = id;
        this._credito = _credito;
        (nome !== undefined? this.nome = nome: this.nome = "Felipe Gomes");

    }
    
    get_credito():number{
        if(this._credito <= 0){
            this._credito = 1
        }
        return this._credito    
    }
    
}
let f = new Estudante(2, 3);
f.get_credito()
console.log(f)