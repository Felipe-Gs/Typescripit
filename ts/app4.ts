import { Terrestre } from "./terrestre";
import { Transporte } from "./trasporte";

let terreste = new Terrestre();
terreste.capacidade = 10;
console.log(terreste.capacidade);

// let transporte = new Transporte();
// transporte.capacidade

terreste.numRodas = 4;
terreste.exibirInformações();