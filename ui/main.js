console.log('Loaded!');

var element = document.getElementById('main-text');
// change the text of document
element.innerHTML = 'New Value';

// move the image 
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 2;
    img.style.marginLeft = marginLeft + 'px';
}
 img.onclick = function (){
     var interval = setInterval ( moveRight, 50);
     //img.style.marginLeft = '100px';
 };