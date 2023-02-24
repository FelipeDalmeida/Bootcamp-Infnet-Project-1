// Planilha com funções específicas do projeto de pacientes bootcampinfnet

import { GoogleSpreadsheet } from 'google-spreadsheet'
import { pushDataSpreadsheet, createNewSpreedsheet,getDataSpreedsheet,getDataSpreedsheetByTitle } from './googleSpreedsheets'

const credenciais = require('./key.json')

const spreadsheetId="1h-djyATMJOc_MZoGAlFZkQ3N4XI5y_nqedLbhhVYkHU"

type Pacientes = {
    id?:number;
    Nome:string;
    Sobrenome:string;
    Idade:number;
    Sexo:string;
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
            Sobrenome:paciente.Sobrenome,
            Data_Nascimento:paciente.Data_Nascimento,
            Sexo:paciente.Sexo,
            Data_Avaliação:paciente.Data_Avaliação
        })
    })
    return  Pacientes
}

export const carregaPacienteID = async(id:Number)=>{
    let Paciente:Pacientes={id:0,Nome:"",Idade:0,Sobrenome:"",Sexo:"",Data_Nascimento:"",Data_Avaliação:""}
    const response = await getDataSpreedsheet(0)
    response.map((paciente:Pacientes)=>{
        if(paciente.id==id){
        
        Paciente = {...Paciente,
                id:paciente.id,
                Nome:paciente.Nome,
                Idade:paciente.Idade,
                Sobrenome:paciente.Sobrenome,
                Sexo:paciente.Sexo,
                Data_Nascimento:paciente.Data_Nascimento,
                Data_Avaliação:paciente.Data_Avaliação
            }
            console.log(`Paciente ${Paciente.Nome} com id: ${Paciente.id} carregado`)  
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

    let index:number=-1;
    rowsPacientes.map((row:any,ind:any)=>{ //encontrar a coluna do paciente
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

export const alteraDadosPaciente = async(id:number,data:any)=>{
    let rowsPacientes:any; //rows da Sheet de index 0
    rowsPacientes = await getDataSpreedsheet(0)


    let index:number=-1;
    rowsPacientes.map((row:any,ind:any)=>{  //encontrar a coluna do paciente
        if(row.id==id){
            console.log(`Index:${ind}`)
            index=Number(ind)
        }
    })
    //data={...rowsPacientes[index],...data}
    //console.log(data)
    let keys=Object.keys(data)
    keys.map(key=>{ rowsPacientes[index][key]=data[key]})
   
    await  rowsPacientes[index].save()
}

