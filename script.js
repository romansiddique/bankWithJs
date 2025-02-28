document.getElementById('btn-login').addEventListener('click', function(event){
event.preventDefault();
  const mobileNumber = document.getElementById('mobile-number').value;
  const pin = parseInt(document.getElementById('pin').value);
  if(mobileNumber.length == 11){
    if(pin === 1234){
      window.location.href = "index2.html"
    }
    else{
      alert("Pin Number Is 1234")
    }
  }
  else{
    alert("Write Valid Account Number")
  }
})