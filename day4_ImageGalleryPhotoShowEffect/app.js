// lay tat ca anh
var images = document.querySelectorAll('.image img');

var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery__inner img');
var gallery = document.querySelector('.gallery');

var currenIndex = 0;

function showGallery() {

    // hien thi  

    if (currenIndex == 0) {
        prev.classList.add('hide')
    } else {
        prev.classList.remove('hide')
    }


    if (currenIndex == images.length - 1) {
        next.classList.add('hide')
    } else {
        next.classList.remove('hide')
    }

    galleryImg.src = images[currenIndex].src
    gallery.classList.add('show')

}

images.forEach((item, index) => {
    // tao bien item lang nghe su kien 'click' sau do thuc hien funtion
    item.addEventListener('click', function() {
        currenIndex = index
        showGallery()
    })
})

close.addEventListener('click', function() {
        gallery.classList.remove('show')
    })
    // nut ESC de tat
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27) {
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click', function() {
    if (currenIndex > 0) {
        currenIndex--
        showGallery()
    }
})

next.addEventListener('click', function() {
    if (currenIndex < images.length - 1) {
        currenIndex++
        showGallery()
    }
})