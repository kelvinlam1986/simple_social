import config from './../config/config';
import app from './express';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
console.log(`mongoUri ${config.mongoUri}`);
mongoose.connect(config.mongoUri, { useNewUrlParser: true });
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database ${config.mongoUri}`)
});

console.log('config port', config.port);
app.listen(config.port, (err) => {
    if (err) {
        console.log(err);
    }

    console.info('Server started on port %s', config.port);
});