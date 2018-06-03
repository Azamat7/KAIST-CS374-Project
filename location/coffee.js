$(document).ready(function(){
  localStorage.map = "twosome";
  localStorage.back = "coffee";
  $(document).on('click', '#home',function(){
  	if (confirm("Are you sure you want to exit current building?")) {
    	document.getElementById("home").href = '../index.html';
	}
  });
});