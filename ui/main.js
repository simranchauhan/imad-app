// console code
var button= document.getElementById('counter');

button.onclick= function(){
    // create a request object
    var request= new XMLHttpRequest();
     // capture the response and store it in the variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status ===200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //not done yet
    };
    
    
    
    //make the request
    
    request.open('GET', 'http://simran2015in2015.imad.hasura-app.io/counter', true);
    request.send(null);

}; 
    
    //submit name
    var nameInput= document.getElementById("name");
    var name= nameInput.value;
    var submit = document.getElementById("submit_btn");
    submit.onclick = function(){
        //make a request in the serverand send the name
        
        //capture a list of name amd render it as a list
        var names=['name1','name2','name3','name4'];
        var list='';
        for(var i=0; i<name.length;i++){
            list+= '<li>' +name[i] +'<li>';
        }
        var ul= document.getElementById('namelist');
        ul.innerHTML = list;
        
    };
    
    
    
    
    
    
   