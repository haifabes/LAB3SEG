// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2, category) {
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	var optionArray = restrictListProducts (products, s1.value, category);
    for (let i = 0; i < optionArray.length; i++) {
			
			var img = document.createElement("img");
			img.src = optionArray[i][3];
			img.height = 150;
			img.width = 150;
			
			var productName = optionArray[i];
			
			var productPrice = optionArray[i][1];
			
			
			var label = document.createElement('label')
			label.htmlFor = productName.name;
			label.appendChild(document.createTextNode(productName.toString + " " + productPrice+"$"));
			
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			
			s2.appendChild(checkbox);
			s2.appendChild(label);
			s2.appendChild(img);
			
			
			s2.appendChild(document.createElement("br"));
	   }
		
			
	
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){

	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}


function applyFilters(){
	var category = document.getElementById("categorySelect").value;
	var x = document.getElementById('filter1');
	var slct1 = "None";	
	
	if(!x.checked && !y.checked && !z.checked){
		slct1 = "None";
	}else if(!x.checked && !y.checked && z.checked){
		slct1 = "Organic";
	}else if(!x.checked && y.checked && !z.checked){
		slct1 = "GlutenFree";
	}else if(!x.checked && y.checked && z.checked){
		slct1 = "GlutenFreeOrganic";
	}else if(x.checked && !y.checked && !z.checked){
		slct1 = "Vegetarian";
	}else if(x.checked && !y.checked && z.checked){
		slct1 = "VegetarianOrganic";
	}else if(x.checked && y.checked && !z.checked){
		slct1 = "VegetarianGlutenFree";
	}else if(x.checked && y.checked && z.checked){
		slct1 = "All";
	}
	populateListProductChoices(slct1, 'displayProduct', category);
}




/*

function getVegetables(slct2){
	var optionArray =[];
	var s1 = document.getElementById("dietSelect").value;
	var s2 = document.getElementById(slct2);

	var form = document.myForm

		for (var i = 1; i < form.length; i++) {
				var child = form.dietSelect[i];
				if (child.checked == true){
						console.log({child:child.value})
						optionArray = getCategory("Vegetables", child.value)
				}
		}
		console.log(optionArray);
	
	s2.innerHTML = "";
 

		for (let i = 0; i < optionArray.length; i++) {
			
			var image = document.createElement("img");
			image.src = optionArray[i][3];
			image.height = 150;
			image.width = 150;
			
			var productName = optionArray[i][0];
			
			var productPrice = optionArray[i][1];
			
			
			var labels = document.createElement('label')
			label.htmlFor = productName.name;
			label.appendChild(document.createTextNode(productName.toString + " " + productPrice+"$"));
			
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			
			s2.appendChild(checkbox);
			s2.appendChild(label);
			s2.appendChild(image);
			
			
			s2.appendChild(document.createElement("br"));
	   }
		
	
}

//https://stackoverflow.com/questions/8838648/onchange-event-handler-for-radio-button-input-type-radio-doesnt-work-as-one/8997289
var rad = document.myForm.dietSelect;
var prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        (prev) ? console.log({prev: prev.value}): null;
        if (this !== prev) {
            prev = this;
        }
        console.log({this:this.value})
        populateListProductChoices(this,'displayProduct')
    });
}*/