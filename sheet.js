const { GoogleSpreadsheet } = require('google-spreadsheet');
const dotenv = require('dotenv');
dotenv.config();

module.exports = class Sheet {
    constructor(){
        this.doc = new GoogleSpreadsheet(process.env.SHEET_ID);
    }
    
    async load() {
        await this.doc.useServiceAccountAuth(require('./credentials.json'));
        await this.doc.loadInfo(); 
    }

    async addRows(rows){
        const sheet = this.doc.sheetsByIndex[0]; 
        await sheet.addRows(rows);
    }
}


