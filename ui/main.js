console.log('Loaded!');

var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    
    // Create a request object 
    var reauuest = new XMLHttpRequest ();
    
   //capture the responce and store it in a variable
    request.onreadystatechange = function (){
      
       if (request.status === XMLHttpRequest.DONE){
           
             //take some action
             if (request.status === 200){
                 var counter =request.responceText;
                 var span=document.getElementById('count');
                 span.innerHTML= counter.toString();
         }
       }
       
    };
    //make the request
    request.open('GET','http://sugandha11.imad.hasura-app.io/counter',true)
    request.send(null);
};