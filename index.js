

// consts for endpoints keys
const FOOD2FORK_URL = "http://food2fork.com/api/search"; 
const FATSECRET_URL = "https://platform.fatsecret.com/"; 

const f2f_key = "2e51c7a2be396263cadc671eb7de55d1";
const fs_key = "69d01778942a4e9ca437e7d97444f98f"; 

//get data from api 
function getApiData(searchTerm, callback) {
	const settings = {
		url: FOOD2FORK_URL, 
		data: {
			part: 'recipes',
			key: f2f_key, 
			q: searchTerm 
		}, 
		dataType: 'jsonp', 
		type: 'GET',
		success: callback
	};
	$.ajax(settings); 
}


function renderResult(result) {
	console.log(result);
	return `
		<div> 
			<a href="http://food2fork.com/view/${result.recipe_id}"><img class="js-image" src="${result.image_url}" alt="Recipe Thumbnail"></a>
		</div>
  	`; 
}

//show recipes 
function displayRecipes(data) {
	const results = data.items.map((item, index) => renderResult(item)); 
	$('.js-search-results').html(results); 
}


// when user enters ingredients and clicks submit 
function watchSubmit() {
	$(".js-search-form").submit(event => {
		event.preventDefault(); 

		const queryTarget = $(event.currentTarget).find('.js-query');
		const query = queryTarget.val();  
		console.log(query);
		// clear out input 
		queryTarget.val(""); 
		getApiData(query, displayRecipes); 
	});
}

$(watchSubmit); 










