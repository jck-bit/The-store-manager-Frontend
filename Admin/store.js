const api_url = ' http://127.0.0.1:5000/user'


const fetchData = async (url) =>{
    response = await fetch(url)
    data = await response.json()
    console.log(data.users)

const store_attendant = document.getElementById('store_attendant')


for(i=0;i<data.users.length;i++){

    const div_1 = document.createElement('div')
    const div_2 = document.createElement('div')
    const button_1 = document.createElement('button')
    const h1_1 = document.createElement('h1')
   
    h1_1.textContent = `Name: ${data.users[i].name}`
    button_1.textContent = 'Delete User'
    const users_deleted = `http://127.0.0.1:5000/user/${data.users[i].public_id}`
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
    button_1.classList.add('btn')
    

    store_attendant.appendChild(div_1)
    div_1.appendChild(div_2)
    div_2.appendChild(h1_1)
    div_1.appendChild(button_1)

}}

fetchData(api_url)


btn = document.getElementById('delete')
btn.innerHTML = 'Delete User'