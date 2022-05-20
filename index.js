let toggleModalButton = document.querySelector('.toggle-modal');
let body = document.querySelector('body');
let popup = document.querySelector('.popup')

document.addEventListener('click', function (evt) {
  if(evt.target === body && popup.classList.contains('active')) {
    popup.classList.remove('active')

  }

}, false);





toggleModalButton.addEventListener('click', () => {
    popup.classList.toggle('active')

    if (popup.classList.contains('active')) {
      toggleModalButton.innerText = "Hide Me";
    } else {
      toggleModalButton.innerText = "Show Me";

    }
  })


function modal(obj) {

  let target = document.querySelector(obj.selector);

  let modalDiv = document.createElement('div');
  modalDiv.classList.add('modal');

  let modalTitle = document.createElement('h2');
  modalTitle.innerText = obj.title;

  let modalText = document.createElement('p');
  modalText.innerText = obj.text;
  
  let buttonDiv = document.createElement('div');
  buttonDiv.classList.add('button-flex')
  modalDiv.append(modalTitle);

  for (let i = 0; i < obj.buttons.length; i++) {
    let button = document.createElement('button');
    button.innerText = obj.buttons[i].title;
    button.addEventListener('click', obj.buttons[i].callback, false);
    buttonDiv.append(button);
  }

  modalDiv.append(modalTitle)
  modalDiv.append(modalText)
  modalDiv.append(buttonDiv)
  target.append(modalDiv)

  

  

}

  modal({
    selector: '.popup',
    title: 'Are you sure?',
    text: 'All your data will be deleted...',
    buttons: [
        {
            title: 'Cancel',
            type: 'secondary',
            callback: () => { 
              popup.classList.remove('active')

             }
        },
        {
            title: 'Yes, I\'m sure',
            type: 'primary',
            callback: () => { console.log('delete system32'); }
        }
    ]
})