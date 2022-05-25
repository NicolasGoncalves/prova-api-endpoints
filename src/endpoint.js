
import { Router } from "express";

import { dobro, somar, corprimaria, ingresso, temperatura, tabuada, caracter , maiornumero } from "./servise.js";

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

server.post('/somar', (req,resp) => {

    try {
        let {j,n}=req.body;
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

server.get("/dia2/ingresso",(req,resp)=>{
    try {
        let {dia,nascionalidade,meia}= req.query;

        let x=ingresso(dia,nascionalidade,meia);
        resp.send({ingresso:x});
    } catch (err) {
        resp.status(406).send({error : err.message})
        
    }
})

server.get("/temperatura",(req,resp)=>{
    try {
        let x = req.query.temp;
        let y=temperatura(x);
        resp.send({
            temperatura:y
        })
    } catch (err) {
        resp.status(406).send({error : err.message})
    }
})

server.get("/tabuada",(req,resp)=>{
    try {
        let x=Number(req.query.numero);
        let y=tabuada(x);
        resp.send({
            tabuada:y
        })
    } 
    catch (err) {
        resp.status(406).send({error : err.message})
    }
})

server.post('/dia/ingresso' , (req,resp) => {

    try {
        const { inteira, meia , semana ,nacionalidade} = req.body;

        const total = ingresso( inteira, meia , semana ,nacionalidade);

        resp.send({ total : total })

    } 
    catch (err) {
        resp.status(406).send({ error: err.message })
    }

})

server.get('/frequencia/:texto/:caractere', (req,resp) => {

    try {
        
        const { texto, caractere } = req.params ;
        const  freq = caracter(texto , caractere);

        resp.send({ freq : freq });

    } catch (err) {
        
        resp.status(406).send({ erro: err.message })
    }

})

 server.post('/maiorNumero', (req,resp) => {

    try {
        
        const numero = req.body;

        const maior = maiornumero(numero);
        
        resp.send({ maior:maior })
    } 
    catch (err) {
        resp.status(406).send({ erro : err.message })
    }
 })

export default server;