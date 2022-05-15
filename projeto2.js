
console.log()
const prompt = require("prompt-sync")();


while(true){


const objetos = ["pedra","papel","tesoura"];
let vitoria = 0;
let vitoriaPc =0;

console.log(`Bem vindo(a) ao jogo Jokenpô onde você jogará contra a máquina.
seu objetivo é escolher entre as opçoes aseguir:
pedra, papel ou tesoura. Mas sabendo que:
1° Pedra ganha da tesoura, mas perde para o papel;
2° Tesoura ganha do papel, mas perde para a pedra
3° Papel ganha da pedra, mas perde para a tesoura`);
console.log();



let rodadas = +prompt("Esolha o número de rodadas! ");




for( i =0; i < rodadas; i++){

console.log(`Menu das opções.
Digite o número correspondente a cada elemento:
[0] - ${objetos[0]}
[1] - ${objetos[1]} 
[2] - ${objetos[2]}`);
console.log();

let numeroAleatorio = Math.floor(Math.random() * 3);
let escolhaJogador = +prompt("Digite o número correspondente. ");

while (escolhaJogador >2 || escolhaJogador < 0){
    escolhaJogador = +prompt(`Opção inválida o número escolhido ${escolhaJogador}.
    Por favor escolha um número válido `);
}

console.log(`Minha escolha é: ${objetos[escolhaJogador]}`);
console.log(`Escolha do PC: ${objetos[numeroAleatorio]}`);
console.log()
//Ordem de PREDECÊNCIA 1° "!" depois "&&" e por ultimo "||"
   if(  
       (objetos[escolhaJogador] == objetos[0] && objetos[numeroAleatorio] == objetos[2] ) || 
       (objetos[escolhaJogador] == objetos[1] && objetos[numeroAleatorio] == objetos[0] ) ||
       (objetos[escolhaJogador] == objetos[2] && objetos[numeroAleatorio] == objetos[1] )
       ){
           vitoria++
           console.log(`Você pontuou ${vitoria} ponto das rodadas `)
       }else if( 
        objetos[escolhaJogador] == objetos[numeroAleatorio]
        ){
        console.log(`Empatou niguém pontuou!`)

   }else{
       vitoriaPc++
    console.log(`A máquina pontuou!`)

   }

console.log()
prompt(" Aperte Enter para continuar ")



}
if(vitoria > vitoriaPc){
    console.log(`Parabéns você ganhou o jogo! teve un  total de ${vitoria} pontos`)
    }else if(vitoria<vitoriaPc){
            console.log(`A máquina ganhou o jogo e teve ${vitoriaPc} pontos`)
        }else{
            console.log("Empaou niguem gangou!")
        }

         console.log()

       resposta = prompt("Deseja jogar o jogo novamente? se sim responda [sim]: ").toLowerCase()
       if(resposta == "sim"){
           true
       }else{
           console.log("Jogo finalizado. Até a próxima tchal! ")
           break
       }

    }

