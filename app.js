// submit event listener

document.getElementById("loan-form").addEventListener("submit", function (e) {
  // Prevent Default
  e.preventDefault();

  // Hide result
  document.querySelector('#result').style.display = 'none';

  // show loading
  document.querySelector('#loading').style.display = 'block';


  calculateLoan();
});

// calculate loan 
function calculateLoan() {

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

    setTimeout(function () {
      // hide loading
        document.querySelector("#loading").style.display = "none";
      
      // show result
        document.querySelector("#result").style.display = "block";


    }, 3000)
  } else {
    showError('Please Enter Correct Values!');
  }

  // Prevent default behaiviour
 
}

function showError(error) {
  document.querySelector("#loading").style.display = "none";
  document.querySelector("#result").style.display = "none";
  
  // console.log(error);
  const div = document.createElement('div');
  div.className = 'alert alert-danger';
  // create textNode in Element
  div.appendChild(document.createTextNode(error));

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  card.insertBefore(div, heading);

  setTimeout(function () {
    card.appendChild(div).remove();
    document.querySelector("#result").style.display = "none";
    document.querySelector("#loading").style.display = "none";
  }, 3000)

}
