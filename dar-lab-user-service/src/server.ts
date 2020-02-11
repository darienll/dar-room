import app from "./app";
import {Sequelize} from 'sequelize-typescript';


/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    const sequelize = new Sequelize({
        database: 'darynDB',
        username: 'daryn',
        password: 'Ya4icAKi',
        host: '217.182.72.53',
        dialect: 'mysql',
        models: [__dirname + '/models']
    });

    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .error((err: any) => {
            console.error('Unable to connect to the database:', err);
        });
    console.log("Press CTRL-C to stop\n");
});

export default server;