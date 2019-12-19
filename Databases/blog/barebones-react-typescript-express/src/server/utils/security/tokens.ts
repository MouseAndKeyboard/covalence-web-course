import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';

import cfg from '../../config/'

import db from '../../db';

export const CreateToken = async (payload : IPayload) => {
    let tokenid = await db.tokens.Insert(payload.userid);
    payload.accesstokenid = tokenid.insertId;
    payload.unique = crypto.randomBytes(32).toString('hex');
    let token = jwt.sign(payload.accesstokenid, cfg.auth.secret);
    await db.tokens.Update(payload.accesstokenid, token);
    return token;
} 

export const ValidateToken = async (token : string) => {
    let payload: IPayload = <IPayload>jwt.decode(token);
    let [accesstokenid] = await db.tokens.findOne(payload.accesstokenid, token);
    if (!accesstokenid) {
        throw new Error('Invalid Token!');
    } else {
        return payload;
    }
}

export interface IPayload {
    [key: string]: any;
    userid: number;
    unique?: string;
}