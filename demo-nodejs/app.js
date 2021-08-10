import express from "express"; 
import livros from "./data/livros.json"

const PORT = 3000;
const server = express(); 

const criarUrl = (version, path) => `/api/${version}/${path}`;

server.get(criarUrl('v1', 'livros'), (req, res) => {
    res.json(livros); 
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})
