var firebaseConfig = {
    apiKey: "AIzaSyDMg_T5y4ge7qukqUJjRBZ9v-epyuwySaQ",
    authDomain: "kwitter-b6a77.firebaseapp.com",
    databaseURL: "https://kwitter-b6a77-default-rtdb.firebaseio.com",
    projectId: "kwitter-b6a77",
    storageBucket: "kwitter-b6a77.appspot.com",
    messagingSenderId: "454000615713",
    appId: "1:454000615713:web:c670755f1f08a2e3d5de60"
  };
  
  
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}