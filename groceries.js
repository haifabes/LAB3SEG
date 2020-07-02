// all images are from https://www.flaticon.com/ 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99,
		category: "Vegetables",
		image: "brocoli.svg"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
		category: "Grains,
		image: "bread.svg"
		
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00,
		category: "Seafood",
		image: "salmon.svg"
	},
	{
		name: "organic eggs",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 3.,
		category: "Poultry & Eggs",
		image: "eggs.svg"
	},
	{
		name: "organic bananas",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 2.09,
		category: "Fruits",
		image: "banana.svg"
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 6.25,
		category: "Meat",
		image: "steak.svg"
	},	
	{
		name: "meat pie",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 8.35,
		category:"Other",
		image: "meatpie.svg"
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.19,
		category: "Dairy",
		image: "milk.svg"
	},
	{
		name: "organic fruit juice",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.25,
		category: "Beverages",
		image: "juice.svg"
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 7.23,
		category: "Poultry & Eggs",
		image: "chicken.svg"
	},
	{
		name: "organic flour",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 7.99,
		category: "Grains",
		image: "flour.svg"
	},
	
	
];
	


function comparePrice(p1,p2){
	if (p1[1] === p2[1] ){
		return 0;
	}
	else {
		return (p1[1] < p2[1])? -1 : 1;
	}
}



function restrictListProducts(prods, restriction, category) {
	let product_names = [];
	
	for (let i=0; i<prods.length; i+=1) {
		if (prods[i].category == category){
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "organic") && (prods[i].organic == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "GV") && (prods[i].glutenFree == true) &&  (prods[i].vegetarian == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "GO") && (prods[i].glutenFree == true) &&  (prods[i].organic == true)){
				product_names.push(prods[i].name);
			}
			else if ((restriction == "VO") && (prods[i].vegetarian == true) &&  (prods[i].organic == true)){
				product_names.push(prods[i].name);
			}
			else if((restriction == "GVO") && (prods[i].organic == true) && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) ){
				product_names.push(prods[i].name);
			}
			else if (restriction == "None"){
				product_names.push(prods[i].name);
			}
		}
	}
	product_names.sort(comparePrice);
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}


/*
function restrictCategory(cat, restriction) {
	restricted = restrictListProducts(products, restriction); 
	let filtered =[]
	for (let i=0; i<filter.length; i+=1) {
			if ((cat== "Vegetables") && (restricted[i].category=="Vegetables")){
				 filtered.push(restricted[i]);
			}
			else if  ((cat== "Grains") && (restricted[i].category=="Grains")){
				 filtered.push(restricted[i]);
			}
			else if  ((cat== "Seafood") && (restricted[i].category=="Seafood")){
				 filtered.push(restricted[i]);
			}
			else if  ((cat== "Poultry & Eggs") && (restricted[i].category=="Poultry & Eggs")){
				 filtered.push(restricted[i]);
			}
			else if  ((cat== "Fruits") && (restricted[i].category=="Fruits")){
				 filtered.push(restricted[i]);
			}
			else if  ((cat== "Dairy") && (restricted[i].category=="Dairy")){
				filtered.push(restricted[i]);
			}
			else if  ((cat== "Beverages") && (restricted[i].category=="Beverages")){
				filtered.push(restricted[i]);
			}
			else if  ((cat== "Meat") && (restricted[i].category=="Meat")){
				filtered.push(restricted[i]);
			}
			else if  ((cat== "Other") && (restricted[i].category=="Other")){
				filtered.push(restricted[i]);
			}
			
			
		}
	filtered.sort(comparePrice);
	return  filtered;
}

*/

