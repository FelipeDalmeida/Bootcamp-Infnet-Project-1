import { GoogleSpreadsheet } from 'google-spreadsheet'
import { readFile } from 'fs/promises'

//const GoogleSpreadsheet = require('google-spreadsheet')
//const readFile = require('fs/promises')
//const credenciais = require('./key.json')

const spreadsheetId="1h-djyATMJOc_MZoGAlFZkQ3N4XI5y_nqedLbhhVYkHU"

const credenciais = JSON.parse(
    
    await readFile(
      new URL('./key.json',import.meta.url)
    )
  );

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



export const pushDataSpreadsheet = (data,id)=>{
    let sheet;
    getDoc().then(doc => {
            sheet = doc.sheetsByIndex[id];
            sheet.addRow(data)               //receber data sempre como Json
            .then(() => {
                console.log('dado salvo!')
            })
        });
}

export const getDataSpreedsheet = async(id)=>{
    let sheet;
    await getDoc().then(doc => {
        sheet = doc.sheetsByIndex[id];
        // sheet.getRows().then(rows => {
        //     rows.map(row => {
        //         console.log(row.Nome);
        //     })     
        // })
        
    })
    return sheet.getRows()  //retorna um array com objeto de dado de cada coluna, para acessar dados só selecionar posição da coluna e key do objeto (ex: Nome)
}

export const createNewSpreedsheet = async(id)=>{
    await getDoc().then(doc=>{
    doc.addSheet({ title: `Paciente${id}` });
    console.log(`Planilha do Paciente ${id} Criada`)
    })
}


// pushDataSpreadsheet({Nome:"Carlos",Idade:30})

//module.exports = {pushDataSpreadsheet,getDataSpreedsheet,createNewSpreedsheet}