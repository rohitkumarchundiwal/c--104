function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

      window.location = "index1.html";
}

firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
});


