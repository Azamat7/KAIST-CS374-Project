$(document).ready(function(){
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
      '<div class = "list-group-item list-group-secondary">' +
        '<h5 class = "mb-1">'+ eventObject["title"]+ '<i class = "fa fa-map-o"></i><small>    ' + eventObject["type"]+  '</small></h5>' + 
        '<small class = "mb-4"> By: ' + eventObject["organizer"] + '</small>' +
        '<p class = "mt-2">' + eventObject["description"] + '</p>' +
        '<div class = "d-flex justify-content-between">' +
          '<span>' + eventObject["time"] + '</span> <span>' + eventObject["location"] + ' </span> ' +
        '</div>' + 
      '</div>';
      $("#list-group-append").append(html);
    }
  });
  $(document).on('click', '#inlinecheckbox1',function(){
    $(".list-group-item").each(function(){
			$(this).show();
		});
  }); 
});