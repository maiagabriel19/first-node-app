import { error } from "console";
import fs from "fs";

let writeFileSync = fs.writeFileSync("./conteudo.txt","Escrevendo texto com a biblioteca Fs\n", erro => {
    if (erro){
        console.log("erro")
    }
});
let write = fs.appendFile("./conteudo.txt","Aprendendo NodeJs", erro =>{
    if (erro){
        console.log("erro");
    }
})
fs.readFile("./conteudo.txt", "utf-8",(error, dados) =>{
    console.log(dados);
});

