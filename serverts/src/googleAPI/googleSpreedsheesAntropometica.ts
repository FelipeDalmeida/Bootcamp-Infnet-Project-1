// Planilha com funções específicas do projeto de pacientes bootcampinfnet

import { getDataSpreedsheetRowsByTitle, pushDataSpreadsheetByTitle } from './googleSpreedsheets'


type Antropometrica = {
    Massa: string | number;
    Estatura: string | number;
    Comprimento_Pe: string | number;
    Altura_Ombro: string | number;
    Largura_Ombro: string | number;
    Envergadura: string | number;
    Altura_Quadril: string | number;
    Largura_Quadril: string | number;
    Altura_Joelho: string | number;
    Altura_Tornozelo: string | number;
}



export const carregaTodasAvAntropometricas = async (id: Number) => {
    const AvAntropometrica: Antropometrica[] = []

    const response = await getDataSpreedsheetRowsByTitle(`antropometricaid${id}`)

    for (let row of response) {
        AvAntropometrica.push({
            Massa: row.Massa,
            Estatura: row.Estatura,
            Comprimento_Pe: row.Comprimento_Pe,
            Altura_Ombro: row.Altura_Ombro,
            Largura_Ombro: row.Largura_Ombro,
            Envergadura: row.Envergadura,
            Altura_Quadril: row.Altura_Quadril,
            Largura_Quadril: row.Largura_Quadril,
            Altura_Joelho: row.Altura_Joelho,
            Altura_Tornozelo: row.Altura_Tornozelo,
        })
    }
    return AvAntropometrica
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
