const smoke = document.getElementById('smoke');

function createParticle(x, y) {
  const particle = document.createElement('div');
  particle.classList.add('smoke-particle');
  particle.style.left = x + 'px';
  particle.style.top = y + 'px';
  smoke.appendChild(particle);
  setTimeout(() => particle.remove(), 5000);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;
  const numParticles = random(1, 5);
  for (let i = 0; i < numParticles; i++) {
    createParticle(x, y);
  }
});

setInterval(() => {
  const particles = document.querySelectorAll('.smoke-particle');
  particles.forEach(particle => {
    particle.style.backgroundColor = `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, 0.5)`;
  });
}, 1000);


const discordid = document.querySelector('#discordid');

discordid.addEventListener('click', () => {
  navigator.clipboard.writeText(discordid.innerText);
});


function copyText() {
  var text = "/discordid.txt";
  navigator.clipboard.writeText(text);
  showNotification();
}

const button = document.getElementById("discord-button");
fetch('/server.txt')
  .then(response => response.text())
  .then(data => {
    button.href = data.trim(); // set the href attribute of the button to the content of server.txt
  })
  .catch(error => console.error(error));


function showNotification() {
  var notification = document.createElement("div");
  notification.innerHTML = "Discord copied successfully.";
  notification.style.position = "fixed";
  notification.style.bottom = "20px";
  notification.style.right = "20px";
  notification.style.backgroundColor = "black";
  notification.style.color = "white";
  notification.style.padding = "10px";
  notification.style.borderRadius = "5px";
  notification.style.opacity = 0;
  document.body.appendChild(notification);

  setTimeout(function() {
    notification.style.opacity = 1;
  }, 100);

  setTimeout(function() {
    notification.style.opacity = 0;
    setTimeout(function() {
      document.body.removeChild(notification);
    }, 1000);
  }, 3000);
}