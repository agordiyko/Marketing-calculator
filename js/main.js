let profitRevenue = document.querySelector('#profit-revenue');
let profitExpenses = document.querySelector('#profit-expenses');

document.querySelector('#profit-btn').onclick = calculateProfit; 

function calculateProfit(){
    let revenue = profitRevenue.value;
    revenue = parseInt(revenue);
    console.log(revenue);
    if (isNaN(revenue)) {
        // alert('Введите число');
    }
    else {
        
    }
    let expenses = profitExpenses.value;
    expenses = parseInt(expenses);
    console.log(expenses);
    if (isNaN(expenses)) {
        document.querySelector('#profit-btn').style.background = '#d63031';
        document.querySelector('#profit-btn').style.boxShadow = '0 0 10px #d63031';
        document.querySelector('#profit-revenue').style.border = '1px solid #d63031';
        document.querySelector('#profit-revenue').style.boxShadow = '0 0 10px #d63031';
        document.querySelector('#profit-expenses').style.border = '1px solid #d63031';
        document.querySelector('#profit-expenses').style.boxShadow = '0 0 10px #d63031';
        
    }
    else {
        profit = revenue - expenses;
        document.querySelector('.concept-result__sum').innerHTML = profit;
    }
}