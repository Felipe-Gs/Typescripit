let nome: string = "Felipe";
let idade: number = 19;

function retorneMeuNome(): string{
    return nome;
}

function bomDia(): void{
    console.log("Olá mundo do typescripir")
}

function multiplicar(numA:number, numB:number):number{
    return numA * numB

}
console.log(`resultado foi:`, multiplicar(5, 6))

const teste = function(a:number, b:number):boolean{
    return false
}

let calculo: (numeroA:number, numeroB:number) => number

// let usuario = {
//     nome: 'felipe',
//     idade: 19
// }
let usuario: {nome:string, idade:number} = {
    nome: "Gomes",
    idade: 30
}
console.log(usuario)
