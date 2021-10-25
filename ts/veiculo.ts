import { Direcao } from "./direcao";
import { Motor } from "./motor";

export class Veiculo{

    private _motor: Motor;
    private _direcao: Direcao;

    // public constructor(){
    //     this._motor = new Motor();
    //     this._direcao = new Direcao();
    // }

    public ligar(){
        this._motor = new Motor();
        this._direcao = new Direcao();
    }
    //Getters
    
    public get motor() : Motor {
        return this._motor;
    }

    
    public get direcao() : Direcao {
        return this._direcao;
    }
    
    //Setters
    
    public set motor(motor : Motor) {
        this._motor = motor;
    }
    
    
    public set direcao(direcao : Direcao) {
        this._direcao = direcao;
    }
    
    
}