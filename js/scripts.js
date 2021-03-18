document.addEventListener('DOMContentLoaded', () => {
  const themeStylesheet = document.getElementById('theme')
  const storedTheme = sessionStorage.getItem('theme');
  const themeToggle = document.getElementById('theme-toggle')
  if(storedTheme){
      themeStylesheet.href = storedTheme;
  }
  themeToggle.addEventListener('click', () => {
    // if it's light -> go dark
    if (themeStylesheet.href.includes('light')) {
      themeStylesheet.href = 'css/dark-theme.css'
      themeToggle.innerText = 'Hey, who turned out the lights?'
    } else {
      // if it's dark -> go light
      themeStylesheet.href = 'css/light-theme.css'
      themeToggle.innerText = 'Ouch, my eyes!'
    }
            // save the preference to localStorage
            sessionStorage.setItem('theme',themeStylesheet.href)
  })
})

