export class Carro {
    modelo: string = "Nao consta";
    _cor: string ="Nao cosnta";
    placaDoCarro: string ="Nao consta";
    numeroDePortas: number = 2;

    constructor(modelo: string, cor:string, placa?:string, portas?:number){
        this.modelo = modelo;
        this._cor = cor;
        (placa !== undefined? this.placaDoCarro = placa: this.placaDoCarro = "Carro sem placa!");
        (portas !== undefined? this.numeroDePortas = portas:this.numeroDePortas = 4)
      
    }

    getCor():string{
        return this._cor
        //felipe
        //gomes
    }

    setCor(cor:string):void{
        this._cor = cor
    }
}