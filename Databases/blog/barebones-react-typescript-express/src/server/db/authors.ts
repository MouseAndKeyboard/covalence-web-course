import { Query, Command } from './index';

const findOneByEmail = async (email: string) => Query("SELECT * FROM Authors WHERE email = ?;", [email]); 
const findOneByID = async (id: number) => Query("SELECT * FROM Authors WHERE id = ?;", [id]); 

export default {
    findOneByEmail,
    findOneByID
}