// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVWN03VPVTRIkHTqFzo9Q7l0d-eavtZBw",
    authDomain: "lets-chat-webapp-93269.firebaseapp.com",
    databaseURL: "https://lets-chat-webapp-93269-default-rtdb.firebaseio.com",
    projectId: "lets-chat-webapp-93269",
    storageBucket: "lets-chat-webapp-93269.appspot.com",
    messagingSenderId: "455839304377",
    appId: "1:455839304377:web:3a94fc9593b82508246968"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name") ;
document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";

function addRoom(){
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_room.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "kwitter.html";
}
  