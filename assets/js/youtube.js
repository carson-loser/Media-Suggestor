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
var searchOptions = ['Podcast', 'Lo-fi Girl', 'You Laugh You Lose', 'Top 100 Music Videos', 'Bangers'];

function populateSearchOptionsDropdown() {
	var searchOptionsContainer = $('#searchOptions');
	$.each(searchOptions, function (i, val) {
		$(searchOptionsContainer).append('<option value=' + i + '>' + val + '</option>');

	});
}
$(document).ready(function () {
	populateSearchOptionsDropdown();
	$('select').formSelect();
});


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

// $.ajax(settingsYT).done(function (response) {
// 	console.log(response);
// });

function buildYoutubeURL(search, type) {
	let url = "https://yt-api.p.rapidapi.com/search?query=" + search + "&type=" + type;
	return url;
}

function youtubeSearchItUp() {
	youtubeHomePage.style.display = "none";
	youtubeSearchPage.style.display = "block";
	displayYoutubeSearch()
};
$('#searchBTN').on("click", function () {
	var selectedData = $("#searchOptions").val();
	var procText = "";
	var dataCollection=[];
	// var selectedData= instance.getSelectedValues("#moodOptions");
	$.each(selectedData, function (i, val) {
		var searchText = searchOptions[parseInt(val)];
		var removeSpace= searchText.replace(/ /g,"%20");
		var url= buildYoutubeURL(removeSpace, 'playlist');
		var settings = {
			"async": false,
			"crossDomain": true,
			"url": url,
			"method": "GET",
			"headers": {
				"X-RapidAPI-Key": "58a8c3cfa1msh3972fdcf7022113p1dd750jsnc29b7d4ad22e",
				"X-RapidAPI-Host": "yt-api.p.rapidapi.com"
			}
		};
	
		$.ajax(settings).done(function (response) {
			dataCollection.push(response);
		});
		// displayTable();
	});
	
	//console.log(dataCollection);
	populateTable(dataCollection);

	//all parametsr poplated
	
});


function populateTable(playlistValues){
	$("#playlistTableBody").empty();
	$.each(playlistValues, function(i,val){
		console.log(val);
		$.each(val.data,function(j,playlist){
			console.log(playlist);
			var imageUrl = ((playlist.thumbnail)[0]).url;
			var playlistURL="https://www.youtube.com/watch?v="+playlist.videoId;
			var html = `
			<tr class='playlistItem' data-uri="`+playlistURL+`">
			<td>`+playlist.title+`</td>
			<td>`+playlist.videoCount+`</td>
			<td><img src="`+imageUrl+`" width="114" height="64"></img></td>
			</tr>
			`;
			
			$("#playlistTableBody").append(html);

		});
		
	});
};
$(document).on("click", '.playlistItem', function () {
	console.log($(this))
	var playlistURI=$(this).data('uri');
	window.open(playlistURI, '_blank');
});