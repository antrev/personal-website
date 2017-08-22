$( document ).ready(function() {
    console.log( "You are a Developer of some kind arent you!!" );

//////// Background images ////////
// $.get(
// 	"https://api.unsplash.com/photos/random/?client_id=e823cd6c4a141d7f5c000be889fb7fd4e1887cb05d0746e9f6dbd17a7d412d29",
// 	(data) => {
// 		$('.hire').css({
// 			'background': `url(${data.urls.regular}) no-repeat center`,'background-size': 'cover'
// 		});
// 		$('.job').css({
// 			'background': `url(${data.urls.regular}) no-repeat center`,'background-size': 'cover'
// 		});
// 	}
// );


///////// RANDOM QOUTE GENERATOR //////////

// $.get("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
// 	(data) => {
//   $('.hire').html(`(#{data[0].content}) <p> (#{data[0].title) </p>}`)
// });


///// Nav bar effects ///////


// $('a').addClass('animated bounce');

$(".contact").hover(() => {
    $(this).addClass('animated bounce');
  }, 
   () => {
    $(this).removeClass('animated bounce');
  }
  );










});