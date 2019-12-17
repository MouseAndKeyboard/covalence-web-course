import { Query } from './index';

const allChirps = async () => Query('SELECT * FROM Chirps');
const oneChirp = async (id: number) => Query('SELECT * FROM Chirps WHERE id = ?;', [id])
const insertOneChirp = async (userid: number, text: string) => {
    return Query("INSERT INTO Chirps(authorid, message) VALUES (?, ?); LAST_INSERT_ID();", [userid, text]);
}
const deleteOneChirp = async (chirpid: number) => {
    return Query("DELETE FROM Chirps WHERE id = ?;", [chirpid]);
}
const updateOneChirp = async (chirpid: number, userid: number, text: string) => {
    return Query("UPDATE Chirps SET id=?, authorid=?, message=?", [chirpid, userid, text]);
}

export default {
    allChirps,
    oneChirp,
    insertOneChirp,
    deleteOneChirp,
    updateOneChirp
}