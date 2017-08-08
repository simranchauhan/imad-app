// console code
var button= document.getElementById('counter');
var counter=0;

button.onclick= function(){
    // make a request to the counter endpoint
    // capture the response and store it in the varriable
    //render the variable in the correct span
    counter= counter+1;
    var button= document.getElementById('count');
    span.innerHTML= counter.toString();
};
