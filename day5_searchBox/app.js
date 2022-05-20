var btnSearch = document.querySelector('.search-box__btn');

btnSearch.addEventListener('click', function() {
    // parentElement lấy p.tử cha
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
});