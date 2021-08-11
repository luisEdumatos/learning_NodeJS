import express from "express"; 
import livros from "../data/livros.json"; 
import mongoose from "mongoose";

const DB_URL = "mongodb+srv://admin:admin@cluster0.wlho3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection; 

db.once("open", () => {
    console.log("Conexão aberta no MongoDB");
});

const livrosSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo: String, 
    tipo: String
});

const livrosModel = mongoose.model("Livro", livrosSchema); 

const router = express.Router(); 

let livrosArray = livros; 

router.get("/", (req, res) => {
    res.json(livros); 
});

router.get("/:id", (req, res) => {
    const livro = livros.find(value => value.id == req.params.id); 
    if (livro) { 
        res.json(livro); 
    } else { 
        res.send('Livro não encontrado'); 
    }
    res.end(); 
})

router.post("/", (req, res) => {
    console.log(req.body);
    livrosArray.push(req.body); 
    res.status(200).send("OK");  
    res.end(); 
});

router.put("/", (req, res) => {
    console.log('tratando metodo put'); 
    res.end(); 
});

router.delete("/", (req, res) => {
    console.log('tratando metodo delete'); 
    res.end(); 
});

router.param("id", (req, res, next, id) => { 
    if (isNaN(id)) { 
        next("Não é numero"); 
    }
    next(); 
}); 

export default router; 