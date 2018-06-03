$(document).ready(function(){
  $("#contactForm").fadeOut();

  $(document).on('click', '#amenities',function(){
    window.alert("PLease enter a building name");
  });

  $(document).on('click', '#events',function(){
    window.alert("PLease enter a building name");
  });

  //seach building button
  document.getElementById("searchBuildingButton").onclick = function() {
    var inputBuidling = $('#searchBuilding').val();
    if (inputBuidling == "N1"){
      window.open("./amenities/amenities.html","_self");
    }
  }

  //help button
  document.getElementById("help").onclick = function() {
    //window.alert("Ur dumb!");
    
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