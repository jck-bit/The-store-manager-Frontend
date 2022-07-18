document.getElementById("back").addEventListener('click', function () {
  window.location.href = "./create.html"
})

document.getElementById("logout").addEventListener('click', function () {
  window.location.href = "./Login.html"
})

document.getElementById("click_me").addEventListener('click', function () {
  window.location.href = "./admin-profile.html"
})

const api_url = 'http://127.0.0.1:5000/products'

async function get_products(url) {
  response = await fetch(url)
  data = await response.json()
  console.log(data)

  products_container = document.getElementById('admin')

  for (let i = 0; i < data.length; i++) {
    div_1 = document.createElement('div')
    div_2 = document.createElement('div')
    form_1 = document.createElement('form')
    div_3 = document.createElement('div')
    input_1 = document.createElement('input')

    input_2 = document.createElement('input')

    div_5 = document.createElement('div')
    div_6 = document.createElement('div')
    p_1 = document.createElement('p')
    div_7 = document.createElement('div')
    div_8 = document.createElement('div')
    button_1 = document.createElement('button')
    button_2 = document.createElement('button')


    div_1.classList.add('container-product')
    div_2.classList.add('input')
    div_3.classList.add('add-item-list')
    div_5.classList.add('container-left')
    div_6.classList.add('image')
    div_7.classList.add('paragraph-icon')
    div_8.classList.add('item-check')
    button_1.classList.add('remove')
    button_2.classList.add('edit')

    input_1.type = 'text'
    input_1.disabled = true

    input_2.type = 'submit'
    input_2.value = 'Edit'

    p_1.textContent = data[i].name
    button_1.textContent = 'Remove Item'
    //whenever you click on the button, it will fetch the delete route and remove it from the dom
    button_1.addEventListener('click', function () {
      fetch(`http://127.0.0.1:5000/products/${data[i].name}`, {
        method: 'DELETE'
      })  //end of fetch
        .then(function (response) {
          return response.json()
          }) //end of .then
        .then(function (data) {
          console.log(data)
          window.location.reload()
        })}) //end of addEventListener

    button_2.textContent = 'Edit Item'

    div_1.appendChild(form_1)
    form_1.appendChild(div_2)
    div_2.appendChild(input_1)
    form_1.appendChild(div_3)
    div_3.appendChild(input_2)

    div_5.appendChild(div_6)
    div_6.appendChild(div_7)
    div_7.appendChild(p_1)
    div_7.appendChild(div_8)
    div_8.appendChild(button_1)
    div_8.appendChild(button_2)

    products_container.appendChild(div_5)

  }
}

get_products(api_url)
