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

      $('.nav').hover(function(){
      $(this).toggleClass('animate bounce');
     })
      


    /////// MODAL EFFECT ////////

    $('.nav').click(function(){
    $(this).find('.modal-background').toggleClass('modal-active');
})


    //////// BACKGROUND IMAGES ////////

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

    // $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback",
    //  (data) => {
    //   $('.hire').html(`#{data[0].content} <p> #{data[0].title </p>}`)
    // });













});