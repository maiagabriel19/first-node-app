import fs from "fs";


let writeStream = fs.writeFileSync("./teste.txt", "ola mundo", erro => {
    if (erro){
        console.log(erro);
    }
} ) ; 

fs.readFile("./teste.txt", "utf-8", (erro, dados) => {
    console.log(dados);
});