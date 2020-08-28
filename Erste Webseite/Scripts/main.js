var myHeading = document.querySelector('h1');
myHeading.textContent = 'Willkommen zu meiner Testseite!';
myHeading.onclick = function(){alert('Ich bin eine Überschrift!')};
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Bilder/thermometer_symbol.jpg') {
      myImage.setAttribute ('src','Bilder/weather_logo.jpg');
    } else {
      myImage.setAttribute ('src','Bilder/thermometer_symbol.jpg');
    }
}
var myButton = document.querySelector('button');

function setUserName(){
  var myName = prompt('Bitte geben Sie Ihren Namen ein:');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Willkommen, ' + myName;
}
if(!localStorage.getItem('name')){
  setUserName();
}else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Willkommen, ' + storedName;

}
myButton.onclick = function(){
  setUserName();
}
