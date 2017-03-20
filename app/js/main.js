var navToggle = document.getElementsByClassName(`navbar__toggle`)[0];
var navList = document.getElementsByClassName(`navbar__list`)[0];

navToggle.addEventListener(`click`, function() {
  console.log(`working`);
  if(navList.style.opacity == 0) {
    navList.style.opacity = 1;
  } else {
    navList.style.opacity = 0;
  }
})
