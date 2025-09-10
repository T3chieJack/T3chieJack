// --- Theme toggle with localStorage ---
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light') root.classList.add('light');
toggle?.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});

// --- Dynamic year ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Project data (edit here or fetch a JSON) ---
const projects = [
  {
    title: "Project One",
    description: "Short one-liner describing what it does.",
    url: "https://github.com/yourusername/project-one",
    tags: ["JavaScript","API"]
  },
  {
    title: "Project Two",
    description: "A neat tool with a small, focused scope.",
    url: "https://github.com/yourusername/project-two",
    tags: ["TypeScript","Web"]
  },
  {
    title: "Project Three",
    description: "An open-source experiment worth a look.",
    url: "https://github.com/yourusername/project-three",
    tags: ["Python","CLI"]
  }
];

// --- Render projects ---
const grid = document.getElementById('projectGrid');
projects.forEach(p => {
  const a = document.createElement('a');
  a.className = 'card';
  a.href = p.url;
  a.target = '_blank';
  a.rel = 'noreferrer noopener';
  a.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <div class="tags">
      ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>
  `;
  grid.appendChild(a);
});
