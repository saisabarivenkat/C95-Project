const firebaseConfig = {
  apiKey: "AIzaSyCoMcJ4oQH2v7qb038Ql7pYSox12DIz_uM",
  authDomain: "let-chat-web-app-f83b8.firebaseapp.com",
  databaseURL: "https://let-chat-web-app-f83b8-default-rtdb.firebaseio.com",
  projectId: "let-chat-web-app-f83b8",
  storageBucket: "let-chat-web-app-f83b8.appspot.com",
  messagingSenderId: "265027543151",
  appId: "1:265027543151:web:a93f876834b67aab7eed9a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome"+user_name;

function addroom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding roomname"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("room name"+Room_names);
 row = "<div class = 'room_name' id ="+Room_names+" onclick ='redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>";
 document.getElementById("output").innerHTML += row; 
 //End code
 });});}
getData();

function redirectToRoomName(name){
  
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}



  
