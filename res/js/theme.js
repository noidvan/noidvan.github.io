(() => {
  'use strict';
  const key = 'yifan-appearance';
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const valid = value => value === 'light' || value === 'dark' ? value : null;
  let preference = null;
  let theme = 'dark';
  try {
    preference = valid(localStorage.getItem(key));
  } catch { /* The switch still works when browser storage is unavailable. */ }

  function apply(value) {
    theme = value === 'light' ? 'light' : 'dark';
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content', theme === 'dark' ? '#1c1c1e' : '#ffffff'
    );
    const control = document.querySelector('.appearance');
    if (control) {
      const next = theme === 'dark' ? 'Light' : 'Dark';
      control.querySelector('span').textContent = `${next} mode`;
      control.setAttribute('aria-label', `Switch to ${next.toLowerCase()} mode`);
    }
  }

  // Run before the stylesheet is loaded to avoid a flash of the wrong theme.
  const update = () => apply(preference || (system.matches ? 'dark' : 'light'));
  update();
  system.addEventListener('change', update);
  document.addEventListener('DOMContentLoaded', () => {
    const control = document.querySelector('.appearance');
    control.hidden = false;
    apply(theme);
    control.addEventListener('click', () => {
      preference = theme === 'dark' ? 'light' : 'dark';
      update();
      try { localStorage.setItem(key, theme); } catch { /* Session-only preference. */ }
    });
  });
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) {
      preference = valid(event.newValue);
      update();
    }
  });
})();
