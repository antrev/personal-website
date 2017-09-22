function setBackgroundImage() {
    if($('body').find('#landing').length !== 0){
        $('body').css('background-image','url("images/gradientbg.jpg")');
    } else{
        $.get(
            "https://api.unsplash.com/photos/random/?client_id=e823cd6c4a141d7f5c000be889fb7fd4e1887cb05d0746e9f6dbd17a7d412d29", (data) => {
                $('body').css({
                    'background': `url(${data.urls.regular}`});
            }
        );
    }
    
}

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else { 
//         government.HTML = "Geolocation is not supported by this browser.";
//     }
// }
    
    
// function showPosition(position) {
//     var lat, lon;

//     lat =  position.coords.latitude;
//     lon = position.coords.longitude;

//     $.get( "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=Imperial&appid=ed905a0d5167c428dd2bc4f5729121d0", 
//         ( data ) => {
//          $( ".weather" ).append(`<p id='loc'>${data.name}</p>`)
//          $( ".weather" ).append("<span id='weather'>" + data.weather[0].description+ "</span>")
//          $( ".weather" ).append("<span id='temp'>" + data.main.temp+ "</span>")

//     });

// }



function modalControll(){
    $('.navContainer ul li').click(function(){
        var listItem = $(this).attr('data-nav');
        var $findListItem = $('#'+listItem);

        if(!$findListItem.find('.modal-container').hasClass('modal-active')){
            console.log($findListItem)
            $('.modal-container').removeClass('modal-active');
            $findListItem.addClass('modal-active');
        }else{
            $findListItem.removeClass('modal-active');
        }
    })
}



$(document).ready(function() {
    console.log("You are a Developer of some kind arent you!!");


    // setBackgroundImage();

    // getLocation();

    modalControll();


//////// BACKGROUND IMAGES ////////

    $('#refresh').click(() => {
        setBackgroundImage();
    });

    //////////// CONTACT ME /////////////

    $('#email').hover(() => {
            $('#email').toggleClass("animated bounce");
        });
   
    $('#github').hover(() => {
            $('#github').toggleClass("animated bounce");
        });

    $('#linkedin').hover(() => {
            $('#linkedin').toggleClass("animated bounce");
        });
    

});