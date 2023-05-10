const express = require('express');

const app = express();
const PORT = 5000;


app.use(express.static('server/public'));


const artistListArray = require('./modules/artist')
const songListArray = require('./modules/song')
const albumListArray = require('./modules/album')


app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

// TODO - Add GET for songs

app.get('/song', (req, res) => {
    res.send(songListArray);
});

app.get('/album', (req, res) => {
    res.send(albumListArray);
});

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

