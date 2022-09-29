// var spotifyAPI = "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10";
// var youtubeAPI = "https://www.googleapis.com/youtube/v3";
// var dropdownMenu = document.querySelector('.dropdown-trigger'); 


// $(document).ready(function(){
//   $(dropdownMenu).formSelect();
// });
var searchTerm = "Rock";

const settingsSPOT = {
	"async": true,
	"crossDomain": true,
	"url": `https://spotify23.p.rapidapi.com/search/?q=%3C${searchTerm}%3E&type=multi&offset=0&limit=10&numberOfTopResults=5`,
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "e88899cff1mshe2370cf428284dap1855a0jsn65cf40418126",
		"X-RapidAPI-Host": "spotify23.p.rapidapi.com"
	}
};

$.ajax(settingsSPOT).done(function (response) {
	console.log(response);
});


const settingsYT = {
	"async": true,
	"crossDomain": true,
	"url": "https://youtube138.p.rapidapi.com/auto-complete/?q=musicvideos&hl=en&gl=US",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "e88899cff1mshe2370cf428284dap1855a0jsn65cf40418126",
		"X-RapidAPI-Host": "youtube138.p.rapidapi.com"
	}
};

$.ajax(settingsYT).done(function (response) {
	console.log(response);
});
$(".dropdown-trigger").dropdown();