$(document).ready(function(){
	
	$.getJSON('comment', function(data) {
       // console.log(data);
        var everything = "<ul>";
        for(var comment in data) {
          com = data[comment];
          everything += "<li>Player: " + com.Name + " -- Score: " + com.Comment + "</li>";
        }
        everything += "</ul>";
        $("#comments").html(everything);
      })
	
   $("#serialize").click(function(){
   var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val()};
    jobj = JSON.stringify(myobj);
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
})

 $.getJSON('comment', function(data) {
       // console.log(data);
        var everything = "<ul>";
        for(var comment in data) {
          com = data[comment];
          everything += "<li>Player: " + com.Name + " -- Score: " + com.Comment + "</li>";
        }
        everything += "</ul>";
        $("#comments").html(everything);
      })
    })
	
});

  $("#colors").click(function(){
   

    })
/*

$scope.clear = function() {
           $http({
  method: 'GET',
  url: '/delete'
}).then(function successCallback(response) {

  }, function errorCallback(response) {
  });
        console.log('deleting all');
          $scope.getAll();
    };


*/
	


