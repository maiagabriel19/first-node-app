import fs from "fs";


let writeStream = fs.writeFileSync("./teste.txt", "ola mundo", erro => {
    if (erro){
        console.log(erro);
    }
} ); 