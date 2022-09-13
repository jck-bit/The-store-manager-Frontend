 function login() {
  let name = document.getElementById('name').value
  let password = document.getElementById('password').value
  
  // let const_api_url = 'https://flask-app-store-manager.herokuapp.com/login'
let const_api_url = 'http://127.0.0.1:5000/login'

  fetch(const_api_url, {
    method:'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'content-type':'application/json'
    },
    
    body:JSON.stringify({name:name, password:password, })
  })
  .then((res) =>res.json())
  .then((data) =>{
    if(data.status === 'Failed'){
     document.getElementById('danger').style.color = 'red'
     document.getElementById('danger').innerHTML = data.message
    }
  })
   if(data.status === 'Success'){
    window.location.assign("../home/home.html")
   }
   console.log('You are now logged in')

}

