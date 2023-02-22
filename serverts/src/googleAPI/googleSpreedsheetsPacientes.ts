// Planilha com funções específicas do projeto de pacientes bootcampinfnet

import { GoogleSpreadsheet } from 'google-spreadsheet'
import { pushDataSpreadsheet, createNewSpreedsheet,getDataSpreedsheet,getDataSpreedsheetByTitle } from './googleSpreedsheets'

const credenciais = require('./key.json')

const spreadsheetId="1h-djyATMJOc_MZoGAlFZkQ3N4XI5y_nqedLbhhVYkHU"

type Pacientes = {
    id?:number;
    Nome:string;
    Idade:number;
    Data_Nascimento:string;
    Data_Avaliação:string
}


export const carregaPacientes = async()=>{
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

export const carregaPacienteID = async(id:Number)=>{
    let Paciente:Pacientes
    const response = await getDataSpreedsheet(0)
    response.map((paciente:Pacientes)=>{
        if(paciente.id==id){
        console.log("Paciente")
        Paciente = {
                id:paciente.id,
                Nome:paciente.Nome,
                Idade:paciente.Idade,
                Data_Nascimento:paciente.Data_Nascimento,
                Data_Avaliação:paciente.Data_Avaliação
            }
          
        }
    })
    return Paciente 
}


export const numeroDePacientes=async()=>{
    const response = await getDataSpreedsheet(0)
    return response.length
}

export const idNovoPaciente=async()=>{
    const response = await getDataSpreedsheet(0)
    if (response.length>0){
        return Number(response[response.length-1].id)+1
    } else {
        return 1
    }
}

export const criaPlanilhaPaciente = async(id:number)=>{
    await createNewSpreedsheet(id,['Teste1','Teste2','Teste3'])
    console.log(`Planilha do Paciente id${id} criada`)

}

export const criaPaciente = async(data:Pacientes)=>{
    const novoID = await idNovoPaciente()
    data={id:novoID,...data}
    pushDataSpreadsheet(data,0)
    await criaPlanilhaPaciente(novoID)

    return data

}

export const deletaPaciente = async(id:number,sheetTitle:string)=>{
    let rowsPacientes:any;//rows da Sheet de index 0
    let sheetPaciente:any;//Sheet especifica do paciente

    rowsPacientes = await getDataSpreedsheet(0)
    sheetPaciente = await getDataSpreedsheetByTitle(sheetTitle)

    let index:number;
    rowsPacientes.map((row,ind)=>{
        console.log(row.id)
        if(row.id==id){
            console.log(`Index:${ind}`)
            index=Number(ind)
        }
    })


    const nome:string = rowsPacientes[index].Nome
    rowsPacientes[index].delete();
    sheetPaciente.delete();

    console.log(`Paciente ${nome} com id ${id} deletado`)

}


