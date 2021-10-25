import { Direcao } from "./direcao";
import { Motor } from "./motor";
import { Veiculo } from "./veiculo";

let veiculo = new Veiculo();
//veiculo.ligar();




let motor = new Motor();
let direcao = new Direcao();
veiculo.direcao = direcao;
veiculo.motor = motor;




veiculo.motor.potencia = 1000;
veiculo.direcao.cor= "vermelha";

console.log(`Motor: ${veiculo.motor.potencia},Cor: ${veiculo.direcao.cor}`)
