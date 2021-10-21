"use strict";
function preencheLista(array, valor) {
    return array.map(function (item) { return item + valor; });
}
preencheLista([1, 2, 3], 1);
/*const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) =>{
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
    
})*/
/*interface  Ianimal{
    nome: string;
    tipo: 'terrestre' | 'aquatico'
}

interface IFelino extends Ianimal{
    visaoNoturna: boolean;
}

const animal: Ianimal = {
    nome: 'elefante',
    tipo: 'aquatico'
}

const felino: IFelino = {
    nome: 'leão',
    tipo: 'terrestre',
    visaoNoturna: false

}

console.log(felino);*/
