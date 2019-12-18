import { Query } from './index';

// const all = async () => Query('SELECT c.id, c.authorid, c.message, c._created, a.name as author FROM Chirps c JOIN Author a on c.authorid = a.id');
const mentionsFor = async (id: number) => Query('SELECT c.id, c.message, c._created, a.name FROM Mentions m JOIN Chirps c ON c.id = m.chirpid JOIN Author a ON m.authorid = a.id WHERE m.authorid = ?;', [id])
const insertOne = async (chirpid: number, authorid: number) => {
    return Query("INSERT INTO Mentions(chirpid, authorid) VALUES (?, ?);", [chirpid, authorid]);
}
const insertOneByName = async (chirpid: number, authorName: string) => {
    return Query("INSERT IGNORE INTO Mentions(chirpid, authorid) VALUES (?, (SELECT a.id FROM Author a WHERE a.name = ?));", [chirpid, authorName]);
}
const deleteOne = async (chirpid: number) => {
    return Query("DELETE FROM Chirps WHERE id = ?;", [chirpid]);
}
// const updateOne = async (chirpid: number, text: string) => {
//     return Query("UPDATE Chirps SET message=? WHERE id=?;", [text, chirpid]);
// }

export default {
    insertOne,
    deleteOne,
    insertOneByName,
    mentionsFor
}