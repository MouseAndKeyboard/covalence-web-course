import { Query, Command } from './index';

export interface IAuthor {
    id: number,
    name: string,
    email: string,
    password: string,
    role: string,
    _created: Date
} 

const findOneByEmail = async (email: string) => Query("SELECT * FROM Authors WHERE email = ? LIMIT 1;", [email]); 
const findOneByID = async (id: number) => Query("SELECT * FROM Authors WHERE id = ? LIMIT 1;", [id]); 

const insert = async (user: any) => Command(`INSERT INTO Authors (name, email, password) VALUES ?`, user);

export default {
    findOneByEmail,
    findOneByID,
    insert
}