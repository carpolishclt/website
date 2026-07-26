(() => {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-site-nav]');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuButton.classList.toggle('is-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        menuButton.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealItems.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  document.querySelectorAll('[data-file-input]').forEach((input) => {
    const label = input.closest('.file-box')?.querySelector('[data-file-label]');
    const error = input.closest('.field')?.querySelector('[data-file-error]');
    const maxBytes = 10 * 1024 * 1024;

    input.addEventListener('change', () => {
      const files = Array.from(input.files || []);
      const total = files.reduce((sum, file) => sum + file.size, 0);
      if (error) error.textContent = '';

      if (!files.length) {
        if (label) label.textContent = 'Choose up to 4 photos';
        return;
      }

      if (files.length > 4) {
        input.value = '';
        if (error) error.textContent = 'Please choose no more than 4 photos.';
        if (label) label.textContent = 'Choose up to 4 photos';
        return;
      }

      if (total > maxBytes) {
        input.value = '';
        if (error) error.textContent = 'The total upload must be 10 MB or less.';
        if (label) label.textContent = 'Choose up to 4 photos';
        return;
      }

      if (label) label.textContent = files.length === 1 ? files[0].name : `${files.length} photos selected`;
    });
  });

  const lightbox = document.querySelector('[data-lightbox]');
  if (lightbox && typeof lightbox.showModal === 'function') {
    const lightboxImage = lightbox.querySelector('img');
    const lightboxTitle = lightbox.querySelector('[data-lightbox-title]');
    const closeButton = lightbox.querySelector('[data-lightbox-close]');

    document.querySelectorAll('[data-lightbox-trigger]').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        lightboxImage.src = trigger.dataset.image || '';
        lightboxImage.alt = trigger.dataset.alt || '';
        lightboxTitle.textContent = trigger.dataset.title || '';
        lightbox.showModal();
      });
    });

    closeButton?.addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', (event) => {
      const rect = lightbox.getBoundingClientRect();
      const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
      if (outside) lightbox.close();
    });
  }
})();
