import * as express from 'express';
import db from './db'
const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});


router.get('/api/users', async (req, resp) => {
    try {
        resp.json(await db.Blogs.all());
    } catch (e) {
        console.log(e);
        resp.sendStatus(500);
    }
});

router.get('/api/users/:id', async (req, resp) => {
    try {
        resp.json(   (await db.Blogs.one(Number(req.params.id)))[0]   );
    } catch (e) {
        console.log(e);
        resp.sendStatus(500);
    }
});


export default router;