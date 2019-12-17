import * as express from 'express';
import db from './db'

let chirpsRouter = express.Router();


chirpsRouter.use('/', (req, resp, next) => {
    next();
});

chirpsRouter.get('/:id?', (req, resp) => {
    if (req.params.id) {
        db.Chirps.one(Number(req.params.id))
        .then(chirp => resp.json(chirp))
        .catch(() => {
            resp.sendStatus(500);
        });
    } else {
        db.Chirps.all()
        .then(chirps => resp.json(chirps))
        .catch(() => {
            resp.sendStatus(500);
        });
    }
});

chirpsRouter.post('/', (req, resp) => {
   
    db.Chirps.insertOne(req.body.author, req.body.message)
    .then(id => {
        resp.status(200).json(id);
    })
    .catch(() => {
        resp.sendStatus(500);
    });
});

chirpsRouter.delete('/:id', (req, resp) => {

    db.Chirps.deleteOne(Number(req.params.id))
    .then(() => {
        resp.sendStatus(200);
    })
    .catch(() => {
        resp.sendStatus(500);
    });
});

chirpsRouter.put('/:id', (req, resp) => {

    db.Chirps.updateOne(Number(req.params.id), req.body.author, req.body.message)
    .then(() => {
        resp.sendStatus(200);
    })
    .catch(() => {
        resp.sendStatus(500);
    });
});

export default chirpsRouter;