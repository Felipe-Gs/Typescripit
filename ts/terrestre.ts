import { Transporte } from "./trasporte";

export class Terrestre extends Transporte{

    private _numRodas: number;

    
    public get numRodas() : number {
        return this._numRodas
    }

    
    public set numRodas(numRodas : number) {
        this._numRodas = numRodas;
    }

    public exibirInformações(){
        console.log(`capacidade ${this.capacidade}, Rodas: ${this._numRodas}`)
    }
    
    
}