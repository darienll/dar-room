import express from 'express';
import UsersController from './controllers/users.controller';
const app = express();
app.all("/*", function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'),
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS'),
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-length, X-Requested-With');
    next();
})


app.set('port', process.env.PORT || 3000)

app.use(express.json());

app.use('/users', (new UsersController()).initRoutes());

app.get('/', (req, res) => {
    res.send('Hello world');
});

export default app;