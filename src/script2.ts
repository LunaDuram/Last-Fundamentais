import { Menu } from "./Menu";
import { mostraMenu } from "./mostraMenu";

const option = mostraMenu();

if(option == Menu.Cadastro){
    console.log(`Faz o cadastro`);
}

const cardapio = [];
cardapio['Hamburguer'] = 20;
cardapio['Refrigerante'] = 6;
cardapio['Batata frita'] = 5;

console.log(cardapio['Hamburguer']);