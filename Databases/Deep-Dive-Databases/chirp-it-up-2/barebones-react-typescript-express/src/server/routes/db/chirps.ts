import { Query } from './index';

const all = async () => Query('SELECT c.id, c.authorid, c.message, c._created, a.name as author FROM Chirps c JOIN Author a on c.authorid = a.id');
const one = async (id: number) => Query('SELECT c.id, c.authorid, c.message, c._created, a.name as author FROM Chirps c JOIN Author a on c.authorid = a.id WHERE c.id = ?;', [id])
const insertOne = async (username: string, text: string) => {
    return Query("CALL spCreateMessage(?, ?);", [username, text]);
}
const deleteOne = async (chirpid: number) => {
    return Query("DELETE FROM Chirps WHERE id = ?;", [chirpid]);
}
const updateOne = async (chirpid: number, text: string) => {
    return Query("UPDATE Chirps SET message=? WHERE id=?;", [text, chirpid]);
}

export default {
    all,
    one,
    insertOne,
    deleteOne,
    updateOne
}