# Calculadora de Partidas Rankeadas

Este projeto foi desenvolvido para calcular o saldo de partidas ranqueadas de um jogador, determinando seu nível com base no número de vitórias.

## Objetivo

A função principal deste projeto recebe como parâmetros a quantidade de vitórias e derrotas de um jogador, calcula o saldo de vitórias e determina o nível do jogador com base no número de vitórias, de acordo com os seguintes critérios:

- Vitórias < 10: Ferro
- Vitórias entre 11 e 20: Bronze
- Vitórias entre 21 e 50: Prata
- Vitórias entre 51 e 80: Ouro
- Vitórias entre 81 e 90: Diamante
- Vitórias entre 91 e 100: Lendário
- Vitórias >= 101: Imortal

## Tecnologias Utilizadas

- Node.js
- JavaScript

## Como Funciona

O código percorre um array de pares de vitórias e derrotas, calcula o saldo de partidas e determina o nível do jogador com base no número de vitórias. O resultado é exibido no console.

## Estrutura do Código

```javascript
let winLose = [
  [20, 11],
  [20, 1],
  [50, 1],
  [80, 1],
  [100, 1],
  [200, 1]
];

for (let contador = 0; contador < winLose.length; contador++) {
  let win = winLose[contador][0];
  let lose = winLose[contador][1];
  let saldoRanked = qtdTaxaVitoriaEDerrota(win, lose);

  let nivel;
  if (win < 10) {
    nivel = "Ferro";
  } else if (win >= 11 && win <= 20) {
    nivel = "Bronze";
  } else if (win >= 21 && win <= 50) {
    nivel = "Prata";
  } else if (win >= 51 && win <= 80) {
    nivel = "Ouro";
  } else if (win >= 81 && win <= 90) {
    nivel = "Diamante";
  } else if (win >= 91 && win <= 100) {
    nivel = "Lendário";
  } else if (win >= 101) {
    nivel = "Imortal";
  }

  console.log(`O Herói tem de saldo de ${saldoRanked} está no nível de ${nivel}`);
}

function qtdTaxaVitoriaEDerrota(win, lose) {
  let subPartidas = win - lose;
  return subPartidas;
}
```
# Como Executar
Clone o repositório para o seu ambiente local:

```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
```
## Navegue até o diretório do projeto:
```sh
cd seu-repositorio
```
## Instale as dependências do projeto (se houver):
```sh
npm install
```
## Execute o script principal:
```sh
node index.js
```

# Contribuição
Sinta-se à vontade para contribuir com melhorias! Para isso, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma nova branch (git checkout -b feature/nome-da-sua-branch).
3. Faça suas alterações e adicione os commits (git commit -am 'Adiciona nova funcionalidade').
4. Envie para o branch (git push origin feature/nome-da-sua-branch).
5. Envie para o branch (git push origin feature/nome-da-sua-branch).

# Licença
Este projeto está licenciado sob a MIT License.

## Feito com ❤️ por Paulo Sérgio
