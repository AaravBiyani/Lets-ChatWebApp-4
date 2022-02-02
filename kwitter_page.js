// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA8LhPsrTgBindAAGxbF4BKYbUSl5eiCeU",
    authDomain: "lets-chat-c9e64.firebaseapp.com",
    databaseURL: "https://lets-chat-webapp-93269-default-rtdb.firebaseio.com",
    projectId: "lets-chat-c9e64",
    storageBucket: "lets-chat-c9e64.appspot.com",
    messagingSenderId: "364646381828",
    appId: "1:364646381828:web:98a3afd1394cdaf174f851"
  };
  
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name") ;
   room_name = localStorage.getItem("room_name") ;

   function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}
   
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
