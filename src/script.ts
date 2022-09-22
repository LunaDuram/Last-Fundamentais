import { Almoco } from "./Almoço";

const almoco = new Almoco('peixe', 'arroz e feijão');

console.log(almoco.refeição);
almoco.carne = 'frango';
console.log(almoco.refeição);