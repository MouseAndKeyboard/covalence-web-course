import * as express from 'express';
import * as passport from 'passport';
import * as path from 'path';

import './middleware/localstrategy';
import './middleware/bearerstrategy';

import router from './routes/'


const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use(passport.initialize());

app.use('/', router);

app.use('*', (req, resp, next) => {
    resp.sendFile(path.join(__dirname, '../public/index.html'));
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
