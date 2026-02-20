import { projects, technicalSkills, softSkills } from './data/projects.js';

/* ══════════════════════════════════════
   EXPERIENCE DATA (from Lovable scrape)
   ══════════════════════════════════════ */
const experience = [
  {
    period: 'Jun 2025 – Atual',
    role: 'Técnico de Planejamento Sênior',
    company: 'Ocyan',
    desc: 'Atuo na identificação e implementação de melhorias em processos administrativos, propondo soluções que otimizam a eficiência e a produtividade, criando e corrigindo relatórios do sistema com SQL, e desenvolvimento de dashboards no Power BI. Faço a intermediação entre planejamento, desenvolvimento e gerência, alinhando expectativas e objetivos do negócio.',
  },
  {
    period: 'Mar 2024 – Jun 2025',
    role: 'Técnico de Planejamento Pleno',
    company: 'Wood – FPSO Peregrino (Equinor)',
    desc: 'Atuei como técnico de planejamento on-shore no FPSO Peregrino da Equinor, responsável por reprogramar ordens no SAP, nivelar operações e centros de trabalho, controlar o RDO/RDC e PoB da equipe de manutenção, e preparar relatórios fotográficos das atividades realizadas a bordo.',
  },
  {
    period: 'Mai 2023 – Fev 2024',
    role: 'Técnico de Planejamento de Medição',
    company: 'TD Construtora',
    desc: 'Conferência dos EAP\'s e Memória de Cálculos dos custos, relatório de atividades, custos e medições das obras e RDO\'s. Desenvolvimento de planilhas/ferramentas para rotinas administrativas.',
  },
  {
    period: 'Jul 2022 – Mai 2023',
    role: 'Planejador de Manutenção',
    company: 'Normatel Engenharia',
    desc: 'Responsável pelo Planejamento das atividades de refrigeração e suas respectivas demandas. Liberar e imprimir ordens de manutenção corretiva e preventiva no SAP, programação semanal, lançamento de retorno das atividades, cronograma com PEMT, pinturas e andaimes.',
  },
  {
    period: 'Jul 2022 – Mai 2023',
    role: 'Aux de Planejamento / Fiscal Administrativo',
    company: 'Manserv LSI – Fiscalização Petrobras',
    desc: 'Atuei na Fiscalização da Petrobras, analisando o PCM, prazos de ordem de manutenção, relatórios, compras e índices, e criando automações.',
  },
  {
    period: 'Jan 2019 – Nov 2021',
    role: 'Multiplicador de Treinamento / Superv. Interino',
    company: 'Brasil Center Comunicações',
    desc: 'Fui responsável por uma equipe de 18 pessoas por 2 meses, como Líder substituto. Tive a oportunidade de ministrar treinamentos a distância, multiplicando o conhecimento aos novos colaboradores contratados em outro SITE.',
  },
  {
    period: 'Mar 2017 – Jan 2018',
    role: 'Soldado',
    company: 'Exército Brasileiro',
    desc: 'Serviço militar obrigatório no Exército Brasileiro.',
  },
];

/* ══════════════════════════════════════
   PAGE ROUTER
   ══════════════════════════════════════ */
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');

function showPage(pageId) {
  // Switch pages
  pages.forEach(p => {
    const isTarget = p.id === `page-${pageId}`;
    p.classList.toggle('active', isTarget);
    p.setAttribute('aria-hidden', isTarget ? 'false' : 'true');
  });

  // Update nav active state
  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Trigger skill animations when switching to currículo
  if (pageId === 'curriculo') {
    requestAnimationFrame(() => animateSkillBars());
  }

  // Trigger fade-ins for the new page
  requestAnimationFrame(() => observeFadeIns());
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.page;
    if (target) {
      showPage(target);
      // Close mobile menu
      closeMobileMenu();
    }
  });
});

/* ══════════════════════════════════════
   MOBILE MENU
   ══════════════════════════════════════ */
const hamburger = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

function closeMobileMenu() {
  hamburger?.classList.remove('open');
  hamburger?.setAttribute('aria-expanded', 'false');
  mobileMenu?.classList.remove('open');
  mobileMenu?.setAttribute('aria-hidden', 'true');
}

hamburger?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
});

/* ══════════════════════════════════════
   RENDER TIMELINE
   ══════════════════════════════════════ */
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  container.innerHTML = experience.map(item => `
    <div class="timeline-item fade-in">
      <p class="timeline-item__period">${item.period}</p>
      <h3 class="timeline-item__role">${item.role}</h3>
      <p class="timeline-item__company">${item.company}</p>
      <p class="timeline-item__desc">${item.desc}</p>
    </div>
  `).join('');
}

/* ══════════════════════════════════════
   RENDER SKILLS
   ══════════════════════════════════════ */
function renderSkills() {
  const container = document.getElementById('skillsContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="skills-group">
      <p class="skills-group__label">Hard Skills</p>
      <div class="soft-tags">
        ${technicalSkills.map(s => `<span class="soft-tag">${s.name}</span>`).join('')}
      </div>
    </div>

    <div class="skills-group">
      <p class="skills-group__label">Soft Skills</p>
      <div class="soft-tags">
        ${softSkills.map(s => `<span class="soft-tag">${s}</span>`).join('')}
      </div>
    </div>
  `;
}

function animateSkillBars() {
  document.querySelectorAll('.skill-bar__fill').forEach(bar => {
    bar.style.width = `${bar.dataset.level}%`;
  });
}

/* ══════════════════════════════════════
   RENDER PROJECTS
   ══════════════════════════════════════ */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = projects.map(p => `
    <a
      href="${p.notionUrl}"
      target="_blank"
      rel="noopener"
      class="project-card fade-in"
      aria-label="Ver projeto: ${p.title}"
    >
      <div class="project-card__visual" style="background:${p.gradient}">${p.icon}</div>
      <div class="project-card__body">
        <span class="project-card__category">${p.category}</span>
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__desc">${p.description}</p>
        <span class="project-card__link">Ver no Notion →</span>
      </div>
    </a>
  `).join('');
}

/* ══════════════════════════════════════
   SCROLL / FADE ANIMATIONS
   ══════════════════════════════════════ */
let fadeObserver;

function observeFadeIns() {
  if (fadeObserver) fadeObserver.disconnect();

  fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    fadeObserver.observe(el);
  });
}

/* ══════════════════════════════════════
   INIT
   ══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
  renderSkills();
  renderProjects();

  // Default to home page
  showPage('home');

  // Short delay to let DOM paint, then trigger fade-in for home
  setTimeout(() => observeFadeIns(), 100);
});
