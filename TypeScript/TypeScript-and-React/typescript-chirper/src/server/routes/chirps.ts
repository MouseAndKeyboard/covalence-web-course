import express from 'express';
import store, {IChirp} from '../chirpstore';

let chirpsRouter = express.Router();

chirpsRouter.get('/:id?', (req, resp) => {
    if (req.params.id) {
        let chirp = store.GetChirp(Number(req.params.id));
        resp.json(chirp);
    } else {
        let chirps = store.GetChirps();
        resp.json(chirps);
    }
});

chirpsRouter.post('/', (req, resp) => {
    let id = store.GetChirps().nextid;
    store.CreateChirp({
        author: req.body.author,
        message: req.body.message
    });

    resp.status(200).json(id);
});

chirpsRouter.delete('/:id', (req, resp) => {
    store.DeleteChirp(
        Number(req.params.id)
    );

    resp.sendStatus(200);
});

chirpsRouter.put('/:id', (req, resp) => {
    store.UpdateChirp(
        Number(req.params.id),
        {
            author: req.body.author,
            message: req.body.message
        }
    );

    resp.sendStatus(200);
});

module.exports = chirpsRouter;