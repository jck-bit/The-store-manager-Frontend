document.getElementById("back").addEventListener('click', function(){
    window.location.href = "../Home page/Home.html"
})

document.getElementById("logout").addEventListener('click', function(){
    window.location.href = "../index.html"
})

const api_url = "http://127.0.0.1:5000/sales"

//get all sales from api with fetch and authorisation from api
async function get_sales(url){
    response = await fetch(url)
    data  =  await response.json()
    console.log(data)

    sales_container = document.getElementById('sales_container')

    for (let i = 0; i< data.length; i++){
      const div_1 = document.createElement('div')
      const div_2 = document.createElement('div')
      const p_1 = document.createElement('p')
      const p_2 = document.createElement('p')
      const p_3 = document.createElement('p')

      p_1.textContent = data[i].name
      p_2.textContent = data[i].Today_sales
      p_3.textContent = data[i].Total_sales
      
     div_1.classList.add('one-sale')
     div_2.classList.add('sales-info')

     div_1.appendChild(div_2)
     div_2.appendChild(p_1)
     div_2.appendChild(p_2)
     div_2.appendChild(p_3)
     sales_container.appendChild(div_1)
    
    }
}

get_sales(api_url);
