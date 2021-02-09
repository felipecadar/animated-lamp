const mongoose = require('mongoose');

function connectDatabase(){
    const db = mongoose.connection;
    if (db.readyState == 0) {
        mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            console.log("Connected to MongoDB!!")
        });
    }
}

export default connectDatabase;
