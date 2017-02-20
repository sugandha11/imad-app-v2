console.log('Loaded!');

var button = document.getElementById('counter');

button.onclick = function(){
    
    // Create a request object 
    var request = new XMLHttpRequest ();
    
   //capture the responce and store it in a variable
    request.onreadystatechange = function (){
      
       if (request.readyState === XMLHttpRequest.DONE){
           
             //take some action
             if (request.status === 200){
                 var counter =request.responseText;
                 var span=document.getElementById('count');
                 span.innerHTML= counter.toString();
         }
       }
       
    };
    //make the request
    request.open('GET','http://sugandha11.imad.hasura-app.io/counter',true);
    request.send(null);
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');

submit.onclick = funciton (){
    // make request to the server and send name
    // capture the list of name and render it as the list
    
    var names= ['name1','name2','name3', 'name4'];
    var list='';
    for (var i=0; i < names.length; i++) {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
}; 