document.getElementById('add-money').addEventListener('click', function(){
  event.preventDefault();
  const mobileNumber = document.getElementById('mobile-number').value;
  const pin = parseInt(document.getElementById('pin').value);
  const amount = document.getElementById('amount').innerText;
  const convertAmount = parseFloat(amount);
  const addMoneyAmount = document.getElementById('add-money-amount');
  const addMoneyAmountValue = addMoneyAmount.value;
  const convertAddMoneyAmount = parseFloat(addMoneyAmountValue);
  if(mobileNumber.length == 11){
    if(pin === 1234){
      if(addMoneyAmount.value === "" || isNaN(addMoneyAmount.value) || convertAddMoneyAmount <=0){
        alert('please enter amount')
      }
      else{
        const sumAmount = convertAmount + convertAddMoneyAmount;
        document.getElementById('amount').innerText = sumAmount;
      }
    }
    else{
      alert("Pin Number Is 1234")
    }
  }
  else{
    alert("Write Valid Account Number")
  }
})