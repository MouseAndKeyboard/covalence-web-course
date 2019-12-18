import * as msql from 'mysql';
import cfg from '../config';

import blog from './blog';

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

export default {
    blog
}