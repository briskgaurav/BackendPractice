let http = require("http");


const serverbnao = http.createServer((request, response)=>{

    response.end("hahaha");

})
serverbnao.listen(3000)

serverbnao.end()