let nome: string = 'Maciel';
let idade: number = 26;
let programador: boolean = true;

let nomess: string[] = ['Maciel', 'Rodrigo'];
let idades: number[] = [26, 34];
let nomes2: Array<string> = ['Maciel', 'Rodrigo'];
let idades2: Array<number> = [26, 34];

let nomes: any = ['Maciel', 'Rodrigo'];

nomes.push(255);

function firstLetterUppercase(name: string): string {
  let fristLetter = name.charAt(0).toUpperCase();
  return fristLetter + name.substring(1);
}

firstLetterUppercase('maciel');

nomes.forEach(function (nome) {
  console.log(nome.toUpperCase);
});

let user = {
  nome: 'Maciel',
  idade: 90,
};

function resumo(usuario: { nome: string; idade?: number }) {
  if (usuario.idade !== undefined) {
    return `Olá ${usuario.nome} você tem ${usuario.idade}`;
  } else {
    return `Olá ${usuario.nome}`;
  }
}

console.log(resumo(user));

let age: string | number = 90;

age = '25';
age = 30;

function mostrarIdade(idade: string | number) {
  if (typeof idade === 'string') {
    console.log(idade.toUpperCase);
  } else {
    console.log(idade);
  }
}

type NomeCompleto = string;

let meuNome: NomeCompleto = 'Maciel';

let idadeField = document.getElementById('Idade') as HTMLInputElement;

console.log(idadeField.value);

function mostrarTexto(texto: string, alinhamento: 'direita' | 'esquerda') {
  return `${texto} a ${alinhamento}`;
}

function fazerRequisicao(url: string, method: 'GET' | 'POST') {}

type Methods = 'GET' | 'POST';
let url = 'https://google.com.br';
let method: Methods = 'GET';

fazerRequisicao(url, method);

type MathFunction = (n1: number, n2: number) => number;

const somar: MathFunction = (n1, n2) => {
  return n1 + n2;
};

const subtrair: MathFunction = (n1, n2) => {
  return n1 - n2;
};

function removerEleemnto(el: HTMLElement): void {}
