const api_url = 'https://flask-app-store-manager.herokuapp.com/users'



const fetchData = async (url) =>{
    response = await fetch(url)
    data = await response.json()
    console.log(data.users)

const store_attendant = document.getElementById('store_attendant')

for(i=0;i<data.users.length; i++){

    const div_1 = document.createElement('div')
    const div_2 = document.createElement('div')
    const button_1 = document.createElement('button')
    const button_2 = document.createElement('button')
    const h1_1 = document.createElement('h1')
   
    h1_1.textContent = `Name: ${data.users[i].username}`
    button_1.textContent = 'Delete User'
    button_2.textContent = 'View sales'
    
    button_2.addEventListener('click', function(){
        window.location.href = `./sales.html`
    })


    const users_deleted = `https://flask-app-store-manager.herokuapp.com/user/${data.users[i].public_id}`
    
    //when you click on the button it will delete the user from the database
    button_1.addEventListener('click', function(){
        fetch( users_deleted, {
            method: 'DELETE' 
        })
        .then(function(){
            window.location.reload()
        }).catch(function(error){
            console.log(error)
        })
    })

    div_1.classList.add('all')
    div_2.classList.add('personal_details')
    button_2.classList.add('btn_view_sales')
    button_1.classList.add('btn')
    

    store_attendant.appendChild(div_1)
    div_1.appendChild(div_2)
    div_2.appendChild(h1_1)
    div_1.appendChild(button_1)
    div_1.appendChild(button_2)


}}

fetchData(api_url)
