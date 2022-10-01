// var searchTermYT = function (event) {
//   var language = event.target.getAttribute('data-language');
//   if (language) {
//     getFeaturedRepos(language);
//     repoContainerEl.textContent = '';
//   }
// };


// var searchTermYT = function() {
//   var searchTermEl= document.querySelector('.youtubeDropdown').children()


// };
var searchTerm = "Podcast"



const settingsYT = {
	"async": true,
	"crossDomain": true,
	"url": "https://yt-api.p.rapidapi.com/playlist?id=PLMC9KNkIncKseYxDN2niH6glGRWKsLtde",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "58a8c3cfa1msh3972fdcf7022113p1dd750jsnc29b7d4ad22e",
		"X-RapidAPI-Host": "yt-api.p.rapidapi.com"
	}
};

$.ajax(settingsYT).done(function (response) {
	console.log(response);
});



function youtubeSearchItUp (){
	youtubeHomePage.style.display = "none";
	youtubeSearchPage.style.display="block";
	displayYoutubeSearch()
}

$(".dropdown-trigger").dropdown();