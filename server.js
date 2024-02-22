const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mongodb = require('./data/database');
const usersRouter = require('./routes/users');

app.use('/contacts', usersRouter);

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Server is listening and running on port ${port}`);
        });
    }
});
