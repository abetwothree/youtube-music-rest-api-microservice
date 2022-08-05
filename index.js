// importing the dependencies
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const root = require('rootrequire');
const YTMusicAPI = require(root+'/helpers/yt_api');
const yt_api = new YTMusicAPI();

// function to initialize the yt_api on every api request
async function init_api(req, res, next){
    await yt_api.init();
    next();
};

// defining the Express app
const app = express();

// call on every request to keep the yt_api fresh
app.use(init_api);

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));


// Routes
app.get('/', async (req, res) => {
    res.send('Hello World!');
});

app.get('/search', async (req, res) => {
    const results = await yt_api.search(req);
    res.send(results);
});

app.get('/song/:id', async (req, res) => {
    const results = await yt_api.getSong(req);
    res.send(results);
});

app.get('/album/:id', async (req, res) => {
    const results = await yt_api.getAlbum(req);
    res.send(results);
});

app.get('/playlist/:id', async (req, res) => {
    const results = await yt_api.getPlaylist(req);
    res.send(results);
});

app.get('/artist/:id', async (req, res) => {
    const results = await yt_api.getArtist(req);
    res.send(results);
});

// starting the server
app.listen(process.env.APP_PORT, () => {
    console.log('listening on port ' + process.env.APP_PORT);
});