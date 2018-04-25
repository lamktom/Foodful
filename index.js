// fatsecret.setContainer("my_container");
// fatsecret.setCanvas("home");

// consts for endpoints keys
const YUMMLY_URL = "http://api.yummly.com/v1/api/recipes"; 
// const FATSECRET_URL = "https://platform.fatsecret.com/"; 

const y_app_id = "23406cce"
const y_key = "edfd201c5bce9ccf028432345e2e7e23";
// const fs_key = "69d01778942a4e9ca437e7d97444f98f"; 

//get data from api 
function getApiData(searchTerm, callback) {
	const settings = {
		url: YUMMLY_URL, 
		data: {
			// part: 'recipes',
			_app_key: y_key, 
			_app_id: y_app_id,
			requirePictures: true,  
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
			<a href="https://www.yummly.com/recipes/${result.id}"><img class="js-image" src="${result.smallImageUrls}" alt="Recipe Thumbnail"/></a>
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
		// console.log(query);
		// clear out input 
		queryTarget.val(""); 
		getApiData(query, displayRecipes); 
	});
}

$(watchSubmit); 










