import {GoogleAuth} from 'google-auth-library'
import {google} from 'googleapis'

const spreadsheetId:string = "1h-djyATMJOc_MZoGAlFZkQ3N4XI5y_nqedLbhhVYkHU";

async function getValues(range:string) {
  
    // const auth = new GoogleAuth({
    //   keyFile:"key.json",
    //   scopes: 'https://www.googleapis.com/auth/spreadsheets',
    // });
    const auth = new GoogleAuth({
        keyFile: "key.json",
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
      }); 

    const service = google.sheets({version: 'v4', auth});
    try {
      const result = await service.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
      const numRows = result.data.values ? result.data.values.length : 0;
      console.log(`${numRows} rows retrieved.`);
    //   console.log(result.data.values)
    //   return result.data.values[0];
    return result
    } catch (err) {
      // TODO (developer) - Handle exception
      throw err;
    }
  }
  
  async function updateValues(range:string, valueInputOption:string, values:any) {

  
    const auth = new GoogleAuth({
      keyFile:"key.json",
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });
  
    const service = google.sheets({version: 'v4', auth});
    // let values = [
    //   [
    //     // Cell values ...
    //   ],
    //   // Additional rows ...
    // ];
    const resource = {
      values,
    };
    try {
      const result = await service.spreadsheets.values.update({
        spreadsheetId,
        range,
        valueInputOption,  //sempre "USER_ENTERED"
        resource,
      });
      //console.log('%d cells updated.', result.data.updatedCells);
      return result;
    } catch (err) {
      // TODO (Developer) - Handle exception
      throw err;
    }
  }

  


export {getValues,updateValues}