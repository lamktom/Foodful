

// consts for keys, endpoints
const FOOD2FORK_URL = "http://food2fork.com/api/search"; 
const FATSECRET_url = "https://platform.fatsecret.com/"; 

const f2f_key = "2e51c7a2be396263cadc671eb7de55d1";
const fs_key = "69d01778942a4e9ca437e7d97444f98f"; 

//get data from api 
function getApiData(searchTerm, callback) {
	const settings = {
		url: FOOD2FORK_URL, 
		data: {
			part: ,
			key: f2f_key, 
			q: searchTerm 
		}, 
		dataType: 'json', 
		type: 'GET',
		success: callback
	};
	$.ajax(settings); 
}


//show recipes 
function displayRecipes(data) {

}


// when user enters ingredients and clicks submit 
function watchSubmit() {
	$("js-search-form").submit(event => {
		event.preventDefault(); 

		const queryTarget = $(event.currentTarget).find('.js-query');
		const query = queryTarget.val();  
		
		// clear out input 
		queryTarget.val(""); 
		getApiData(query, displayRecipes); 
	});
}


// show results 
function renderResult(result) {
	return `
		<div>

		</div> 
	`; 
}













