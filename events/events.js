$(document).ready(function(){

  localStorage.back = "events";
  var config = {
    apiKey: "AIzaSyBxBVhON3OJ5cMx8rFzit8NWhokUpzCqjs",
    authDomain: "mappingtheworld0.firebaseapp.com",
    databaseURL: "https://mappingtheworld0.firebaseio.com",
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  database.ref("user-created-events/").once("value").then(function(snapshot){
    let dbSnapshot = snapshot.val();
    let keyVal = Object.keys(dbSnapshot);
    for ( var i = 0; i < keyVal.length; i++) {
      let eventObject = dbSnapshot[keyVal[i]];
      let html = 
      '<div class = "list-group-item list-group-secondary ' +eventObject["type"] + '">' +
        '<h5 class = "mb-1">'+ eventObject["title"] + " " + "<small>" + eventObject["type"]+  '</small></h5>' + 
        '<small class = "mb-4"> By: ' + eventObject["organizer"] + '</small>' +
        '<p class = "mt-2">' + eventObject["description"] + '</p>' +
        '<div class = "thisone d-flex justify-content-between">' +
          '<span style="font-size:17px">' + 'Time: ' + eventObject["time"] + '</span> <span style="font-size:17px">' + 'Place: ' + eventObject["location"] + ' </span> ' +
        '</div>' + 
        '<a class = "button mt-3 btn btn-outline-info" href="../map/map.html" style = "font-size: 12px;"> Find in Map </a>'
      '</div>';
      $("#list-group-append").append(html);
    }
  });
  
  $(document).on('click', '.button',function(){
      var crap = $(this).parent().children(".thisone").html();
      localStorage.place = crap.split(" <span")[1].split(" <")[0].split("N1 ")[1];
  }); 

  $(document).on('click', '#inlineCheckbox1',function(){
    $(".list-group-item").each(function(){
      if ($(this).hasClass("#Study")) {
        $(this).show();
      } else {
        $(this).hide();
      }
		});
  }); 
  $(document).on('click', '#inlineCheckbox2',function(){
    $(".list-group-item").each(function(){
      if ($(this).hasClass("#Club")) {
        $(this).show();
      } else {
        $(this).hide();
      }
		});
  }); 
  $(document).on('click', '#inlineCheckbox3',function(){
    $(".list-group-item").each(function(){
      if ($(this).hasClass("#Fun")) {
        $(this).show();
      } else {
        $(this).hide();
      }
		});
  }); 
  $(document).on('click', '#inlineCheckbox4',function(){
    $(".list-group-item").each(function(){
      $(this).show();
		});
  }); 
  $(document).ready(function(){
    $(document).on('click', '#home',function(){
      if (confirm("Are you sure you want to exit current building?")) {
        document.getElementById("home").href = '../index.html';
      }
    });
  });
  
});