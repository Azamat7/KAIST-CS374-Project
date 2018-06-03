$(document).ready(function(){
  var back = localStorage.back;
  var map = localStorage.map;
  var description = "";
  var check = 0
  if (map=="twosome"){
  	description = "Twosome Place";
  }else if (map=="exercise"){
  	description = "Exercise Room";
  }else if (map=="rcv"){
  	description = "Robotics and Computer Vision Lab";
  }else if (map=="seminar"){
  	description = "Seminar Room";
  }else{
  	check = 1
  }
  if (check==0){
  	let html = 
  	'<p style="padding-left: 15px;"> To get to <strong>'+description+'</strong> follow the arrow</p>'+
  	'<img src='+'"'+map+'.png'+'"'+'style="width:100%;">';  
  	$("#list-group-append").append(html);
  	//<img src="twosome.png" style="width:100%;">
  }  

  if (back=="amenities"){
  	document.getElementById("back").href = '../amenities/amenities.html';
  }else if (back=="coffee"){
  	document.getElementById("back").href = '../location/coffee.html';
  }else if (back=="events"){
  	document.getElementById("back").href = '../events/events.html';
  }

  $(document).on('click', '#home',function(){
  	if (confirm("Are you sure you want to exit current building?")) {
    	document.getElementById("home").href = '../index.html';
	}
  });
});