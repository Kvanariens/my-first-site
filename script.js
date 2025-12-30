function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({behavior: 'smooth'});
}

function setMood(mood) {
  document.body.classList.remove('sad', 'happy');
  document.body.classList.add(mood);


  if (mood === 'sad') {
 
    for (let i = 0; i < 100; i++) {
      const drop = document.createElement('div');
      drop.classList.add('rain-drop');
      drop.style.left = Math.random() * window.innerWidth + 'px';
      drop.style.animationDuration = 0.5 + Math.random() * 0.5 + 's';
      document.body.appendChild(drop);
    }
  } else if (mood === 'happy') {

    const colors = ['#ff0', '#0f0', '#00f', '#f0f', '#0ff', '#f80'];
    for (let i = 0; i < 100; i++) {
      const conf = document.createElement('div');
      conf.classList.add('confetti');
      conf.style.left = Math.random() * window.innerWidth + 'px';
      conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      conf.style.animationDuration = 2 + Math.random() * 2 + 's';
      document.body.appendChild(conf);
    }
  }
}

function setMood(type) {
  document.body.classList.remove('sad', 'happy');

  // Удаляем старые элементы
  document.querySelectorAll('.rain-drop, .candy').forEach(el => el.remove());

  if (type === 'sad') {
    document.body.classList.add('sad');
    createRain();
  }

  if (type === 'happy') {
    document.body.classList.add('happy');
    createCandy();
  }
}

function createRain() {
  for (let i = 0; i < 120; i++) {
    let drop = document.createElement('div');
    drop.classList.add('rain-drop');
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDelay = Math.random() + "s";
    document.body.appendChild(drop);
  }
}

function createCandy() {
  for (let i = 0; i < 80; i++) {
    let candy = document.createElement('div');
    candy.classList.add('candy');
    candy.style.left = Math.random() * 100 + "vw";
    candy.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(candy);
  }
}
