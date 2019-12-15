import * as express from 'express';
import apiRouter from './routes';
import * as path from 'path'

const app = express();

app.use(express.static('public'));


app.use('/', (req, _resp, next) => {
    next();
});

app.use('/api', apiRouter);

app.use('*', (req, resp, next) => {
    console.log(path.join(__dirname, '../public/index.html'));
    console.log(req.url);
    resp.sendFile(path.join(__dirname, '../public/index.html'));
   
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
