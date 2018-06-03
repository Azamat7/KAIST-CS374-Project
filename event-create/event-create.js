$(document).ready(function() {
  var building = "";
  var room = "";
  $(document).on('click', '#building',function(){
    document.getElementById("buildingButton").innerHTML = "N1";
    building = "N1";
    event.preventDefault();
  });

  $(document).on('click', '#room1',function(){
    document.getElementById("roomButton").innerHTML = "Seminar Room";
    room = "Seminar Room";
    event.preventDefault();
  });
  $(document).on('click', '#room2',function(){
    document.getElementById("roomButton").innerHTML = "Twosome Place";
    room = "Twosome Place";
    event.preventDefault();
  });
  $(document).on('click', '#room3',function(){
    document.getElementById("roomButton").innerHTML = "RCV Lab";
    room = "RCV Lab";
    event.preventDefault();
  });
  $(document).on('click', '#room4',function(){
    document.getElementById("roomButton").innerHTML = "Exercise Room";
    room = "Exercise Room";
    event.preventDefault();
  });

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
    let type = $("input[name=inlineRadioOptions]:checked").val();
    if (building == "" || room=="" || time1 == "" || description == "" || title == "" | organizer == "") {
      return;
    }
    firebase.database().ref('user-created-events/' + dateOfUpload).set({
      organizer: organizer,
      title: title,
      description: description, 
      time: time1,
      location: building+" "+room,
      type: type,
    });
     $("#organizer").val("");
     $("#title").val("");
     $("#description").val("");
    $("#time").val("");
    var building = "";
    var room = "";
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

  $(document).on('click', '#home',function(){
    if (confirm("Are you sure you want to exit current building?")) {
      document.getElementById("home").href = '../index.html';
    }
  });
  
});