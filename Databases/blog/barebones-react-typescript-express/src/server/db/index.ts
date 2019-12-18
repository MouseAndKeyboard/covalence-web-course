import * as msql from 'mysql';
import cfg from '../config';

import blog from './blog';
import tag from './tag';

let pool = msql.createPool(cfg.mysql);

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {

        pool.query(query, values, (err, results) => {
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
interface insertResponse {
    fieldCount: number,
    affectedRows: number,
    insertId: number,
    serverStatus: number,
    warningCount: number,
    message: string,
    protocol41: boolean,
    changedRows: number
}

export const Command = (query: string, values?: Array<string | number>) => {
    return new Promise<insertResponse>((resolve, reject) => {

        pool.query(query, values, (err, results) => {
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
    blog,
    tag
}