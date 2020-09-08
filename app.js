// submit event listener

document.getElementById("loan-form").addEventListener("click", calculateLoan);


// calculate loan 
function calculateLoan(e) {
   e.preventDefault();

  // UI vars
  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const years = document.querySelector('#years');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  // loan calculation
  const principal = parseFloat(amount.value);
  const rate = parseFloat(interest.value) / 100 / 12;
  const n = parseFloat(years.value) * 12;

  // Calculation of DiscountFactor
  const x = (1 + rate) ** n;
  const discountFactor = (x - 1) / (rate * x);
  const monthly = principal / discountFactor;
  
  // display to ui result
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * n).toFixed(2);
    totalInterest.value = (totalPayment.value - principal).toFixed(2);
  } else {

  }

  // Prevent default behaiviour
 
}