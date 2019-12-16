import * as mysql from 'mysql';
import Blogs from './blogs';

export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: '---',
    password: '---',
    database: 'chirpr'
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
    Blogs
}