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


    //create new div element
    const newDIV6 = document.createElement('div');
    const newDIV5 = document.createElement('div');
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
    newDIV6.classList.add('moral')
    newDIV5.classList.add('admin');
    newDIV4.classList.add('container-left')
    newDIV3.classList.add('image');
    newDIV.classList.add('paragraph-icon');
    newPara.classList.add('p');
    newDIV2.classList.add('item-check');
    newButton.classList.add('remove');

    
    //append the new div to the dom
    newDIV6.appendChild(newDIV5);
    newDIV5.appendChild(newDIV4);
    newDIV4.appendChild(newDIV3);
    newDIV3.appendChild(newDiv);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newDIV);
    newDIV.appendChild(newPara);
    newDIV.appendChild(newDIV2);
    newDIV2.appendChild(newButton);
    document.querySelector('#moral').appendChild(newDIV6);
      
    //add event listener to the button
    newButton.addEventListener('click', function(){
        newDIV6.remove();
    });

  });
