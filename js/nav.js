/*
Thank you once again, Kevin Powell!
https://www.youtube.com/watch?v=V-CBdlfCPic
*/

const primaryHeader = document.querySelector('header');
const scrollWatcher = document.getElementById('hero').querySelector('p.quote');

scrollWatcher.setAttribute('data-scroll-watcher', '');

const navObserver = new IntersectionObserver((entries) => {
  primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting);
});

navObserver.observe(scrollWatcher);