var countdown = false,
  timer = false,
  started = false;

document.querySelector('button.set').addEventListener('click', function() {
  /* Select current tab */
  var currentTab = document.querySelector('.is-active');
  if (/#timer-panel$/.test(currentTab.href)) {
    countdown = true;
    timer = false;
  } else {
    timer = true;
    countdown = false;
  }
  /* Check state */
  if (started) {
    started = false;
    document.querySelector('i.play').innerHTML = 'play_arrow';
  } else {
    started = true;
    document.querySelector('i.play').innerHTML = 'stop';
  }
});
