import express from 'express';
import UsersController from './controllers/users.controller';
const app = express();

app.set('port', process.env.PORT || 3000)

app.use(express.json());

app.use('/users', (new UsersController()).initRoutes());

app.get('/', (req, res) => {
    res.send('Hello world');
});

export default app;