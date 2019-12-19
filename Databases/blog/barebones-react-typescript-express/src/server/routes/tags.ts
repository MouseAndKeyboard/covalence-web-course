import * as express from 'express'
import db from '../db';

let tagsRouter = express.Router();

tagsRouter.get('/', async (req, resp) => {
    try {
        let allTags = await db.tag.All();
        resp.status(200).json(allTags);
    } catch (error) {
        console.log(error);
        resp.sendStatus(500);
    }
})

export default tagsRouter;