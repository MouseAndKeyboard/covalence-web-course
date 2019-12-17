import * as express from 'express';
import db from './db'

let usersRouter = express.Router();


usersRouter.use('/', (req, resp, next) => {
    next();
});

usersRouter.get('/:id?', (req, resp) => {
    if (req.params.id) {
        db.Users.one(Number(req.params.id))
        .then(user => resp.json(user))
        .catch(() => {
            resp.sendStatus(500);
        });
    } else {
        db.Users.all()
        .then(users => resp.json(users))
        .catch(() => {
            resp.sendStatus(500);
        });
    }
});

usersRouter.post('/', (req, resp) => {
   
    db.Users.insertOne(req.body.name)
    .then(id => {
        resp.status(200).json(id);
    })
    .catch(() => {
        resp.sendStatus(500);
    });
});

usersRouter.delete('/:id', (req, resp) => {

    db.Users.deleteOne(Number(req.params.id))
    .then(() => {
        resp.sendStatus(200);
    })
    .catch(() => {
        resp.sendStatus(500);
    });
});

usersRouter.put('/:id', (req, resp) => {

    db.Users.updateOne(Number(req.params.id), req.body.name)
    .then(() => {
        resp.sendStatus(200);
    })
    .catch(() => {
        resp.sendStatus(500);
    });
});

export default usersRouter;