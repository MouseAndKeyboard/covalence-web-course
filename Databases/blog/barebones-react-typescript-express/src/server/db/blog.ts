import { Query, Command } from './index';

const All = async () => Query("SELECT * FROM Blogs");
const One = async (blogId: number) => Query("SELECT * FROM Blogs WHERE id = ?", [blogId]);
const Insert = async (title: string, content: string, authorid: number) => Command("INSERT INTO Blogs(title, content, authorid) VALUES (?, ?, ?)", [title, content, authorid]);
const Update = async (blogId: number, title: string, content: string, authorid: number) => Command("UPDATE Blogs SET title=?, content=?, authorid=? WHERE id = ?", [title, content, authorid, blogId]);
const Delete = async (blogId: number) => Command("DELETE FROM Blogs WHERE id = ?", [blogId]);
export default {
    All,
    One,
    Insert,
    Update,
    Delete
}