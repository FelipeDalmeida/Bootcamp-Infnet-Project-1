// Planilha com funções específicas do projeto de pacientes bootcampinfnet

import { getDataSpreedsheetRowsByTitle, pushDataSpreadsheetByTitle } from './googleSpreedsheets'


type CompCorp = {
    Massa: string | number;
    IMC: string | number;
    Gordura_Corporal: string | number;
    Gordura_Visceral: string | number;
    Metabolismo_Basal: string | number;
    Musculos_Esqueleticos: string | number;
    Idade_Corporal: string | number;

}


export const carregaTodasAvCompCorp = async (id: Number) => {
    const AvCompCorp: CompCorp[] = []

    const response = await getDataSpreedsheetRowsByTitle(`compcorporalid${id}`)

    for (let row of response) {
        AvCompCorp.push({
            Massa: row.Massa,
            IMC: row.IMC,
            Gordura_Corporal: row.Gordura_Corporal,
            Gordura_Visceral: row.Gordura_Visceral,
            Metabolismo_Basal: row.Metabolismo_Basal,
            Musculos_Esqueleticos: row.Musculos_Esqueleticos,
            Idade_Corporal: row.Idade_Corporal,
        })
    }
    return AvCompCorp
}

export const carregaAvCompCorpID = async (id: Number) => {

    const response = await getDataSpreedsheetRowsByTitle(`compcorporalid${id}`)

    const ResultadoAvAntropometrica: CompCorp = {  //irá carregar o ultimo exame, então pega a posição response.length-1
        Massa: response[response.length - 1].Massa,
        IMC: response[response.length - 1].IMC,
        Gordura_Corporal: response[response.length - 1].Gordura_Corporal,
        Gordura_Visceral: response[response.length - 1].Gordura_Visceral,
        Metabolismo_Basal: response[response.length - 1].Metabolismo_Basal,
        Musculos_Esqueleticos: response[response.length - 1].Musculos_Esqueleticos,
        Idade_Corporal: response[response.length - 1].Idade_Corporal,
    }


    return ResultadoAvAntropometrica
}

export const adicionaAvCompCorp = (id: number, data: CompCorp) => {
    pushDataSpreadsheetByTitle(data, `compcorporalid${id}`)
    console.log("Dados Avaliação Composição Corporal")
}

export const alteraDadosAvCompCorp = async (id: number, data: any) => {
    let rows: any; //rows da planilha com a avaliação antropometrica
    rows = await getDataSpreedsheetRowsByTitle(`compcorporalid${id}`)



    let keys = Object.keys(data)
    keys.map(key => { rows[rows.length - 1][key] = data[key] })

    await rows[rows.length - 1].save()
}

export const deletaUltimaAvCompCorp = async (id: number) => {
    let rows: any; //rows da planilha com a avaliação antropometrica
    rows = await getDataSpreedsheetRowsByTitle(`compcorporalid${id}`)


    await rows[rows.length - 1].delete()
}
