//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyAyr_xybYHcjzSkiidWZ-ckFAsEWdCYWyI",
      authDomain: "kwitter-2de98.firebaseapp.com",
      projectId: "kwitter-2de98",
      storageBucket: "kwitter-2de98.appspot.com",
      messagingSenderId: "819976898884",
      appId: "1:819976898884:web:5112cd4bbe6b458a472f11",
      measurementId: "G-BYCERGQ9D2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() 
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) 

{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 

{ childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") 

{
         firebase_message_id = childKey;
         message_data = childData;

         
//Start code
console.log(firebase_message_id);
console.log(message_data)
name  =message_data['name'];
message = message_data['message'];
name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>"
message_with_tag = "<h4 class = 'message_h4'>"+ message + "</h4>";
//End code
      } });  }); }
getData();
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace ("index.html");
}
function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

