// document.getElementById("submit").addEventListener("click", function() {
//   window.location.href = "./Home page/Home.html";
// })

document.getElementById("login").addEventListener("click", function() {
 window.location.href = "./Admin/Login.html";
});



//if the value of password and username are not in the database, redirect to the login page, otherwise redirect to the home page and provide a token from the backend

const login = document.getElementById("submit");
login.addEventListener("click", function() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const data = {
    username: username,
    password: password
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  fetch("http://127.0.0.1:5000/login", options)
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "./Home page/Home.html";
      } else {
        alert("Invalid username or password");
      }
    });
}
)