import { Query } from './index';

const all = async () => Query('SELECT * FROM Users');
const one = async (id: number) => Query('SELECT * FROM Users WHERE id = ?', [id])
const insertOne = async (userid: number, text: string, location: string) => {
    return Query("INSERT INTO Chirps(userid, text, location) VALUES (?, ?, ?)", [userid, text, location]);
}

export default {
    all,
    one,
    insertOne
}