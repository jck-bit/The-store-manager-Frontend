
// document.getElementById("submit").addEventListener("click", function() {
//   window.location.href = "./Home page/Home.html";
// })

document.getElementById("login").addEventListener("click", function() {
 window.location.href = "./Admin/Login.html";
});


document.getElementById('submit').addEventListener('click', function() {
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value
  

  // var url = 'http://localhost:5000/login';

  // fetch(url,{
  //   method:"POST",
  //   headers:{
  //     "content-Type":"application/json",
  //   },
  //   body:JSON.stringify({
  //     username,
  //     password
  //   }),
  // })
  // .then(res=>res.json())
  // .then(data => console.log(data))

  const opt ={
    method :"POST",
    headers:{
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({
      username:username,
      password:password
    })
  }

  fetch( 'https://flask-app-store-manager.herokuapp.com/login', opt)
  .then(res=> {
    if (res.status == 200) return res.json()
    else alert("There has been some errors")
  })
  .then()
  .catch(console.error("there was an error"))

})



// document.getElementById("submit").addEventListener("click", function() {
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;
//   var url = 'http://localhost:5000/login';
//   var data = {
//     username: username,
//     password: password
//   };
//       var response = fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//          'Content-Type': 'application/json'
//           }})

//     console.log(response) .then(function(response) {
//     return response.json();
//   }).then(function(data) {
//     if (data.success) {
//       window.location.href = "./Admin/Home.html";

//     } else {
//      alert("Wrong username or password");
//     }
//   });
// }
// );
