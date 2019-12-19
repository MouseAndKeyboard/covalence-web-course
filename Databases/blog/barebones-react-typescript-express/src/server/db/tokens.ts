import { Query, Command } from './index';

const findOne = async (id: number, token: string) => Query("SELECT * FROM Tokens WHERE id = ? AND token = ?;", [id, token]); 

const Insert = async (authorid: number) => Command("INSERT INTO Tokens(authorid) VALUES(?);", [authorid]);
const Update = async (tokenid: number, token: string) => Command("UPDATE Tokens SET token = ? WHERE id = ?;", [ token, tokenid]);

export default {
    findOne,
    Insert,
    Update
}