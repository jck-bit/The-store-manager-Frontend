function buttonClicked(){
  window.location.href = "./admin.html";
}

window.onload=function(){
var btn = document.getElementById("edit");
btn.addEventListener("click", buttonClicked, true);
}

document.getElementById("sales").addEventListener("click", function(){
  window.location.href = "../sales/sales.html";
});

document.getElementById("yoo").addEventListener('click', function(){
    window.location.href = "./Account.html";
  });

  document.getElementById("back").addEventListener('click', function(){
    window.location.href = "./Login.html";
  });
