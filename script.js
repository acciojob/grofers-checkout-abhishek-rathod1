const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let pricesList = document.getElementsByClassName("price");
	
	let sum = 0; 
	for(price of pricesList) sum += parseFloat(price.textContent) || 0;

	
	let tab = document.getElementsByTagName("table")[0];
	
	let trNew = document.createElement("tr");
	let tdNew = document.createElement("td");
	tdNew.textContent = sum;
	trNew.appendChild(tdNew);
	tab.appendChild(trNew);
	// return;
};


getSumBtn.addEventListener("click", getSum);


