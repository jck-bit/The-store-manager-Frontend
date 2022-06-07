function buttonClicked(){
    window.location.href = "./create.html";
}

window.onload=function(){
  var btn = document.getElementById("admin");
  btn.addEventListener("click", buttonClicked, true);
}

document.getElementById("logout").addEventListener('click', function(){
  window.location.href = './Login.html'
})