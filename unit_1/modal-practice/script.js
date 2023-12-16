const openButton =document.getElementById('model-open');

const modalContainer =document.getElementById('modal-container');

openButton.addEventListener('click') (event) => {
    modalContainer.classList.toggle('hidden');
    modalContainer.classList.toggle('shown');
    })