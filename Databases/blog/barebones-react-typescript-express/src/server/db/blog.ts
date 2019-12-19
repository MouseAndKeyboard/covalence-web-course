import { Query, Command } from './index';

const All = async () => Query("SELECT Blogs.id, Blogs.title, Blogs._created, Authors.name as author FROM Blogs JOIN Authors ON Blogs.authorid = Authors.id;");
const One = async (blogId: number) => Query("SELECT * FROM Blogs JOIN Authors ON Blogs.authorid = Authors.id WHERE Blogs.id = ?", [blogId]);
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