// Replace Img Url
var $imgSrc = document.querySelector('.img-src');
var $photoUrl = document.querySelector('.photoUrl');
$photoUrl.addEventListener('input', function (event) {
  $imgSrc.src = document.querySelector('.photoUrl').value;
});

// Submit entry form
// var $form = document.querySelector('.main-form');
// $form.addEventListener('submit', function (event) {
// })
