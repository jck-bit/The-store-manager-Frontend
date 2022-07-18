function buttonClicked(){
    window.location.href = "./create.html";
}

window.onload=function(){
  var btn = document.getElementById("back");
  btn.addEventListener("click", buttonClicked, true);
}

document.getElementById("logout").addEventListener('click', function(){
  window.location.href = './Login.html'
})

const api_url = 'http://127.0.0.1:5000/products'

async function get_products(url){
    response = await fetch(url)
    data  =  await response.json()
    console.log(data)

    products_container = document.getElementById('products_first')

    for (let i = 0; i< data.length; i++){
        const div1 = document.createElement('div')
        const div2 = document.createElement('div')
        const div3 = document.createElement('div')
        const div4 = document.createElement('div')
        const paragraph_one = document.createElement('p')
        const button_one = document.createElement('button')
        const button_two = document.createElement('button')


        paragraph_one.textContent = data[i].name
        button_one.textContent = `${data[i].Quantity} in stock`
        button_two.textContent = 'Add to cart'
        
        div1.classList.add('products-first')
        div2.classList.add('image')
        div3.classList.add('paragraph-icon')
        div4.classList.add('item_check')
        paragraph_one.classList.add('paragraph-icon')
        button_one.classList.add('button_one')
        button_two.classList.add('button_two')

       products_container.appendChild(div1)
       div1.appendChild(div2)
       div2.appendChild(div3)
       div3.appendChild(paragraph_one)
       div3.appendChild(div4)
       div4.appendChild(button_one)
       div4.appendChild(button_two)
       
        button_two.addEventListener('click', function(){
            button_two.textContent = 'Added'
            //if i click on the button again it will go back to the original text
            button_two.addEventListener('click', function(){
                button_two.textContent = 'Add to cart'
            })
        })

    }}
get_products(api_url)

