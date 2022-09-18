login = () => {
  let username = document.getElementById('name').value
  let password = document.getElementById('password').value
  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
 
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
  
fetch("https://flask-app-store-manager.herokuapp.com/login", requestOptions)
    .then(response => response.json())
    .then((result) =>{
      if (result.status === 'Failed'){
        document.getElementById('danger').style.color='red'
        document.getElementById('danger').innerHTML = result.message
      }
      if (result.status === 'success'){
        window.location.assign("./home/home.html")
      }
      window.localStorage.setItem('token', result.token)
      console.log(result)
    })
    .catch(error => console.log('error', error));
   
}
