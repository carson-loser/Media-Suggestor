const settingsSPOT = {
	"async": true,
	"crossDomain": true,
	"url": "https://spotify81.p.rapidapi.com/top_200_tracks",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "58a8c3cfa1msh3972fdcf7022113p1dd750jsnc29b7d4ad22e",
		"X-RapidAPI-Host": "spotify81.p.rapidapi.com"
	}
};



$.ajax(settingsSPOT).done(function (response) {
	console.log(response);
});

function spotifySearchItUp (){
	spotifyHomePage.style.display="none";
	spotifySearchPage.style.display="block";
	displaySpotifySearch();
}


$(".dropdown-trigger").dropdown();
