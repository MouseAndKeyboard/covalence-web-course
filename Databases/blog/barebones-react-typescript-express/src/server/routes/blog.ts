import * as express from 'express'
import db from '../db';

let blogRouter = express.Router();

blogRouter.get('/', async (req, resp) => {
    try {
        let allBlogs = await db.blog.All();
        resp.status(200).json(allBlogs);
    } catch (error) {
        console.log(error);
        resp.sendStatus(500);
    }
});

blogRouter.get('/:id', async (req, resp) => {
    try {
        let blog = await db.blog.One(Number(req.params.id));
        resp.status(200).json(blog);
    } catch (error) {
        console.log(error);
        resp.sendStatus(500);
    }
});

interface blogPost {
    title: string,
    body: string,
    author: number
    tags: Array<number>
}

blogRouter.post('/', async (req, resp) => {
    try {
        let post: blogPost = req.body;
        
        let dbData = await db.blog.Insert(post.title, post.body, post.author);
        let blogId = dbData.insertId;
        post.tags.forEach(tagId => {            
            db.tag.AddTag(blogId, tagId);
        })

        resp.status(200).json(dbData.insertId);
    } catch (error) {
        console.log(error);
        resp.sendStatus(500);
    }
});

blogRouter.put('/:id', async (req, resp) => {
    try {
        let post: blogPost = req.body;
        let blogId = Number(req.params.id);
        await db.blog.Update(blogId, post.title, post.body, post.author);
        await db.tag.ClearTags(blogId);
        post.tags.forEach(tagId => {            
            db.tag.AddTag(blogId, tagId);
        })

        resp.status(200).json(blogId);
    } catch (error) {
        console.log(error);
        resp.sendStatus(500);
    }
});


export default blogRouter; 