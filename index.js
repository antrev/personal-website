$(document).ready(function() {
    console.log("You are a Developer of some kind arent you!!");


    //////////// CONTACT ME /////////////

    $('#email').hover(function() {
            $('#email').toggleClass("animated bounce");
        },
        () => {
            $('#email').removeClass("animated bounce");
        }
    );


    $('#github').hover(() => {
            $('#github').addClass("animated bounce");
        },
        () => {
            $('#github').removeClass("animated bounce");
        }
    );

    $('#linkedin').hover(() => {
            $('#linkedin').addClass("animated bounce");
        },
        () => {
            $('#linkedin').removeClass("animated bounce");
        }
    );



    ////// BUTTON TO SITES ENTRANCE ///////

    


    ///// NAV BAR EFFECTS ///////

     //  $('.nav').hover(function(){
     //  $(this).toggleClass('animate bounce');
     // })
      


    /////// MODAL EFFECT ////////

    $('.nav').click(function(){
    $(this).find('.modal-container').toggleClass('modal-active');
    console.log(this)
})

// $('.nav').click(function(){
//   var navId = $(this).attr('class');
//   $('.modal-container').removeAttr('class').toggleClass(navId);
//   $('.modal-background').toggleClass('modal-active');
// })

// $('#modal-container').click(function(){
//   $(this).toggleClass('out');
//   $('.modal').removeClass('modal-active');
// });

    //////// BACKGROUND IMAGES ////////

    // $('#refresh').click(() => {
    // location.reload();
    // });

    // $.get(
    //  "https://api.unsplash.com/photos/random/?client_id=e823cd6c4a141d7f5c000be889fb7fd4e1887cb05d0746e9f6dbd17a7d412d29",
    //  (data) => {
    //      $('.hire').css({
    //          'background': `url(${data.urls.regular}) no-repeat center`,'background-size': 'cover'
    //      });
    //      $('.job').css({
    //          'background': `url(${data.urls.regular}) no-repeat center`,'background-size': 'cover'
    //      });
    //  }
    // );

    ///////// RANDOM QOUTE GENERATOR //////////

    // $.get("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback",
    //  (data) => {
    //   $('.hire').html(`${data[0].content} <p> ${data[0].title </p>}`)
    // });

    /////// WEATHER APP /////////
 
// var government = document.getElementsByClassName("weather");

//  function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else { 
//         government.HTML = "Geolocation is not supported by this browser.";

//     }
// }
//     var lat, lon;
    
// function showPosition(position) {
//     lat =  position.coords.latitude;
//     lon = position.coords.longitude;

//     $.get( "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=Imperial&appid=ed905a0d5167c428dd2bc4f5729121d0", 
//         ( data ) => {
//          $( ".weather" ).append(`<p id='loc'>${data.name}</p>`)
//          $( ".weather" ).append("<span id='weather'>" + data.weather[0].description+ "</span>")
//          $( ".weather" ).append("<span id='temp'>" + data.main.temp+ "</span>")
//     }
// );
// }
// getLocation();









});