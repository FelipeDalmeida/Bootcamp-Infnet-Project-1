import express from 'express'

export const pacientes = express.Router();

type Pacientes = {
    id?:number;
    nome:string;
    idade:number;
    altura:number;
    peso:number
}

const listaPacientes:Pacientes[] =[
    {
        id:1,
        nome:"Felipe",
        idade:28,
        altura:172,
        peso:85
    },
    {
        id:2,
        nome:"Rafaella",
        idade:30,
        altura:170,
        peso:65,
    },
    {
        id:3,
        nome:"Henrique",
        idade:31,
        altura:171,
        peso:70,
    },
]

//lista todos os pacientes
pacientes.get('/',(req,res)=>{
    res.status(200).json(listaPacientes)
});

//lista um paciente especifico
pacientes.get('/:id',(req,res)=>{
    res.status(200).json(listaPacientes[Number(req.params.id)-1])
});

//add um paciente novo
pacientes.post('/',(req,res)=>{
    res.status(201).json({
        successes:true,
        data:{
            id:listaPacientes.length+1,
            ...req.body
        }
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
            ...listaPacientes[Number(req.params.id) - 1],
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
            ...listaPacientes[Number(req.params.id) - 1],
        }
    })
})