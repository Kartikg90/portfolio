// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Terminal type-on effect (single orchestrated moment on load)
const terminalBody = document.getElementById('terminalBody');
const lines = [
  { text: '$ whoami', pause: 300 },
  { text: 'kartik_gupta — btech cse, batch 5', pause: 500 },
  { text: '$ cat skills.txt', pause: 300 },
  { text: 'html · css · javascript · c · python · dsa', pause: 500 },
  { text: '$ git log --oneline -3', pause: 300 },
  { text: 'day 100/100  finish dsa streak', pause: 150 },
  { text: 'day 099/100  binary trees', pause: 150 },
  { text: 'day 098/100  linked lists', pause: 500 },
  { text: '$ ./open-to-work --role=frontend', pause: 0 },
];

function typeTerminal() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    terminalBody.textContent = lines.map(l => l.text).join('\n');
    return;
  }

  let lineIndex = 0;
  let charIndex = 0;
  let output = '';

  function typeChar() {
    if (lineIndex >= lines.length) {
      terminalBody.innerHTML = output + '<span class="cursor"></span>';
      return;
    }
    const current = lines[lineIndex];
    if (charIndex < current.text.length) {
      output += current.text[charIndex];
      terminalBody.textContent = output;
      charIndex++;
      setTimeout(typeChar, 18);
    } else {
      output += '\n';
      lineIndex++;
      charIndex = 0;
      setTimeout(typeChar, current.pause);
    }
  }
  typeChar();
}

typeTerminal();
