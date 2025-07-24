const heroes = ["allu arjun", "ntr","ram"]
const bheroes = ["salman", "don","kumar"]
heroes.push(...bheroes);
console.log(heroes);
console.log(heroes[3][1]);

const allh =  heroes.concat(bheroes);
console.log(allh);


const alln = [...heroes,...bheroes]
console.log(alln);
const allr = allh.flat(Infinity);

console.log(Array.isArray("Aniket"));
console.log(Array.from("Aniket"));

console.log(Array.from({name :"Aniket"}));//interesting problem

let score1 = 100
let score2 = 400
let score3 = 900
console.log(Array.of(score1,score2,score3));


