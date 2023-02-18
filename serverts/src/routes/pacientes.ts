import express from 'express'
import { getDataSpreedsheet,pushDataSpreadsheet, createNewSpreedsheet } from '../googleAPI/googleSpreedsheets';

export const pacientes = express.Router();

type Pacientes = {
    id?:number;
    Nome:string;
    Idade:number;
    Data_Nascimento:string;
    Data_Avaliação:string
}


const carregaPacientes = async()=>{
    const response = await getDataSpreedsheet(0)
    const Pacientes:Pacientes[]=[]
    response.map((paciente:Pacientes)=>{
        Pacientes.push({
            id:paciente.id,
            Nome:paciente.Nome,
            Idade:paciente.Idade,
            Data_Nascimento:paciente.Data_Nascimento,
            Data_Avaliação:paciente.Data_Avaliação
        })
    })
    return  Pacientes
}

const numeroDePacientes=async()=>{
    const response = await getDataSpreedsheet(0)
    return response.length
}

const criaOlanilhaPaciente = async(id:number)=>{
    await createNewSpreedsheet(id,['Teste1','Teste2','Teste3'])
    console.log(`Planilha do Paciente id${id} criada`)

}


//lista todos os pacientes
pacientes.get('/',async (req,res)=>{
    
    const Pacientes = await carregaPacientes()

    res.status(200).json(Pacientes)
});

//lista um paciente especifico
pacientes.get('/:id',(req,res)=>{
    res.status(200).json('')
});

//add um paciente novo
pacientes.post('/',async(req,res)=>{
    const id = await numeroDePacientes()+1
    const data={
        id:id,
        ...req.body
    }
    pushDataSpreadsheet(data,0)
    criaOlanilhaPaciente(id)

    res.status(201).json({
        successes:true,
        data
    });
});

// Sobrescreve os dados de um paciente
pacientes.put('/:id',(req,res)=>{
    res.status(200).json({
        success: true,
        data: {
            id: Number(req.params.id),
            ...req.body,
        },
    });
})

// Realiza uma atualização parcial nos dados de um paciente
pacientes.patch("/:id", (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            id: Number(req.params.id),
            //...listaPacientes[Number(req.params.id) - 1],
            ...req.body,
        }
    })
})

// Deleta um paciente
pacientes.delete("/:id", (req, res) => {
    res.json({
        success: true,
        data: {
            id: Number(req.params.id),
            //...listaPacientes[Number(req.params.id) - 1],
        }
    })
})