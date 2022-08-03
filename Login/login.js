// document.getElementById("submit").addEventListener("click", function() {
//   window.location.href = "./Home page/Home.html";
// })

document.getElementById("login").addEventListener("click", function() {
 window.location.href = "./Admin/Login.html";
});

//get the users input from the login page and check if the name and password are same as the ones in the database if so then redirect to the home page if not then display an error message
document.getElementById("submit").addEventListener("click", function() {
  var name = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var url = 'http://localhost:5000/token';
  var data = {
    name: name,
    password: password
  };
  var response = fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }})
    .then(function(response) {
    return response.json();
  }).then(function(data) {
    if (data.success) {
      window.location.href = "./Admin/Home.html";

    } else {
     alert("Wrong username or password");
    }
  });
}
);
