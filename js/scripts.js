function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
    node.classList.remove('animated', animationName)
    node.removeEventListener('animationend', handleAnimationEnd)

    if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

animateCSS('h3', 'fadeInUpBig', function() {
  setTimeout(function(){
    animateCSS('h3', 'flash');
    animateCSS('h3', 'infinite');
    animateCSS('h3', 'slower');
  }, 1000);
});