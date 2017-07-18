$( document ).ready(function() {
    console.log( "ready!" );

// 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en'



//Background images
$.get(
	"https://api.unsplash.com/photos/random/?client_id=e823cd6c4a141d7f5c000be889fb7fd4e1887cb05d0746e9f6dbd17a7d412d29",
	(data) => {
		console.log(data.urls.regular)
		$('.hire').css({
			'background': `url(${data.urls.regular}) no-repeat center`,'background-size': 'cover'
		});
		$('.job').css({
			'background': `url(${data.urls.regular}) no-repeat center`,'background-size': 'cover'
		});
	}
);








});