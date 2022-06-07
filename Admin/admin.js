function remove(){
    var item = document.getElementById('image');
    item.addEventListener('click', function(){
        item.remove();
    });                                                              
  }

const addItem = document.forms['add-item'];

addItem.addEventListener('submit', function(e){
    e.preventDefault();

    const value = addItem.querySelector('input[type="text"]').value;
    console.log(value);

 //const hello = document.querySelector("#image div")
    //create new div element
    const newDIV4 = document.createElement('div');

    const newDIV3 = document.createElement('div');

    const newDiv = document.createElement('div');
    //create an image
    const newImg = document.createElement('img');

    const newDIV = document.createElement('div');
    //paragraph item
    const newPara = document.createElement('p');
    //another div
    const newDIV2 = document.createElement('div');
    //create button
    const newButton = document.createElement('button');


    // add content to the new div
    newButton.textContent = 'Remove-item';
    newPara.textContent = value;

    //add content to the new image
    newImg.src = '../images /vanilla.jpg';
    newImg.alt = 'vanilla';
    newDIV3.classList.add('image')
    newDIV4.classList.add('newest');
    newDIV.classList.add('paragraph-icon');
    newPara.classList.add('p');
    newDIV2.classList.add('item-check');
    newButton.classList.add('remove');

    
    //append the new div to the dom
   newDIV4.appendChild(newDIV3);
    newDIV3.appendChild(newDiv);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newDIV);
    newDIV.appendChild(newPara);
    newDIV.appendChild(newDIV2);
    newDIV2.appendChild(newButton);
    document.querySelector('#newest').appendChild(newDIV4);


    //add event listener to the button
    newButton.addEventListener('click', function(){
        newDIV4.remove();
 
    })
  });

document.getElementById("back").addEventListener('click', function(){
    window.location.href = "./create.html"
})

document.getElementById("logout").addEventListener('click', function(){
  window.location.href = "./Login.html"
})

document.getElementById("click_me").addEventListener('click', function(){
  window.location.href = "./admin-profile.html"
})
