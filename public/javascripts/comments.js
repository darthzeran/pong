$(document).ready(function(){
	
	$.getJSON('comment', function(data) {
       // console.log(data);
	   
        var everything = "<ul>";
		data.reverse();
        for(var comment in data) {
          com = data[comment];
          everything += "<li>Player: " + com.Name + " -- Score: " + com.Comment + "</li>";
        }
        everything += "</ul>";
        $("#comments").html(everything);
      })
	
   $("#serialize").click(function(){
   var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val()};
   
   if(myobj.Comment>10){
   window.alert("liar");
   }
   else{ jobj = JSON.stringify(myobj);
   // $("#json").text(jobj);	
	var url = "comment";
$.ajax({
  url:url,
  type: "POST",
  data: jobj,
  contentType: "application/json; charset=utf-8",
  success: function(data,textStatus) {
     // $("#done").html(textStatus);
  }
   })}

 $.getJSON('comment', function(data) {
       // console.log(data);
        var everything = "<ul>";
		data.reverse();
        for(var comment in data) {
          com = data[comment];
          everything += "<li>Player: " + com.Name + " -- Score: " + com.Comment + "</li>";
        }
        everything += "</ul>";
        $("#comments").html(everything);
      })
    })
	
});

	


