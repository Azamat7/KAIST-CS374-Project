$(document).ready(function() {
  var config = {
    apiKey: "AIzaSyBxBVhON3OJ5cMx8rFzit8NWhokUpzCqjs",
    authDomain: "mappingtheworld0.firebaseapp.com",
    databaseURL: "https://mappingtheworld0.firebaseio.com",
  };
  firebase.initializeApp(config);
  $("#submit-button").on('click', function(){
    let todayDate = new Date();
    var time = todayDate.getHours() + ":" + todayDate.getMinutes() + ":" + todayDate.getSeconds();
    let bar = "-";
    let dateOfUpload = (todayDate.getMonth() + 1).toString().concat(bar, (todayDate.getDate()).toString(), bar, (todayDate.getFullYear()).toString(), bar, time.toString());
    let organizer = $("#organizer").val();
    let title = $("#title").val();
    let description = $("#description").val();
    let time1 = $("#time").val();
    let location = $("#location").val();   
    let type = $("input[name=inlineRadioOptions]:checked").val();
    if (location == "" || time1 == "" || description == "" || title == "" | organizer == "") {
      return;
    }
    firebase.database().ref('user-created-events/' + dateOfUpload).set({
      organizer: organizer,
      title: title,
      description: description, 
      time: time1,
      location: location,
      type: type,
    });
     $("#organizer").val("");
     $("#title").val("");
     $("#description").val("");
    $("#time").val("");
    $("#location").val("");   
    $("input[name=inlineRadioOptions]:checked").val("");
    showSnackbar();
  });
  function showSnackbar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  
});