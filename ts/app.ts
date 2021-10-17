import {Carro} from './carro'


let c: Carro;
c = new Carro("Hilux", "Vermelho", "XXX-000", 4);
console.log(`A cor do carro é ${c._cor} e o seu modelo é ${c.modelo}, sua placa é ${c.placaDoCarro} com ${c.numeroDePortas} portas`)

let c2 = new Carro("Gol", "Amarelo", "YYY-000", 2);
console.log(`A cor do carro é ${c2._cor} e o seu modelo é ${c2.modelo}, sua placa é ${c2.placaDoCarro} com ${c2.numeroDePortas} portas`)