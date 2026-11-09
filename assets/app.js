(function () {
  'use strict';
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var stored = null;
  try { stored = localStorage.getItem('notes-theme'); } catch (e) { /* disabled storage */ }
  if (stored === 'dark' || stored === 'light') root.dataset.theme = stored;
  else if (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) root.dataset.theme = 'dark';
  toggle.addEventListener('click', function() {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('notes-theme', next); } catch (e) { /* optional */ }
  });
  var nav = [].slice.call(document.querySelectorAll('#toc a'));
  var sections = nav.map(function(a) { return document.getElementById(a.hash.slice(1)); }).filter(Boolean);
  var mobile = document.getElementById('mobile-sections');
  mobile.addEventListener('change', function() { if (this.value) window.location.hash = this.value; });
  function scrollUpdate() {
    var all = document.documentElement.scrollHeight - window.innerHeight;
    var progress = all > 0 ? Math.max(0, Math.min(100, scrollY * 100 / all)) : 0;
    document.getElementById('read-progress').style.width = progress + '%';
    var current = sections[0] && sections[0].id;
    var y = window.scrollY + 140;
    for (var i=0; i<sections.length; i++) {
      if (sections[i].getBoundingClientRect().top + window.scrollY <= y) current = sections[i].id;
      else break;
    }
    nav.forEach(function(a) { var yes = decodeURIComponent(a.hash.slice(1)) === current; a.classList.toggle('is-active', yes); if(yes) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
  }
  var running = false;
  window.addEventListener('scroll', function() { if(!running) { running=true; requestAnimationFrame(function(){scrollUpdate(); running=false;}); } }, {passive:true});
  window.addEventListener('resize', scrollUpdate);
  scrollUpdate();
})();
