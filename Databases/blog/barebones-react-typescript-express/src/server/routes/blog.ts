import * as express from 'express'
import db from '../db';

let blogRouter = express.Router();

blogRouter.use('/', async (req, resp, next) => {
    try {
        let allBlogs = await db.blog.All();
        resp.status(200).json(allBlogs);
    } catch (error) {
        console.log(error);
        resp.sendStatus(500);
    } finally {
        next();
    }
});


export default blogRouter; 