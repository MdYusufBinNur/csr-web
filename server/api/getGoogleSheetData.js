// /server/api/getGoogleSheetData.js
import {google} from 'googleapis';
import {readFileSync} from 'fs';

export default defineEventHandler(async () => {

    const id = '1qy2YsenHx3CkzLGj8H9AnoSl7vZR0znZDmRAH7rTuNs';
    const gid = '981173174';
    const url = 'https://docs.google.com/spreadsheets/d/1qy2YsenHx3CkzLGj8H9AnoSl7vZR0znZDmRAH7rTuNs/gviz/tq?tqx=out:json&tq&gid=981173174';


    // Load service account credentials
    const credentials = JSON.parse(readFileSync('cred.json'));

    // Authorize and access Google Sheets
    const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });
    const sheets = google.sheets({ version: 'v4', auth });


    // Specify your Google Sheet ID and range of data
    const spreadsheetId = '1RQMUjy18JimDY6OSCwSl7YFE6JQc86wUFEQoLaFdfMs';
    const range = 'A:G';
    // Adjust range based on your needs
    // Specify your Google Sheet ID and range of data
    // const spreadsheetId = '1qy2YsenHx3CkzLGj8H9AnoSl7vZR0znZDmRAH7rTuNs';
    // const range = 'A:G';

    try {
        const response = await sheets.spreadsheets.values.get({ spreadsheetId, range });
        return response.data.values;
    } catch (error) {
        console.error('Error fetching Google Sheets data:', error);
        return { error: 'Failed to fetch data' };
    }
});
