var activeNavlink = document.querySelectorAll('nav a[href^="/' + location.pathname.split("/")[1] + '"]');
activeNavlink[0].classList.add('active');