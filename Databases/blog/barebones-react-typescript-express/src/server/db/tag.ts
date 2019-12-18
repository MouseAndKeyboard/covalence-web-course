import { Command } from './index'

const Insert = async (name: string) => Command("INSERT INTO Tags(name) VALUES (?)", [name]);
const AddTag = async (postId: number, tagId: number) => Command("INSERT INTO BlogTags(blogid, tagid) VALUES (?, ?)", [postId, tagId]);
const ClearTags = async (postId: number) => Command("DELETE * FROM BlogTags WHERE blogid = ?", [postId]);

export default {
    Insert,
    AddTag,
    ClearTags
}