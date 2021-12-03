const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pessoasRotas = require("./routes/pessoasRotas");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//Rotas
app.use("/api", pessoasRotas.routes)

//Rota raiz que responde por GET
app.get("/", (req, res)=>{
    console.log("Rota raiz");
    res.send("Acesso a raiz da API");
})

app.listen(process.env.PORT, () => console.log("Servidor funcionando perfeitamente"));