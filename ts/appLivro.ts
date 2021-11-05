import { Autor } from "./autor";
import { Livro } from "./livro";
import { Titulo } from "./titulo";

let livro = new Livro();
livro.TipoDeCapa = 'Capa de marfim';
console.log(livro.TipoDeCapa)

let autor = new Autor();
autor.NomeDoAutor = 'Machado de Assis';
console.log(autor.NomeDoAutor)

let titulo = new Titulo();
titulo.NomeDoTitulo = 'Memórias Postumas de Brás Cubas';
console.log(titulo.NomeDoTitulo)