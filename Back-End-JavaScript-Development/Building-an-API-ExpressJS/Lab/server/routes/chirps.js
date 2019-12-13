const express = require('express');
const store = require('../chirpstore');

let chirpsRouter = express.Router();


chirpsRouter.get('/:id?', (req, resp) => {
    if (req.params.id) {
        let chirp = store.GetChirp(req.params.id);
        resp.json(chirp);
    } else {
        let chirps = store.GetChirps();
        resp.json(chirps);
    }
});

chirpsRouter.post('/', (req, resp) => {
    store.CreateChirp({
        author: req.body.author,
        message: req.body.message
    });

    resp.status(200);
});

chirpsRouter.delete('/:id', (req, resp) => {
    store.DeleteChirp(
        req.params.id
    );

    resp.status(200);
});

chirpsRouter.put('/:id', (req, resp) => {
    store.UpdateChirp(
        req.params.id,
        {
            author: req.body.author,
            message: req.body.message
        }
    );

    resp.status(200);
});

module.exports = chirpsRouter;