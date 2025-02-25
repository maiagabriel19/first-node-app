import { error } from "console";
import fs from "fs";

let conteudoFs = "Escrevendo texto com a biblioteca Fs\n";
let nodeFs = "Aprendendo NodeJs";

let writeFileSync = fs.writeFileSync("./conteudo.txt", conteudoFs, erro => {
    if (erro){
        console.log("erro")
    }
});
let write = fs.appendFile("./conteudo.txt", nodeFs, erro =>{
    if (erro){
        console.log("erro");
    }
})
fs.readFile("./conteudo.txt", "utf-8",(error, dados) =>{
    console.log(dados);
});

