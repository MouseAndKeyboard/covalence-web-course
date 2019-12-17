import { Query } from './index';

// const all = async () => Query('SELECT c.id, c.authorid, c.message, c._created, a.name as author FROM Chirps c JOIN Author a on c.authorid = a.id');
const mentionsFor = async (id: number) => Query('CALL spUserMentions(?);', [id])
const insertOne = async (chirpid: number, authorid: number) => {
    return Query("INSERT INTO Mentions(chirpid, authorid) VALUES (?, ?);", [chirpid, authorid]);
}
const deleteOne = async (chirpid: number) => {
    return Query("DELETE FROM Chirps WHERE id = ?;", [chirpid]);
}
// const updateOne = async (chirpid: number, text: string) => {
//     return Query("UPDATE Chirps SET message=? WHERE id=?;", [text, chirpid]);
// }

export default {
    insertOne,
    deleteOne
}