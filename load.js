window.addEventListener("load", function() {
  var entry = document.querySelectorAll('div.hentry');
  var title = entry[0].querySelector('.single-entry-title');
  var bar = entry[0].querySelector('.entry-info');
  title.parentNode.insertBefore(bar, title);
  title.style.clear = "both";
}, false);
