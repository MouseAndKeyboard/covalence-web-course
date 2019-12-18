import { Command } from './index'

const Insert = async (name: string) => Command("INSERT INTO Tags(name) VALUES (?)", [name]);
const AddTag = async (postId: number, tagId: number) => Command("INSERT INTO BlogTags(blogid, tagid) VALUES (?, ?)", [postId, tagId]);

export default {
    Insert,
    AddTag
}