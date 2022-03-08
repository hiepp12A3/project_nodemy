// giai thich
// tao bien nhan gia tri cua cac class ben html
var modal = document.querySelector('.modal');
var btnOpen = document.querySelector('.open-modal-btn');
var iconClose = document.querySelector('.modal__header i');
var btnColse = document.querySelector('.modal__footer button');

// tao funtion khi model co gia tri la hide thi hien thi
function toggleModal(e) {
    console.log(e.target)
    modal.classList.toggle('hide')
}


btnOpen.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
btnColse.addEventListener('click', toggleModal);
modal.addEventListener('click', function(e) {
    if (e.target == e.currentTarget) {
        toggleModal()
    }
});