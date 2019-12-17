import { Query } from './index';

const all = async () => Query('SELECT * FROM Author');
const one = async (id: number) => Query('SELECT * FROM Author WHERE id = ?;', [id])
const insertOne = async (name: string) => {
    return Query("INSERT INTO Author(name) VALUES (?);", [name]);
}
const deleteOne = async (userid: number) => {
    return Query("DELETE FROM Author WHERE id = ?;", [userid]);
}
const updateOne = async (userid: number, name: string) => {
    return Query("UPDATE Chirps SET name=? WHERE id=?;", [name, userid]);
}

export default {
    all,
    one,
    insertOne,
    deleteOne,
    updateOne
}