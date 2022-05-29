function remove(){
  var  item = document.getElementById("shopping")
    item.addEventListener('click', function(){
        item.remove();
    })
}

document.getElementById("back").addEventListener('click', function(){
    window.location.href = "../Home page/index.html"
})