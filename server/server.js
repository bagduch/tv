const express = require('express')
const axios = require('axios')
const cors = require('cors')
const mongoose = require('mongoose');
const movie = require("./model/movie.js");
const list = require("./model/list.js");
const search = require("./service/search.js");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({extended: true}))

//Set up default mongoose connection
var mongoDB = 'mongodb://movie:password@mongo/movie';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
//Get the default connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var CronJob = require('cron').CronJob;

var job = new CronJob('0 0 */1 * * *', function () {
    var url = "http://caiji.kuyun98.com/inc/s_feifeikkyun?s=plus-api-json-action-show-h-24"
    axios.get(url).then(r => {
        let items = r.data.data;
        for (var i = 0; i < items.length; i++) {
            movie.updateOne({vod_id: items[i].vod_id}, {$set: items[i]}, {upsert: true}).catch((err) => {
                console.log('Error: ' + err);
            })
        }

    })
})

job.start();



app.get('/list', (req, res) => {
    list.find({}).then(r => {
        res.send(r)
    })
});

app.get('/search', search.main);
app.get('/item', search.single);
app.get('/recent', search.recent)


app.listen(port);