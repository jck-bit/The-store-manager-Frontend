// const api_url = 'https://flask-app-store-manager.herokuapp.com/products'

const api_url = 'https://flask-app-store-manager.herokuapp.com/products'

async function get_products(url){
    response = await fetch(url)
    data  =  await response.json()
    console.log(data)
   
    let products_container = document.getElementById('products_first')

    for (let i = 0; i< data.products.length; i++){
        const div1 = document.createElement('div')
        const div2 = document.createElement('div')
        const div3 = document.createElement('div')
        const div4 = document.createElement('div')
        const paragraph_one = document.createElement('p')
        const button_one = document.createElement('button')
        const button_two = document.createElement('button')


        paragraph_one.textContent = `${data.products[i].name}: ${data.products[i].Quantity} in stock` 
        button_one.textContent = 'Delete Product'
        button_two.textContent = 'Add to cart'
        

        div1.classList.add('products-first')
        div2.classList.add('image')
        div3.classList.add('paragraph-icon')
        div4.classList.add('item_check')
        paragraph_one.classList.add('paragraph-icon')
        button_one.classList.add('Delete_btn')
        button_two.classList.add('button_two')

       products_container.appendChild(div1)
       div1.appendChild(div2)
       div2.appendChild(div3)
       div3.appendChild(paragraph_one)
       div3.appendChild(div4)
       div4.appendChild(button_two)
       div4.appendChild(button_one)
        

        button_two.addEventListener('click', function(){
            button_two.textContent = 'Added'
            //if i click on the button again it will go back to the original text
            button_two.addEventListener('click', function(){
                button_two.textContent = 'Add to cart'
            })
        })
    }}





get_products(api_url)


const input = document.getElementById('search')
const card = document.querySelectorAll(".products-first");

let timer;
let sec = 500;

function live_search(){
   for (let i=0; i<card.length; i++ ){
    if(card[i].innerText.toLowerCase().includes(input.value.toLowerCase())){
       card[i].classList.remove("hidden")
    }else{
        card[i].classList.add("hidden")
    }
   }
}

input.addEventListener("keyup", function(){
    clearTimeout(timer);
    timer = setTimeout(live_search,1000)
})