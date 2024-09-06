let button = document.getElementById('onclick');

button.addEventListener('click', function(){ //allows you to add event listeners on any HTML DOM object
  const gram = parseInt(document.getElementById('grams').value); //returns the first element that matches a CSS selector
  const type = document.getElementById('type').value; //returns the first element that matches a CSS selector

  if(gram === '' || isNaN(gram)){ 
    document.getElementById('grams').focus();
    document.getElementById('error').innerHTML = 'Please provide a valid gram'; //to show the error
    document.getElementById('output').innerHTML = ''; //to get the value of output
  }else{
    document.getElementById('error').innerHTML = '';
    switch(type){
            case 'Ounces':
              convert_ounces(gram);
              break;
              default:
              alert('Error');
              }
    function convert_ounces(gram){ //starting of convertion
      let rate = 0.035274, ounces;
      ounces = gram * rate;
      document.getElementById('output').innerHTML = gram + " grams = " + 
      ounces.toFixed(3) + ' ounces.'; //to show the value of what you input and to show the result
    }
  
  }
});
