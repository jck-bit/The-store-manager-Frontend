function buttonClicked(){
  window.location.href = "./admin.html";
}

window.onload=function(){
var btn = document.getElementById("edit");
btn.addEventListener("click", buttonClicked, true);
}



document.getElementById("yoo").addEventListener('click', function(){
    window.location.href = "./Account.html";
  });

  document.getElementById("back").addEventListener('click', function(){
    window.location.href = "./Login.html";
  });

  document.getElementById("inventory").addEventListener('click', function(){
    window.location.href = "./product.html";
  });

  document.getElementById("klasik").addEventListener('click', function(){
    window.location.href = "./admin-profile.html";
  });

