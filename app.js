const modalBtn = document.querySelector('.modal-btn');
const modalContainer = document.querySelector('.moda-container');
const modalClose = document.querySelector('.close');
const modalArea = document.querySelector('.modal-area');
const editing = document.querySelector('#editing');
const discrd = document.querySelector('#discrd');
const aler_wrap = document.querySelector('.customalert-wrap');
const alertClose = document.querySelector('.alert-area .alert-header .close');
const alert_area = document.querySelector('.alert-area');
const saveBtn = document.querySelector('#save');



/**
 * Modal apearence and Save
 */
modalBtn.addEventListener('click', function(){
    modalContainer.classList.add('active');

});
saveBtn.addEventListener('click', function(){
    modalContainer.classList.remove('active');

});


/**
 * Modal ALert apearence and close
 * 
 */


modalClose.addEventListener('click', function(){
    aler_wrap.classList.add('active');
    alert_area.classList.add('active');
    

});

alertClose.addEventListener('click', function(){
    aler_wrap.classList.remove('active');


});
editing.addEventListener('click', function(){
    aler_wrap.classList.remove('active');

});
discrd.addEventListener('click', function(){
    modalContainer.classList.remove('active');

});
discrd.addEventListener('click', function(){
    aler_wrap.classList.remove('active');

});


