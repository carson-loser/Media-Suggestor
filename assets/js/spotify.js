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

function buildAjaxURL(search, type, limit) {
	let url = "https://spotify81.p.rapidapi.com/search?q=" + search + "&type=" + type + "&offset=0&limit=" + limit + "&numberOfTopResults=5";
	return url;
}

// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://spotify81.p.rapidapi.com/search?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "58a8c3cfa1msh3972fdcf7022113p1dd750jsnc29b7d4ad22e",
// 		"X-RapidAPI-Host": "spotify81.p.rapidapi.com"
// 	}
// };


// $.ajax(settingsSPOT).done(function (response) {
// 	console.log(response);
// });

function spotifySearchItUp() {
	spotifyHomePage.style.display = "none";
	spotifySearchPage.style.display = "block";
	displaySpotifySearch();
}
var moodOptions = ['Stay In Bed', 'Sad Boy Hours', 'You & Me', 'All the Feels'];

function populateMoodDropdown() {
	var moodContainer = $('#moodOptions');
	$.each(moodOptions, function (i, val) {
		$(moodContainer).append('<option value=' + i + '>' + val + '</option>');

	});
}
// $(".dropdown-trigger").dropdown();


$(document).ready(function () {
	populateMoodDropdown();
	$('select').formSelect();
});

$('#searchBTN').on("click", function () {
	var selectedData = $("#moodOptions").val();
	var procText = "";
	var allData=[];
	// var selectedData= instance.getSelectedValues("#moodOptions");
	$.each(selectedData, function (i, val) {
		var moodText = moodOptions[parseInt(val)];
		var removeSpace= moodText.replace(/ /g,"%20");
		var url= buildAjaxURL(removeSpace, 'playlists',10);
		var settings = {
			"async": false,
			"crossDomain": true,
			"url": url,
			"method": "GET",
			"headers": {
				"X-RapidAPI-Key": "58a8c3cfa1msh3972fdcf7022113p1dd750jsnc29b7d4ad22e",
				"X-RapidAPI-Host": "spotify81.p.rapidapi.com"
			}
		};
	
		$.ajax(settings).done(function (response) {
			allData.push(response);
		});
		
	});
	

	//all parametsr poplated
	console.log(allData);
	
});


// var searchTerm= document.querySelector(".dropdown-content")
