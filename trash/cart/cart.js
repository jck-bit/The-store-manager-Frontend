function remove(){
  var  item = document.getElementById("shopping")
    item.addEventListener('click', function(){
        item.remove();
    })
}

document.getElementById("back").addEventListener('click', function(){
    window.location.href = "../Home page/Home.html"
})

document.getElementById("logout").addEventListener('click', function(){
    window.location.href = "../index.html"
})

document.getElementById("klick").addEventListener('click', function(){
    window.location.href = "./Cart.html"
})


// document.getElementById("logout").addEventListener('click', function(){
//     window.location.href = "../index.html"
// })


