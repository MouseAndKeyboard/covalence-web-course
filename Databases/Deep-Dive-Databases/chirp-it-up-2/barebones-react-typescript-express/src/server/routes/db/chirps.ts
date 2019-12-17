import { Query } from './index';

const all = async () => Query('SELECT * FROM Chirps');
const one = async (id: number) => Query('SELECT * FROM Chirps WHERE id = ?;', [id])
const insertOne = async (userid: number, text: string) => {
    return Query("INSERT INTO Chirps(authorid, message) VALUES (?, ?);", [userid, text]);
}
const deleteOne = async (chirpid: number) => {
    return Query("DELETE FROM Chirps WHERE id = ?;", [chirpid]);
}
const updateOne = async (chirpid: number, userid: number, text: string) => {
    return Query("UPDATE Chirps SET authorid=?, message=? WHERE id=?;", [userid, text, chirpid]);
}

export default {
    all,
    one,
    insertOne,
    deleteOne,
    updateOne
}