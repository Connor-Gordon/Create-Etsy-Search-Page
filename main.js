



let elements = document.querySelector('#templateDiv')

// I need to get a result from results, and for each of them get the title

items.results.forEach(function(result){
	let	searchTemplate = 
	`<div class="templateDiv">
		<ul class="templateList">
			<li><h5 class="templateimg"> ${result.Images[unescape(14)]}</h5></li>
			<li><h5 class="templateTitle"> ${result.title}</h5></li>
			<li><h5 class="templateSeller"> ${result.Shop.shop_name}</h5></li>
			<li><h5 class="templatePrice"> ${result.price}</h5></li>
		</ul>		
	</div>`

elements.innerHTML += searchTemplate
})



