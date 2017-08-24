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

//     $('.nav').click(function(){
//     $(this).find('.modal-background').toggleClass('modal-active');
// })

    $('.nav').click(function(){
    var info = $(this).attr('id');
    console.log(this)
    $('.modal-container').removeAttr('class').toggleClass(info);
    $('.nav').toggleClass('modal-active');
    })

    $('.modal-container').click(function(){
    $(this).toggleClass('out');
    console.log(this)
    $('.nav').removeClass('modal-active');
    });

    //////// BACKGROUND IMAGES ////////

    $('#refresh').click(() => {
    location.reload();
    });

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
 
//     var government = document.getElementById( "loc")
//  function getLocation() {
//     console.log(government)
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else { 
//         government.html = "You are scared of the government are you?"
//     }
// }
//     var lat, lon;
// function showPosition(position) {
//     lat =  position.coords.latitude;
//     lon = position.coords.longitude;

//     $.get( "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=ed905a0d5167c428dd2bc4f5729121d0", 
//         ( data ) => {
//          $( ".weather" ).append(`<p id='loc'>${data.name}</p>`)
//          $( ".weather" ).append("<p id='weather'>" + data.weather[0].description+ "</p>")
//     }
// );
// }
// getLocation();

    










});