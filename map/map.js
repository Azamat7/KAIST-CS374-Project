$(document).ready(function(){
  var back = localStorage.back;
  var map = localStorage.map;

  if(back=="events")
  {
    var place = localStorage.place;
    map = place;
  }

  var description = "";
  var check = 0
  if (map=="twosome" || map=="Twosome Place"){
  	description = "Twosome Place";
    map="twosome";
  }else if (map=="exercise" || map=="Exercise Room"){
  	description = "Exercise Room";
    map="exercise";
  }else if (map=="rcv" || map=="RCV Lab"){
  	description = "Robotics and Computer Vision Lab";
    map="rcv";
  }else if (map=="seminar" || map=="Seminar Room"){
  	description = "Seminar Room";
    map="seminar";
  }else{
  	check = 1
  }
  if (check==0){
  	let html = 
  	'<p style="padding-left: 15px;"> To get to <strong>'+description+'</strong> follow the arrow</p>'+
  	'<img src='+'"'+map+'.png'+'"'+'style="width:100%;">';  
  	$("#list-group-append").append(html);
  	// <img src="twosome.png" style="width:100%;">
  }
  else{
    let html = 
    '<img src='+'"'+'default'+'.png'+'"'+'style="width:100%;">';  
    $("#list-group-append").append(html);
  }

  if (back=="amenities"){
  	document.getElementById("back").href = '../amenities/amenities.html';
  }else if (back=="coffee"){
  	document.getElementById("back").href = '../location/coffee.html';
  }else if (back=="events"){
  	document.getElementById("back").href = '../events/events.html';
  }
  else
  {
    document.getElementById("back").href = '../index.html';
  }

  $(document).on('click', '#home',function(){
  	if (confirm("Are you sure you want to exit current building?")) {
    	document.getElementById("home").href = '../index.html';
	}
  });
});