

//let's set the variable "elements" to select the id templateDiv in html by looking in the document with query selector
//                                  (\has to be id i think/)

let elements = document.querySelector('#templateDiv')

// Loop through items.js and for each loop pull a single result from the array results, "result" essentially means items.results now

items.results.forEach(function(result){

	// let the variable "searchTemplate" equal our html template and for each ${}, get the corresponding value and fill it in
	
	let	searchTemplate = 
	`<div id="templateContainer">
		<ul class="templateList">
			<li><img class="templateImg" src="${unescape(result.Images[0].url_570xN)}"/></li>
			<li class="templateTitle"> ${result.title}</li>
			<li class="templateSeller"> ${result.Shop.shop_name}</li>
			<li class="templatePrice"> $${result.price}</li>
		</ul>		
	</div>`

// use the variable elements we set earlier and innerHTML to add the searchTemplate in place of the HTML

elements.innerHTML += searchTemplate
})


elements.addEventListener('mouseover', function(e){
	e.target.innerHTML

})
