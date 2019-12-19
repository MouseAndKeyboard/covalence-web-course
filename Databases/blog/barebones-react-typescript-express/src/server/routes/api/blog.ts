import * as express from 'express'
import db from '../../db';

let blogRouter = express.Router();

const isAdmin : express.RequestHandler = (req: any, res, next) => {
    console.log(req.user);
    
    if (!req.user || req.user.role !== 'admin'){
        return res.sendStatus(401);
    } else {
        return next();
    }
} 

blogRouter.get('/', async (req, resp) => {
    try {
        let allBlogs = await db.blog.All();
        resp.status(200).json(allBlogs);
    } catch (error) {
        console.log(error);
        resp.sendStatus(500);
    }
});


blogRouter.get('/:id/tags', async (req, resp) => {
    try {
        let blogId = Number(req.params.id);
        let tags = (await db.tag.GetTags(blogId))[0];
        resp.status(200).json(tags);
    } catch (error) {
        console.log(error);
        resp.sendStatus(500);
    }
});

blogRouter.get('/:id', isAdmin, async (req, resp) => {
    try {
        let blog = await db.blog.One(Number(req.params.id));
        resp.status(200).json(blog[0]);
    } catch (error) {
        console.log(error);
        resp.sendStatus(500);
    }
});

interface blogPost {
    title: string,
    content: string,
    author: number
    tags: Array<number>
}

blogRouter.post('/', async (req, resp) => {
    try {
        let post: blogPost = req.body;
        post.author = 1;
        let dbData = await db.blog.Insert(post.title, post.content, post.author);
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
        await db.blog.Update(blogId, post.title, post.content, post.author);
        // await db.tag.ClearTags(blogId);
        // post.tags.forEach(tagId => {            
        //     db.tag.AddTag(blogId, tagId);
        // })

        resp.status(200).json(blogId);
    } catch (error) {
        console.log(error);
        resp.sendStatus(500);
    }
});

blogRouter.delete('/:id', async (req, resp) => {
    try {
        let blogId = Number(req.params.id);
        await db.tag.ClearTags(blogId);
        await db.blog.Delete(blogId);
        resp.status(200).json(blogId);
    } catch (error) {
        console.log(error);
        resp.sendStatus(500);
    }
});

export default blogRouter; 