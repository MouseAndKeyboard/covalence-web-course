import * as mysql from 'mysql';
import Chirps from './chirps';

export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: '---',
    password: '---',
    database: 'chirper'
});

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err){
                return reject(err);
            }
            else {
                return resolve(results);
            }
        }); 
    });
}



export default {
    Chirps
}