var el = document.getElementById('keycode');

document.addEventListener('keydown', function(event) {
  el.innerHTML = event.keyCode;
  console.log(event);
});
