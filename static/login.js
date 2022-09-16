login = () => {
  let username = document.getElementById('name').value
  let password = document.getElementById('password').value
  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "session=.eJwlzsENwzAIAMBd_O4D7AAmy0TGgNqv07yq7t5IHeCk-5QjV5zPsr_XFY9yvLzsxQabdA5k9VYtgM2TIEFym1OzDSHf0MZIYLbsCn2o-KhuRKBxIzHmqAYpraOqVpo2tHJzUhbxYGJ2og0xtaUzZADihNms3JHrjPXfYPn-AP3EL30.YyRxpg.e5Ta_R1W2w5wtW-qToRcBJGuQKY");
  
  var raw = JSON.stringify({
    "username": username,
    "password": password
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://127.0.0.1:5000/login", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
   
}


