$(document).ready(function(){
  $(document).on('click', '#home',function(){
  	if (confirm("Are you sure you want to exit current building?")) {
    	document.getElementById("home").href = '../index.html';
	}
  });

  //seach building button
  document.getElementById("searchRoomButton").onclick = function() {
    var inputRoom = $('#searchRoom').val().toLowerCase();
    if (inputRoom == "twosome" || inputRoom == "coffee" || inputRoom == "cafe"){
    	localStorage.map = "twosome";
    }else if (inputRoom == "exercise" || inputRoom == "gym" ){
    	localStorage.map = "exercise";
    }else if (inputRoom == "rcv" || inputRoom == "lab" || inputRoom == "rcv lab"){
    	localStorage.map = "rcv";
    }else if (inputRoom == "seminar"){
    	localStorage.map = "seminar";
    }
    localStorage.back = "amenities";
    window.open("../map/map.html","_self");
  }
});