import { GoogleSpreadsheet } from 'google-spreadsheet'
import { readFile } from 'fs/promises'

const spreadsheetId="1h-djyATMJOc_MZoGAlFZkQ3N4XI5y_nqedLbhhVYkHU"

const credenciais = JSON.parse(
    await readFile(
      new URL('./key.json', import.meta.url)
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



const pushDataSpreadsheet = (data)=>{
    let sheet;
    getDoc().then(doc => {
            sheet = doc.sheetsByIndex[0];
            sheet.addRow(data)               //receber data sempre como Json
            .then(() => {
                console.log('dado salvo!')
            })
        });
}

const getDataSpreedsheet = async()=>{
    let sheet;
    await getDoc().then(doc => {
        sheet = doc.sheetsByIndex[0];
        // sheet.getRows().then(rows => {
        //     rows.map(row => {
        //         console.log(row.Nome);
        //     })     
        // })
        
    })
    return sheet.getRows()  //retorna um array com objeto de dado de cada coluna, para acessar dados só selecionar posição da coluna e key do objeto (ex: Nome)
}




// pushDataSpreadsheet({Nome:"Carlos",Idade:30})

export {pushDataSpreadsheet,getDataSpreedsheet}