(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  // Footer year
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  // Projects timeline: the orange line fills as you scroll, and each node
  // turns orange once you have scrolled past it.
  let updateTimeline = () => {};
  const timeline = $('.timeline');
  if (timeline) {
    const progress = $('.timeline-progress', timeline);
    updateTimeline = () => {
      const viewportMark = window.innerHeight * 0.6;
      const box = timeline.getBoundingClientRect();
      progress.style.height = Math.min(Math.max(viewportMark - box.top, 0), box.height) + 'px';
      $$('.t-item', timeline).forEach((item) => {
        item.classList.toggle('is-passed', item.getBoundingClientRect().top < viewportMark);
      });
    };
    updateTimeline();
    addEventListener('scroll', updateTimeline, { passive: true });
    addEventListener('resize', updateTimeline);
  }

  // Projects filter: buttons carry data-filter, timeline items carry data-tags.
  const chips = $$('[data-filter]');
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      const wanted = chip.dataset.filter;
      $$('.t-item').forEach((item) => {
        const match = wanted === 'all' || item.dataset.tags.split(' ').includes(wanted);
        const wasHidden = item.hidden;
        item.hidden = !match;
        if (match && wasHidden) {
          item.classList.add('is-entering');
          item.addEventListener('animationend', () => item.classList.remove('is-entering'), { once: true });
        }
      });
      updateTimeline();
    });
  });

  // Project pages: highlight the current section in "On this page".
  const tocLinks = $$('.toc a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const linkFor = new Map(tocLinks.map((a) => [a.getAttribute('href').slice(1), a]));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        tocLinks.forEach((a) => a.removeAttribute('aria-current'));
        linkFor.get(entry.target.id)?.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-15% 0px -75% 0px' });
    linkFor.forEach((_, id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }
})();
