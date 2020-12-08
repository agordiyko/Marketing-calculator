// Profit

let profitRevenue = document.getElementById('revenue');
let profitExpenses = document.getElementById('expenses');

document.querySelector('.profit__btn').onclick = calculateProfit;

function calculateProfit(event) {
	let revenueElement = profitRevenue.value;
	event.preventDefault();
	revenueElement = parseInt(revenueElement);
	if (isNaN(revenueElement)) {
		alert('Введите число');
	}
	else {

	}
	let expensesElement = profitExpenses.value;
	expensesElement = parseInt(expensesElement);
	if (isNaN(expensesElement)) {
		document.querySelector('.profit__btn').style.background = '#d63031';
		document.querySelector('.profit__btn').style.boxShadow = '0 0 10px #d63031';
		profitRevenue.style.border = '1px solid #d63031';
		profitRevenue.style.boxShadow = '0 0 10px #d63031';
		profitExpenses.style.border = '1px solid #d63031';
		profitExpenses.style.boxShadow = '0 0 10px #d63031';

	}
	else {
		profit = revenueElement - expensesElement;
		profit = parseFloat(profit.toFixed(2));
		document.querySelector('#profit-result').innerHTML = profit;
	}
}

// CPA

let cpaBudget = document.getElementById('cpa-budget');
let cpaDeposits = document.getElementById('cpa-deposits');

document.querySelector('.cpa__btn').onclick = calculateCpa;

function calculateCpa(event) {
	let budgetElement = cpaBudget.value;
	event.preventDefault();
	budgetElement = parseInt(budgetElement);
	if (isNaN(budgetElement)) {
		alert('Введите число');
	}
	else {

	}
	let depositsElement = cpaDeposits.value;
	depositsElement = parseInt(depositsElement);
	if (isNaN(depositsElement)) {
		document.querySelector('.cpa__btn').style.background = '#d63031';
		document.querySelector('.cpa__btn').style.boxShadow = '0 0 10px #d63031';
		budgetElement.style.border = '1px solid #d63031';
		budgetElement.style.boxShadow = '0 0 10px #d63031';
		budgetElement.style.border = '1px solid #d63031';
		budgetElement.style.boxShadow = '0 0 10px #d63031';

	}
	else {
		cpa = budgetElement / depositsElement;
		cpa = parseFloat(cpa.toFixed(2));
		document.querySelector('#cpa-result').innerHTML = cpa;
	}
}

// CPC

let cpcBudget = document.getElementById('cpc-budget');
let cpcClicks = document.getElementById('cpc-clicks');

document.querySelector('.cpc__btn').onclick = calculateCpc;

function calculateCpc(event) {
	let cpcBudgetElement = cpcBudget.value;
	event.preventDefault();
	cpcBudgetElement = parseInt(cpcBudgetElement);
	if (isNaN(cpcBudgetElement)) {
		alert('Введите число');
	}
	else {

	}
	let cpcClicksElement = cpcClicks.value;
	cpcClicksElement = parseInt(cpcClicksElement);
	if (isNaN(cpcClicksElement)) {
		document.querySelector('.cpc__btn').style.background = '#d63031';
		document.querySelector('.cpc__btn').style.boxShadow = '0 0 10px #d63031';
		cpcBudgetElement.style.border = '1px solid #d63031';
		cpcBudgetElement.style.boxShadow = '0 0 10px #d63031';
		cpcClicksElement.style.border = '1px solid #d63031';
		cpcClicksElement.style.boxShadow = '0 0 10px #d63031';

	}
	else {
		cpc = cpcBudgetElement / cpcClicksElement;
		cpc = parseFloat(cpc.toFixed(2));
		document.querySelector('#cpc-result').innerHTML = cpc;
	}
}

// eCPC

let ecpcPayout = document.getElementById('ecpc-payout');
let ecpcClicks = document.getElementById('ecpc-clicks');

document.querySelector('.ecpc__btn').onclick = calculateEcpc;

function calculateEcpc(event) {
	let ecpcPayoutElement = ecpcPayout.value;
	event.preventDefault();
	ecpcPayoutElement = parseInt(ecpcPayoutElement);
	if (isNaN(ecpcPayoutElement)) {
		alert('Введите число');
	}
	else {

	}
	let ecpcClicksElement = ecpcClicks.value;
	ecpcClicksElement = parseInt(ecpcClicksElement);
	if (isNaN(ecpcClicksElement)) {
		document.querySelector('.ecpc__btn').style.background = '#d63031';
		document.querySelector('.ecpc__btn').style.boxShadow = '0 0 10px #d63031';
		ecpcPayoutElement.style.border = '1px solid #d63031';
		ecpcPayoutElement.style.boxShadow = '0 0 10px #d63031';
		ecpcClicksElement.style.border = '1px solid #d63031';
		ecpcClicksElement.style.boxShadow = '0 0 10px #d63031';

	}
	else {
		ecpc = ecpcPayoutElement / ecpcClicksElement;
		ecpc = parseFloat(ecpc.toFixed(2));
		document.querySelector('#ecpc-result').innerHTML = ecpc;
	}
}

// CPM

let cpmCost = document.getElementById('cpm-cost');
let cpmCoverage = document.getElementById('cpm-coverage');
let cpmShow = document.getElementById('cpm-show');

document.querySelector('.cpm__btn').onclick = calculateCpm;

function calculateCpm(event) {
	let cpmCostElement = cpmCost.value;
	event.preventDefault();
	cpmCostElement = parseInt(cpmCostElement);
	if (isNaN(cpmCostElement)) {
		alert('Введите число');
	}
	else {

	}
	let cpmCoverageElement = cpmCoverage.value;
	cpmCoverageElement = parseInt(cpmCoverageElement);
	if (isNaN(cpmCoverageElement)) {
		document.querySelector('.cpm__btn').style.background = '#d63031';
		document.querySelector('.cpm__btn').style.boxShadow = '0 0 10px #d63031';
		cpmCoverageElement.style.border = '1px solid #d63031';
		cpmCoverageElement.style.boxShadow = '0 0 10px #d63031';

	}
	else {

	}
	let cpmShowElement = cpmShow.value;
	cpmShowElement = parseInt(cpmShowElement);
	if (isNaN(cpmShowElement)) {
		document.querySelector('.cpm__btn').style.background = '#d63031';
		document.querySelector('.cpm__btn').style.boxShadow = '0 0 10px #d63031';
		cpmCostElement.style.border = '1px solid #d63031';
		cpmCostElement.style.boxShadow = '0 0 10px #d63031';
		cpmShowElement.style.border = '1px solid #d63031';
		cpmShowElement.style.boxShadow = '0 0 10px #d63031';

	}
	else {
		cpm = cpmCostElement / cpmCoverageElement * cpmShowElement;
		cpm = parseFloat(cpm.toFixed(2));
		document.querySelector('#cpm-result').innerHTML = cpm;
	}
}

// CTR

let ctrClicks = document.getElementById('ctr-clicks');
let ctrShow = document.getElementById('ctr-show');

document.querySelector('.ctr__btn').onclick = calculateCtr;

function calculateCtr(event) {
	let ctrClicksElement = ctrClicks.value;
	event.preventDefault();
	ctrClicksElement = parseInt(ctrClicksElement);
	if (isNaN(ctrClicksElement)) {
		alert('Введите число');
	}
	else {

	}
	let ctrShowElement = ctrShow.value;
	ctrShowElement = parseInt(ctrShowElement);
	if (isNaN(ctrShowElement)) {
		document.querySelector('.ctr__btn').style.background = '#d63031';
		document.querySelector('.ctr__btn').style.boxShadow = '0 0 10px #d63031';
		ctrClicksElement.style.border = '1px solid #d63031';
		ctrClicksElement.style.boxShadow = '0 0 10px #d63031';
		ctrShowElement.style.border = '1px solid #d63031';
		ctrShowElement.style.boxShadow = '0 0 10px #d63031';

	}
	else {
		ctr = ctrClicksElement / ctrShowElement * 100;
		ctr = parseFloat(ctr.toFixed(2));
		document.querySelector('#ctr-result').innerHTML = `${ctr}%`;
	}
}

// ROI

let roiIncome = document.getElementById('roi-income');
let roiConsumption = document.getElementById('roi-consumption');
let roiAdvert = document.getElementById('roi-advert');

document.querySelector('.roi__btn').onclick = calculateRoi;

function calculateRoi(event) {
	let roiIncomeElement = roiIncome.value;
	event.preventDefault();
	roiIncomeElement = parseInt(roiIncomeElement);
	if (isNaN(roiIncomeElement)) {
		alert('Введите число');
	}
	else {

	}
	let roiConsumptionElement = roiConsumption.value;
	roiConsumptionElement = parseInt(roiConsumptionElement);
	if (isNaN(roiConsumptionElement)) {
		document.querySelector('.roi__btn').style.background = '#d63031';
		document.querySelector('.roi__btn').style.boxShadow = '0 0 10px #d63031';
		roiConsumptionElement.style.border = '1px solid #d63031';
		roiConsumptionElement.style.boxShadow = '0 0 10px #d63031';

	}
	else {

	}
	let roiAdvertElement = roiAdvert.value;
	roiAdvertElement = parseInt(roiAdvertElement);
	if (isNaN(roiAdvertElement)) {
		document.querySelector('.roi__btn').style.background = '#d63031';
		document.querySelector('.roi__btn').style.boxShadow = '0 0 10px #d63031';
		roiAdvertElement.style.border = '1px solid #d63031';
		roiAdvertElement.style.boxShadow = '0 0 10px #d63031';
		roiIncome.style.border = '1px solid #d63031';
		roiIncome.style.boxShadow = '0 0 10px #d63031';

	}
	else {
		roi = (roiIncomeElement - roiConsumptionElement) / roiAdvertElement * 100;
		roi = parseFloat(roi.toFixed(2));
		document.querySelector('#roi-result').innerHTML = `${roi}%`;
	}
}