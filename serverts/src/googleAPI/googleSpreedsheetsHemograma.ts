// Planilha com funções específicas do projeto de pacientes bootcampinfnet

import {getDataSpreedsheetRowsByTitle, pushDataSpreadsheetByTitle } from './googleSpreedsheets'


type Hemograma = {
    Hemacias: string | number;
    Hemoglobina: string | number;
    Hematocritos: string | number;
    Leucocitos: string | number;
    VGM: string | number;
    HGM: string | number;
    CHGM: string | number;
    RDW: string | number;
    Plaquetas: string | number;
}



export const carregaTodosHemogramas = async (id: Number) => {
    const Hemograma: Hemograma[] = []

    const response = await getDataSpreedsheetRowsByTitle(`hemograma${id}`)

    for (let row of response) {
        Hemograma.push({
            Hemacias: row.Hemacias,
            Hemoglobina: row.Hemoglobina,
            Hematocritos: row.Hematocritos,
            Leucocitos: row.Leucocitos,
            VGM: row.VGM,
            HGM: row.HGM,
            CHGM: row.CHGM,
            RDW: row.RDW,
            Plaquetas: row.Plaquetas,
        })
    }
    return Hemograma
}

export const carregaHemogramaID = async (id: Number) => {

    const response = await getDataSpreedsheetRowsByTitle(`hemograma${id}`)

    const ResultadoHemograma: Hemograma = {  //irá carregar o ultimo exame, então pega a posição response.length-1
        Hemacias: response[response.length - 1].Hemacias,
        Hemoglobina: response[response.length - 1].Hemoglobina,
        Hematocritos: response[response.length - 1].Hematocritos,
        Leucocitos: response[response.length - 1].Leucocitos,
        VGM: response[response.length - 1].VGM,
        HGM: response[response.length - 1].HGM,
        CHGM: response[response.length - 1].CHGM,
        RDW: response[response.length - 1].RDW,
        Plaquetas: response[response.length - 1].Plaquetas,
    }


    return ResultadoHemograma
}

export const adicionaHemograma = (id: number, data: Hemograma) => {
    pushDataSpreadsheetByTitle(data, `hemograma${id}`)
    console.log("Dados Hemograma Adicionados")
}

export const alteraDadosHemograma = async (id: number, data: any) => {
    let rows: any; //rows da planilha com hemograma
    rows = await getDataSpreedsheetRowsByTitle(`hemograma${id}`)



    let keys = Object.keys(data)
    keys.map(key => { rows[rows.length - 1][key] = data[key] })

    await rows[rows.length - 1].save()
}

export const deletaUltimoHemograma=async(id: number)=>{
    let rows: any; //rows da planilha com hemograma
    rows = await getDataSpreedsheetRowsByTitle(`hemograma${id}`)


    await rows[rows.length - 1].delete()
}
