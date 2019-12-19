import { Query, Command } from './index';

const findOneByEmail = async (email: string) => Query("SELECT * FROM Authors WHERE email = ? LIMIT 1;", [email]); 
const findOneByID = async (id: number) => Query("SELECT * FROM Authors WHERE id = ? LIMIT 1;", [id]); 

export default {
    findOneByEmail,
    findOneByID
}