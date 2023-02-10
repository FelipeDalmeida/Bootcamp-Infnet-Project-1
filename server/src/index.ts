import express from 'express';

const app=express();

const info={
    nome:"Felipe",
    sobrenome: "Seabra",
    idade:23
}
app.get('/',(req,res)=>{
    res.json(
        info
    )
})
app.get('/alunos',(req,res)=>{
    res.json([
        'Gustavo','Felipe','Camila','Tiago','Julia'
    ])
})

const port =8080;
const host='localhost';

app.listen(port,host,()=>{
    console.log(`Servidor iniciado em http://${host}:${port}`)
})
