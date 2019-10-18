import 'core-js/stable';
import 'regenerator-runtime/runtime';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import appRoot from 'app-root-path';
import userRoute from './routes/user.route';
import teamRoute from './routes/team.route';
import fixtureRoute from './routes/fixture.route';
import connectionManager from './database/db.manager';
import keys from './utils/config';

const { port } = keys;
const app = express();
const apiVersion = '/api/v1';

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(`${apiVersion}/users`, userRoute);
app.use(`${apiVersion}/teams`, teamRoute);
app.use(`${apiVersion}/fixtures`, fixtureRoute);

if (process.env.NODE_ENV === 'test') {
    connectionManager.stop();
} else {
    connectionManager.start();
}


app.get('/', (req, res) =>  {
    res.sendFile(`${appRoot}/client/index.html`)
});


app.get('/api/v1', (req, res) =>  {
    res.sendFile(`${appRoot}/client/index.html`)
});

app.use((err, req, res, next) => {
    if (err instanceof URIError) {
        return res.status(400).json({
            status: 400,
            error: `Failed to decode param: ${req.url}`,
        });
    }
    return next();
});
app.use('*', (req, res) => {
    res.status(404).json({
        status: 404,
        error: 'url not found',
    });
});

app.listen(port, () => console.info(`Application running on port ${port}`));

export default app;
