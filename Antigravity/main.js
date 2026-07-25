/* ===== main.js — Luminal Portfolio Interactions ===== */

(() => {
  'use strict';

  // ── NAV SCROLL EFFECT ──────────────────────────────────────────────
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── HAMBURGER MENU ─────────────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ── INTERSECTION OBSERVER — Reveal on scroll ───────────────────────
  const revealEls = document.querySelectorAll(
    '.card, .ai-feature, .stat, .process-step, .about__text, .about__visual, .section-header, .contact__text, .contact-form'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings
        const siblings = [...entry.target.parentElement.children];
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 90);
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObs.observe(el));

  // ── AI FEATURES VISIBILITY ─────────────────────────────────────────
  const aiFeatureObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        aiFeatureObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.ai-feature').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.12}s`;
    aiFeatureObs.observe(el);
  });

  // ── COUNTER ANIMATION ──────────────────────────────────────────────
  const counters = document.querySelectorAll('.stat__number[data-target]');
  const easeOutQuad = t => 1 - (1 - t) * (1 - t);

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      el.textContent = Math.round(easeOutQuad(progress) * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    };
    requestAnimationFrame(tick);
  };

  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObs.observe(c));

  // ── HERO WORD CYCLE ────────────────────────────────────────────────
  const heroWord = document.getElementById('hero-word');
  const words = ['Architect', 'Strategist', 'Visionary', 'Engineer'];
  let wordIdx = 0;

  if (heroWord) {
    setInterval(() => {
      heroWord.style.opacity = '0';
      heroWord.style.transform = 'translateY(-12px)';
      heroWord.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

      setTimeout(() => {
        wordIdx = (wordIdx + 1) % words.length;
        heroWord.textContent = words[wordIdx];
        heroWord.style.transform = 'translateY(12px)';
        heroWord.style.transition = 'none';

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            heroWord.style.opacity = '1';
            heroWord.style.transform = 'translateY(0)';
            heroWord.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          });
        });
      }, 400);
    }, 3500);
  }

  // ── 3D CARD TILT ──────────────────────────────────────────────────
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width  / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -6;
      const rotY = ((x - cx) / cx) * 6;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s var(--ease-out)';
      setTimeout(() => { card.style.transition = ''; }, 500);
    });
  });

  // ── CONTACT FORM ──────────────────────────────────────────────────
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('form-submit');
      btn.textContent = '✓ Message Sent';
      btn.style.background = 'linear-gradient(135deg, #3a9e6e, #1a7a50)';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 4000);
    });
  }

  // ── SMOOTH ANCHOR SCROLL ──────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── CURSOR GLOW (desktop) ─────────────────────────────────────────
  if (window.matchMedia('(pointer: fine)').matches) {
    const glow = document.createElement('div');
    glow.style.cssText = `
      position: fixed; pointer-events: none; z-index: 9999;
      width: 300px; height: 300px; border-radius: 50%;
      background: radial-gradient(circle, rgba(186,158,255,0.06) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      transition: opacity 0.3s;
      top: 0; left: 0;
    `;
    document.body.appendChild(glow);

    let mx = 0, my = 0, gx = 0, gy = 0;
    window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });

    const moveGlow = () => {
      gx += (mx - gx) * 0.08;
      gy += (my - gy) * 0.08;
      glow.style.left = gx + 'px';
      glow.style.top  = gy + 'px';
      requestAnimationFrame(moveGlow);
    };
    moveGlow();
  }

})();
