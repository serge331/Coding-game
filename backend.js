//const axios = require('axios');

let url = 'https://jsonplaceholder.typicode.com/'

var albums


async function afficher_albums (){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   axios.get(url + "albums")
    .then(function (response) {

        albums = response.data

        //console.log(albums)

        albums.forEach(element => {
            //console.log(element.title)
            $("#main").append($("<p class='album'>" +  element.title + "</p>"))
        });

        // ----- album CSS ----- //

        $(".album").css("background-color" , "white")
        $(".album").css("height", "50px")
        $(".album").css("border-radius", "10px")
        $(".album").css("padding", "10px")
        $(".album").css("margin", "10px")
        $(".album").css("text-align", "center")
        $(".album").css("flex", "50%")

        // ----- album CSS ----- //
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
    });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    axios.get(url + "photos")
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
    });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
}

afficher_albums()