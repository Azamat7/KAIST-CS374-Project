$(document).ready(function(){
  localStorage.map = "default";
  localStorage.back = "default";

  $(document).on('click', '#amenities',function(){
    window.alert("Please enter a building name");
  });

  $(document).on('click', '#events',function(){
    window.alert("Please enter a building name");
  });

  //seach building button
  document.getElementById("searchBuildingButton").onclick = function() {
    var inputBuidling = $('#searchBuilding').val().toLowerCase();
    if (inputBuidling == "n1"){
      window.open("./amenities/amenities.html","_self");
    }
  }

  $(function() {
    $('#help').click(function() {
      $('#contactForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
      var container = $("#contactForm");

      if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
        container.fadeOut();
      }
    }); 
  }); 

});