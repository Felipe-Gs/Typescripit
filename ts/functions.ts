function print(val:string):void {
    console.log(val)
}
print('message erro')

function printOrNot(flag:boolean = false):void {
    let str = flag ? "flag is true" : "flag is false";
    console.log(str)
}
printOrNot()
//função anonima
let sunAnonymous = function (n1:number, n2:number):void {
    console.log(`sum: ${n1 + n2}`);
};
sunAnonymous(1, 2)
sumNotAnonymous(5, 3)
function sumNotAnonymous(n1:number, n2:number):void {
    console.log(`sum: ${n1 + n2}`);
}
sumNotAnonymous(5, 3)

//areo function
// let sumArrow1 = (n1:number, n2:number) => n1 + n2;
// let sumArrow2 = (n1:number, n2:number) => {return n1 + n2};
// console.log(sumArrow2(1, 2));
// console.log(sumArrow1(2, 5));

let objectName = {
    name :'Felipe Gomes',
    idade: 19, 
    altura: 1.80,
    peso: 63,

    retornaNome: function() {
        return this.name
    },

    imc:function ():string {
        let resultado = (this.peso/(this.altura * this.altura))
        if (resultado <= 16.9){
            return 'Muito abaixo do peso'
        }
        else if(resultado <= 18.4 && resultado >= 17){
            return 'Abaixo do peso'
        }
        else if(resultado <= 24.9 && resultado >= 18.5){
            return 'Peso normal'
        }
        else if(resultado <= 29.9 && resultado >=25){
            return 'acima do peso'
        }
        return ''
    }
};



console.log(objectName.retornaNome())
console.log(objectName.imc())


class novo{
    name :string
    idade: number
    altura: number
    peso: number

    constructor(name:string, idade:number, altura:number, peso:number){
        this.name = name;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    imc():string {
    
        let resultado = (this.peso/(this.altura * this.altura))
            if (resultado <= 16.9){
                return 'Muito abaixo do peso'
            }
            else if(resultado <= 18.4 && resultado >= 17){
                return 'Abaixo do peso'
            }
            else if(resultado <= 24.9 && resultado >= 18.5){
                return 'Peso normal'
            }
            else if(resultado <= 29.9 && resultado >=25){
                return 'acima do peso'
            }
            return ''
    }
}
let pessoa = new novo('gomes', 19, 1.77, 30)
console.log(pessoa.imc())
pessoa.peso = 76;
console.log(pessoa.imc())