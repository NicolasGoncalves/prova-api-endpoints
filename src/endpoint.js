
import { Router } from "express";

import { dobro, somar, corprimaria } from "./servise.js";

const server = Router();

server.get('/dobro/:numero', (req, resp) => {

    try {

        const numero = Number(req.params.numero);
	    const d = dobro (numero);

        resp.send({dobro: d })
        
    } catch (err) {
        resp.status(406).send({error : err.message})
    }
})

server.get('/somar', (req,resp) => {

    try {
        let j = Number(req.query.j);
	    let n = Number(req.query.n);
	
        let x = somar(j,n);

	    resp.send({
	    soma:x
	})
    } catch (err) {
        resp.status(406).send({error : err.message})
    }
})

server.get('/dia2/corprimaria/:cor', (req, resp) => {

    try {
        let cor = Number(req.params.cor);
         
        let i = corprimaria(cor);

            resp.send({ primaria : i })
        
        
    } 
    
    catch (err) {
        resp.status(406).send({error : err.message})
    }
})




export default server;