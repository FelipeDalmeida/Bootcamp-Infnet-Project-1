import express from 'express'
import { adicionaHemograma, alteraDadosHemograma, carregaHemogramaID, carregaTodosHemogramas, deletaUltimoHemograma } from '../googleAPI/googleSpreedsheetsHemograma';
export const hemograma = express.Router();





//lista todos os hemogramas de um paciente
hemograma.get('/all/:id',async(req,res)=>{
    const Hemogramas =await carregaTodosHemogramas(Number(req.params.id))
    res.status(200).json(Hemogramas)
});

//lista o hemograma de um paciente especifico
hemograma.get('/:id',async(req,res)=>{
    const Hemograma =await carregaHemogramaID(Number(req.params.id))
    res.status(200).json(Hemograma)
});

//add um resultado de hemograma novo a um paciente com id
hemograma.post('/:id',async(req,res)=>{

    adicionaHemograma(Number(req.params.id),{...req.body})

    res.status(201).json({
        successes:true,
        data:{...req.body}
    });
});

// // Sobrescreve os dados do ultímo exame de Hemograma de um paciente
hemograma.put('/:id',async (req,res)=>{
    await alteraDadosHemograma(Number(req.params.id),req.body)

    res.status(200).json({
        success: true,
        data: {
            ...req.body
        },
    });
})

// // Realiza uma atualização parcial nos dados do hemograma de um paciente
hemograma.patch("/:id", async (req, res) => {
    await alteraDadosHemograma(Number(req.params.id),req.body)

    res.status(200).json({
        success: true,
        data: {
            ...req.body
        },
    });
})

// // Deleta os dados do ultímo exame de Hemograma de um paciente
hemograma.delete("/:id", (req, res) => {
    deletaUltimoHemograma(Number(req.params.id))
    res.json({
        success: true,
        data: {
            id: Number(req.params.id),
        }
    })
})