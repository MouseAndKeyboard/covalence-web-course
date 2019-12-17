import * as mysql from 'mysql';
import Chirps from './chirps';
import Users from './user';

export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chirprapp',
    password: '0EP@an4l0xCgA5JhQf9',
    database: 'chirper'
});

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {

        Connection.query(query, values, (err, results) => {
            if (results){
                
                console.log(results);
                return resolve(results);
            }
            else {
                console.log(err);
                return reject(err);
                
            }
        }); 
    });
}



export default {
    Chirps,
    Users
}