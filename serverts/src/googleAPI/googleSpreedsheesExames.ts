// Planilha com funções específicas do projeto de pacientes bootcampinfnet

import { getDataSpreedsheetRowsByTitle, pushDataSpreadsheetByTitle } from './googleSpreedsheets'
import { Antropometrica, CompCorp, Hemograma } from '../types/types'

const identificaTipo=(type:string)=>{
    if(type==="antropometricaid"){
        const exame:Antropometrica[]=[]
        return exame
    } else if(type==="compcorporalid"){
        const exame:CompCorp[]=[]
        return exame
    } else {
        const exame:Hemograma[]=[]
        return exame
    }
}

export const carregaTodosExames = async (id: Number,type:string) => {
    const exame=identificaTipo(type)
   

    const response = await getDataSpreedsheetRowsByTitle(`${type}${id}`)

    let keys = Object.keys(exame as keyof Hemograma|CompCorp| Antropometrica)
  

    for (let row of response) {
        let obj:any={}
        keys.map(key=>{
            console.log(`Row: ${row[key]}`);
            obj[key as keyof typeof obj]=row[key]; //TODO: Corrigir
            
        })
        exame.push(
            obj
        )
    }
    return exame
}

export const carregaAvAntropometricaID = async (id: Number) => {

    const response = await getDataSpreedsheetRowsByTitle(`antropometricaid${id}`)

    const ResultadoAvAntropometrica: Antropometrica = {  //irá carregar o ultimo exame, então pega a posição response.length-1
        Massa: response[response.length - 1].Massa,
        Estatura: response[response.length - 1].Estatura,
        Comprimento_Pe: response[response.length - 1].Comprimento_Pe,
        Altura_Ombro: response[response.length - 1].Altura_Ombro,
        Largura_Ombro: response[response.length - 1].Largura_Ombro,
        Envergadura: response[response.length - 1].Envergadura,
        Altura_Quadril: response[response.length - 1].Altura_Quadril,
        Largura_Quadril: response[response.length - 1].Largura_Quadril,
        Altura_Joelho: response[response.length - 1].Altura_Joelho,
        Altura_Tornozelo: response[response.length - 1].Altura_Tornozelo,
    }


    return ResultadoAvAntropometrica
}

export const adicionaAvAntropometrica = (id: number, data: Antropometrica) => {
    pushDataSpreadsheetByTitle(data, `antropometricaid${id}`)
    console.log("Dados Avaliação Antropométrica Adicionados")
}

export const alteraDadosAvAntropometrica = async (id: number, data: any) => {
    let rows: any; //rows da planilha com a avaliação antropometrica
    rows = await getDataSpreedsheetRowsByTitle(`antropometricaid${id}`)



    let keys = Object.keys(data)
    keys.map(key => { rows[rows.length - 1][key] = data[key] })

    await rows[rows.length - 1].save()
}

export const deletaUltimaAvAntropometrica = async (id: number) => {
    let rows: any; //rows da planilha com a avaliação antropometrica
    rows = await getDataSpreedsheetRowsByTitle(`antropometricaid${id}`)


    await rows[rows.length - 1].delete()
}
