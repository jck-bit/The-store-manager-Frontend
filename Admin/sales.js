const sales_url = ' http://127.0.0.1:5000/sales'

const fetchSales =async (url) =>{
    response = await fetch(url)
    data = await response.json()
    console.log(data.sales)

    sales_container = document.getElementById('sales_container')
}

fetchSales(sales_url)