document.querySelector('.hamburgerButton').addEventListener('click', () => {
    document.querySelector('.app-bar__navigation').classList.toggle('open')
    document.querySelector('main').classList.toggle('blurred')
  });