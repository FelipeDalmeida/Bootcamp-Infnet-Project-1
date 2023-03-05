import express from 'express';
import cors from 'cors';
import {pacientes} from "./routes/pacientes"
import { antropometrica } from './routes/avAntropometrica';
import { compcorp } from './routes/avComposicaoCorportal';

const app=express();
app.use(express.json());
app.use(cors());
app.use("/pacientes",pacientes)
// app.use("/hemograma",hemograma)
app.use("/antropometrica",antropometrica)
app.use("/compcorp",compcorp)

const port =8080;
const host="0.0.0.0";

app.listen(port,host,()=>{
    console.log(`Servidor express iniciado em http://${host}:${port}`);
})



