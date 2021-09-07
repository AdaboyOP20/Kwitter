function AddUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", "user_name");
    window.location = "kwitter_room.html";
}

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
