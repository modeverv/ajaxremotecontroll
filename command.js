var com = { 
    session : "xcxc,xxx",
    command : function(){

        if(!document.getElementById("hoge")){
            var html = "<div id=\"hoge\" style=\"position:absolute;top:0;left:0;width:200px;\"></div>";
            $("body").append(html);

        }

        var message = "a";
        $("#hoge").html($("#hoge").html() +"<br/>" + message );
        //$("#hoge").remove();
    }
};

