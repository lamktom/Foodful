fatsecret.variables.navOptions = fatsecret.navFeatures.home | fatsecret.navFeatures.diet_calendar;
fatsecret.setContainer("my_container");
fatsecret.setCanvas("home");

// consts for endpoints keys
const YUMMLY_URL = "https://api.yummly.com/v1/api/recipes"; 
const FATSECRET_URL = "https://platform.fatsecret.com/"; 

const y_app_id = "23406cce"
const y_key = "edfd201c5bce9ccf028432345e2e7e23";

//get data from api 
function getApiData(searchTerm, callback) {
	const settings = {
		url: YUMMLY_URL, 
		data: {
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
 
//render results from api 
function renderResult(result) {
	return `
		<div class='col-4' class='recipebox'>
			<div class="relative-parent">
			<a id='target'></a>
				<a href="https://www.yummly.com/recipe/${result.id}" class="absolute-child" target='_blank'>
					<img class="js-image" src="${result.smallImageUrls}" alt="Recipe Thumbnail"/>
					<span class='rname'>${result.recipeName}</span>		
				</a>
			</div>
		</div> 
  	`; 
}

//show recipes 
function displayRecipes(data) {
  const results = data.matches.map(m => renderResult(m));
  $('.js-search-results').html(results);

  if (results.length === 0) {
  	alert("Looks like the ingredient(s) you entered didn't return any recipes. How about trying some different ones?");
  }
}

// when user enters ingredients and clicks submit 
function watchSubmit() {
	$(".js-search-form").submit(event => {
		event.preventDefault(); 

		const queryTarget = $(event.currentTarget).find('.js-query');
		const query = queryTarget.val();  

		// clear out input 
		queryTarget.val(""); 
		getApiData(query, displayRecipes); 
	});
}

$(watchSubmit); 