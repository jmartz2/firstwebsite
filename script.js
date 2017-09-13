var myVar = 0; 

function myFunction() {
    var text = document.getElementById('mytext').value;
 
    myVar = myVar + text; 
  
    document.getElementById('output').innerHTML = myVar + text;
    
    document.getElementById('output').innerHTML = 'thing';
}

var output = '';

function newText(thing) {
    output = output +thing;
    document.getElementById('output').innerHTML = output
     
}
