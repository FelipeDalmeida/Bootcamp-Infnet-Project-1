//Planilha com funções genéricas da API google-spreadsheet
import { GoogleSpreadsheet } from 'google-spreadsheet'


//const GoogleSpreadsheet = require('google-spreadsheet')
//const readFile = require('fs/promises')
const credenciais = require('./key.json')

const spreadsheetId="1h-djyATMJOc_MZoGAlFZkQ3N4XI5y_nqedLbhhVYkHU"

// const credenciais = JSON.parse(
// //     //await readFile(
//     async()=>{await readFile(
//       new URL('./key.json', import.meta.url)
//     )}
// );

const getDoc = async () => {
    
    const doc = new GoogleSpreadsheet(spreadsheetId);
    
    await doc.useServiceAccountAuth({
        client_email: credenciais.client_email,
        private_key: credenciais.private_key.replace(/\\n/g, '\n')
    })
    await doc.loadInfo();
    console.log(`Documento ${doc.title} carregado`);
    return doc;
}



export const pushDataSpreadsheet = (data:any,index:number)=>{
    let sheet;
    getDoc().then(doc => {
            sheet = doc.sheetsByIndex[index];
            sheet.addRow(data)               //receber data sempre como Json
            .then(() => {
                console.log('dado salvo!')
            })
        });
}

export const getDataSpreedsheet = async(index:number)=>{
    let sheet:any;
    await getDoc().then(doc => {
        sheet = doc.sheetsByIndex[index];  //indice da planilha
        // sheet.getRows().then(rows => {
        //     rows.map(row => {
        //         console.log(row.Nome);
        //     })     
        // })
        
    })
    return sheet.getRows()  //retorna um array com objeto de dado de cada coluna, para acessar dados só selecionar posição da coluna e key do objeto (ex: Nome)
}

export const getDataSpreedsheetByTitle = async(title:string)=>{
    let sheet:any;
    await getDoc().then(doc => {
        sheet = doc.sheetsByTitle[title];  //indice da planilha
        // sheet.getRows().then(rows => {
        //     rows.map(row => {
        //         console.log(row.Nome);
        //     })     
        // })
        
    })
    return sheet
}


export const createNewSpreedsheet = async(id:number,header:any)=>{

    await getDoc().then(doc=>{
    doc.addSheet({ title: `Paciente${id}`,headerValues: header });
    console.log(`Planilha do Paciente ${id} Criada`)
    })
}


//module.exports = {pushDataSpreadsheet,getDataSpreedsheet,createNewSpreedsheet}