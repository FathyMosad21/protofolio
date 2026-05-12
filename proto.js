function toggleMenu() {
    const btn = document.getElementById('burger');
    const drawer = document.getElementById('drawer');
    btn.classList.toggle('open');
    drawer.classList.toggle('open');
}

function closeMenu() {
    document.getElementById('burger').classList.remove('open');
    document.getElementById('drawer').classList.remove('open');
}
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const devops = [
  'docker','kubectl','terraform','ansible','jenkins','aws','git','ci/cd',
  'nginx','linux','python','bash','yaml','json','helm','k8s','vpc','ec2','s3',
  'sudo','ssh','chmod','grep','curl','ping','deploy','build','push','pull'
];

const fontSize = 12;
const cols = Math.floor(canvas.width / fontSize);
const drops = Array(cols).fill(0).map(() => -Math.floor(Math.random() * 30));
const words = Array(cols).fill('').map(() => devops[Math.floor(Math.random() * devops.length)]);
const wordPos = Array(cols).fill(0);
const speeds = Array(cols).fill(0).map(() => 0.3 + Math.random() * 0.4);
const cyan = '#00e5ff', purple = '#7c3aed', green = '#10b981';
const colPalette = Array(cols).fill(0).map(() => {
  const r = Math.random();
  return r < 0.5 ? cyan : r < 0.8 ? purple : green;
});

function drawMatrix() {
  ctx.fillStyle = 'rgba(6,10,18,0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < cols; i++) {
    const word = words[i];
    const color = colPalette[i];
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    if (wordPos[i] < word.length) {
      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${fontSize}px monospace`;
      ctx.fillText(word[wordPos[i]], x, y);
    }
    for (let j = 1; j < word.length; j++) {
      ctx.globalAlpha = (1 - j / word.length) * 0.9;
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;
      if (wordPos[i] - j >= 0 && wordPos[i] - j < word.length) {
        ctx.fillText(word[wordPos[i] - j] || '', x, y - j * fontSize);
      }
    }
    ctx.globalAlpha = 1;
    drops[i] += speeds[i];
    wordPos[i] = Math.floor(drops[i]) % (word.length + 5);
    if (drops[i] * fontSize > canvas.height + 200) {
      drops[i] = -Math.floor(Math.random() * 20);
      words[i] = devops[Math.floor(Math.random() * devops.length)];
      colPalette[i] = Math.random() < 0.5 ? cyan : Math.random() < 0.6 ? purple : green;
    }
  }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
