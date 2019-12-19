import { Command, Query } from './index'

const All = async () => Query("SELECT * FROM Tags;");
const Insert = async (name: string) => Command("INSERT INTO Tags(name) VALUES (?)", [name]);
const AddTag = async (postId: number, tagId: number) => Command("INSERT INTO BlogTags(blogid, tagid) VALUES (?, ?)", [postId, tagId]);
const ClearTags = async (postId: number) => Command("DELETE FROM BlogTags WHERE blogid = ?", [postId]);
const GetTags = async (postId: number) => Query("CALL spBlogTags(?);", [postId]);
export default {
    Insert,
    AddTag, 
    ClearTags,
    GetTags,
    All
}