export class Livro{
    private tipoDeCapa: string;
    
    
    public get TipoDeCapa() : string {
        return this.tipoDeCapa 
    }

    public set TipoDeCapa(TipoDeCapa : string) {
        this.tipoDeCapa = TipoDeCapa;
    }
}

