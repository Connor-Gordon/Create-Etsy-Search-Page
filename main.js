

//let's set the variable "elements" to select the id templateDiv in html by looking in the document with query selector
//                                  (\has to be id btw/)

let elements = document.querySelector('#templateDiv')

// Loop through items.js and for each loop pull a single result from the array results, "result" essentially means items.results now

items.results.forEach(function(result){

	// let the variable "searchTemplate" equal our html template and for each ${}, get the corresponding value and fill it in
	// still dont know how to fix the url but w/o that issue the img would be ${result.Images[14]} or $(result.Images["url_570xN"])
	
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



// unescape ??? ${result.Images[unescape(14)]} or $(result.Images[14 or "url_570xN"])
