import { Query, Command } from './index';

const findOne = async (id: number, token: string) => Query("SELECT * FROM Tokens WHERE id = ? AND token = ?;", [id, token]); 

const Insert = async (authorid: number, token: string, expires: string) => Command("INSERT INTO Tokens(authorid, token, expires) VALUES(?,?,?);", [authorid, token, expires]);
const Update = async (tokenid: number, authorid: number, token: string, expires: string) => Command("UPDATE Tokens SET authorid = ?, token = ?, expires = ? WHERE id = ?;", [authorid, token, expires, tokenid]);

export default {
    findOne,
    Insert,
    Update
}