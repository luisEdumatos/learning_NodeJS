import express from "express"; 
import livrosRoute from "./routes/livrosRoute.js"
import morgan from "morgan";

const PORT = 3000;
const server = express(); 

const criarUrl = (version, path) => `/api/${version}/${path}`;
const LIVROS_URL = criarUrl('v1', 'livros');

server.use(morgan("tiny")); 

server.use(LIVROS_URL, livrosRoute); 

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
