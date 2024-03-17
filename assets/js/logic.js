const themeSwitcher = document.querySelector('.icon');
const containerLight = document.querySelector('.container-light');


let mode = 'light';


themeSwitcher.addEventListener('click', function () {
    // If mode is dark, apply light background
    if (mode === 'dark') {
      mode = 'light';
      containerLight.setAttribute('class', 'light');
      themeSwitcher.textContent = "🌞"
    }
    // If mode is light, apply dark background
    else {
      mode = 'dark';
      containerLight.setAttribute('class', 'dark');
      themeSwitcher.textContent = "🌚"
    }
  });