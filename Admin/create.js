function buttonClicked(){
  window.location.href = "../Products/product.html"
}

window.onload=function(){
var btn = document.getElementById("edit");
btn.addEventListener("click", buttonClicked, true);
}
