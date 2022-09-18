create_account = () => {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let confirm_password = document.getElementById('confirm_password').value

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   
    var raw = JSON.stringify({
      "username": username,
      "password": password,
      "confirm_password":confirm_password
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
  fetch("https://flask-app-store-manager.herokuapp.com/users/new_account", requestOptions)
      .then(response => response.json())
      .then((result) =>{
        if (result.status === 'Failed'){
          document.getElementById('danger').style.color='red'
          document.getElementById('danger').innerHTML = result.message
        }
        if (result.status === 'success'){
            document.getElementById('danger').style.color='green'
            document.getElementById('danger').innerHTML = result.message
        }
        console.log(result)
      })
      .catch(error => console.log('error', error));
     
  }
  