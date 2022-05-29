function buttonClicked(){
  window.location.href = "./admin.html";
}

window.onload=function(){
var btn = document.getElementById("edit");
btn.addEventListener("click", buttonClicked, true);
}


// function Hello(){
//   window.location.href = "../sales/sales.html";
// }

// window.onload=function(){
// var btn = document.getElementById("sales");
// btn.addEventListener("click", Hello, true);
// }


document.getElementById("sales").addEventListener("click", function(){
  window.location.href = "../sales/sales.html";
});