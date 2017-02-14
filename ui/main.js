console.log('Loaded!');

var element = document.getElementById('main-text');
// change the text of document
element.innerHTML = 'New Value';

// move the image 
var img = document.getElementById('madi');
 img.onClick = function (){
     img.Style.marginLeft = '100px';
 };