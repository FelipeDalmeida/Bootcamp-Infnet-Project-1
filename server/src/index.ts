import express from 'express';

const app=express();

const info=[
    { "name": "Eduardo", "age": 15.6 },
    { "name": "João", "age": 22.9 },
    { "name": "Maria", "age": 33.4 },
    { "name": "Paulo", "age": 10.1 },
    { "name": "Ana", "age": 19.3 }
  ]
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
