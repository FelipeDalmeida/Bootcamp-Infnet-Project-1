import express from 'express';
import cors from 'cors';
import {pacientes} from "./routes/pacientes"

const app=express();
app.use(express.json());
app.use(cors());
app.use("/pacientes",pacientes)

const port =8080;
const host="0.0.0.0";

app.listen(port,host,()=>{
    console.log(`Servidor express iniciado em http://${host}:${port}`);
})

// const info=[
//     { "name": "Eduardo", "age": 15.6 },
//     { "name": "João", "age": 22.9 },
//     { "name": "Maria", "age": 33.4 },
//     { "name": "Paulo", "age": 10.1 },
//     { "name": "Ana", "age": 19.3 }
//   ]
// app.get('/',(req,res)=>{
//     res.json(
//         info
//     )
// })
// app.get('/alunos',(req,res)=>{
//     res.json([
//         'Gustavo','Felipe','Camila','Tiago','Julia'
//     ])
// })




