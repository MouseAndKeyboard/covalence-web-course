import * as express from 'express';

import db from '../../db/'
import { HashPassword } from '../../utils/security/passwords';
import { CreateToken } from '../../utils/security/tokens';
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        let author = req.body;
        author.password = HashPassword(req.body.password);
        let result = await db.authors.insert(author.name, author.email, author.password);
        let token = await CreateToken({ userid: result.insertId });
        res.json({
            token,
            role: 'guest',
            userid: result.insertId
        });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;