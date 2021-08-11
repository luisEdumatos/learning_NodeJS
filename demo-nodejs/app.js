import express from "express"; 
import livros from "./data/livros.json"

const PORT = 3000;
const server = express(); 

const criarUrl = (version, path) => `/api/${version}/${path}`;
const LIVROS_URL = criarUrl('v1', 'livros');

server.get(LIVROS_URL, (req, res) => {
    res.json(livros); 
});

server.get(`${LIVROS_URL}/:id`, (req, res) => {
    const livro = livros.find(value => value.id == req.params.id); 
    if (livro) { 
        res.json(livro); 
    } else { 
        res.send('Livro não encontrado'); 
    }
    res.end(); 
})

server.post(LIVROS_URL, (req, res) => {
    console.log('tratando metodo post'); 
    res.end(); 
});

server.put(LIVROS_URL, (req, res) => {
    console.log('tratando metodo put'); 
    res.end(); 
});

server.delete(LIVROS_URL, (req, res) => {
    console.log('tratando metodo delete'); 
    res.end(); 
});

//Router Handler
server.get("/manipulando-rota", (req, res, next) => { 
    res.send('Aprendendo route handler');
    next(); 
}, (req, res, next) => {
    console.log('Segundo handler'); 
    next(); 
}, (req, res) => {
    console.log('terceiro handler');
})

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})
