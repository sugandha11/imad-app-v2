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
    if (marginLeft > 1000 ) 
        marginLeft = 0 ;
}
 img.onclick = function (){
     var interval = setInterval ( moveRight, 50);
     //img.style.marginLeft = '100px';
 };