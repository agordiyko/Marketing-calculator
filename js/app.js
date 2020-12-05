// Profit

let profitRevenue = document.getElementById('#revenue');
let profitExpenses = document.getElementById('#expenses');

document.querySelector('.profit__btn').onclick = calculateProfit;

function calculateProfit() {
	let revenue = profitRevenue.value;
	revenue = parseInt(revenue);
	console.log(revenue);
	if (isNaN(revenue)) {
		alert('Введите число');
	}
	else {

	}
	let expenses = profitExpenses.value;
	expenses = parseInt(expenses);
	console.log(expenses);
	if (isNaN(expenses)) {
		document.querySelector('.profit__btn').style.background = '#d63031';
		document.querySelector('.profit__btn').style.boxShadow = '0 0 10px #d63031';
		document.querySelector('#revenue').style.border = '1px solid #d63031';
		document.querySelector('#revenue').style.boxShadow = '0 0 10px #d63031';
		document.querySelector('#expenses').style.border = '1px solid #d63031';
		document.querySelector('#expenses').style.boxShadow = '0 0 10px #d63031';

	}
	else {
		profit = revenue - expenses;
		document.querySelector('#profit-result').innerHTML = profit;
		console.log('result');
	}
}