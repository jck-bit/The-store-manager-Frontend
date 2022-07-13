const api_url = "http://127.0.0.1:5000/products";


async function getProducts(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

container = document.getElementById("container");
list = document.getElementById("list");
list2 = document.getElementById("list-two");
list3 = document.getElementById("list-three");
//create a div and add data to the list

for (let i = 0; i < data.length; i++) {

    const ul1 = document.createElement("ul");
    const li1 = document.createElement("li");

    const ul2 = document.createElement("ul");
    const li2 = document.createElement("li");

    const ul3 = document.createElement("ul");
    const li3 = document.createElement("li");

    //add data to the lists 
    li1.textContent = data[i].name
    li2.textContent = data[i].Category
    li3.textContent = data[i].Quantity
    
    //add classes to the lists
    ul1, ul2, ul3.classList.add("ul-me");

    //append the lists to the div
    ul1.appendChild(li1);
    list.appendChild(ul1);

    ul2.appendChild(li2);
    list2.appendChild(ul2);

    ul3.appendChild(li3);
    list3.appendChild(ul3);
    container.appendChild(list3, list, list2);

    }
}

getProducts(api_url);

