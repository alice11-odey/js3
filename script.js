const convertBtn = document.getElementById('convert');
const display = document.getElementById('result');

convertBtn.addEventListener('click', ()=>{
    const from = document.getElementById('from').value;
     const to =  document.getElementById('to').value;
     const amount = document.getElementById('amount').value;

     if(amount == ""){
        alert('Please enter amount');
        return;
     }

     const rates = {
        USD: {USD: 1, EUR: 0.93, GBP: 0.79, NGN: 1600},
        EUR: {USD: 1.08, EUR: 1, GBP: 0.85, NGN: 1720},
        GBP: {USD: 1.27, EUR: 1.18, GBP: 1, NGN:2000},
        NGN: {USD: 0.00063, EUR: 0.00058, GBP: 0.0005, NGN: 1},

     }


     let result = amount * rates[from][to];

     display.textContent = `${to} ${result}`;
})
