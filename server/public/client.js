$(document).ready(onReady);

function onReady() {
    $.ajax({
        type: 'GET',
        url: '/artist' //get the artistListArray
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) { //run through the artist objects
            let artist = response[i]; //set a variable equal to the ith object of the array
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td> 
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);//appends a table row with the artist name, birth, and death information
        }
    });

    // TODO Add ajax request for /songs and display on DOM
    $.ajax({
        type: 'GET',
        url: '/song' //get the songListArray
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) { //run through the artist objects
            let song = response[i]; //set a variable equal to the ith object of the array
            $('#songTableBody').append(`
                <tr>
                    <td>${song.title}</td> 
                    <td>${song.artist}</td>
                </tr>
            `);//appends a table row with the artist name, birth, and death information
        }
    });

    $.ajax({
        type: 'GET',
        url: '/album' //get the songListArray
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) { //run through the artist objects
            let album = response[i]; //set a variable equal to the ith object of the array
            $('#albumTableBody').append(`
                <tr>
                    <td>${album.title}</td> 
                    <td>${album.year}</td>
                </tr>
            `);//appends a table row with the artist name, birth, and death information
        }
    });

}