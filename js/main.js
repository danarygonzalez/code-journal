// Replace Img Url
var $imgSrc = document.querySelector('.img-src');
var $photoUrl = document.querySelector('#url');
$photoUrl.addEventListener('input', function (event) {
  $imgSrc.src = $photoUrl.value;
  if ($imgSrc.src === 'http://localhost:5500/index.html') {
    $imgSrc.src = '/images/placeholder-image-square.jpg';
  }
});

// Submit entry form
var $form = document.querySelector('.main-form');
var $title = document.querySelector('#title');
var $notes = document.querySelector('#notes');
$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var formObject = {
    title: $title.value,
    photoUrl: $photoUrl.value,
    notes: $notes.value
  };
  formObject.entryId = data.nextEntryId;
  data.entries.unshift(formObject);
  data.nextEntryId++;
  $imgSrc.src = '/images/placeholder-image-square.jpg';
  $form.reset();
});
