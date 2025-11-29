document.addEventListener("html-included", () => {

  /* ========== DROPDOWN ========== */
  const drop = document.getElementById('productsDropdown');
  const dropBtn = drop?.querySelector('.dropbtn');
  const dropContent = drop?.querySelector('.dropdown-content');

  if (drop && dropBtn && dropContent) {
    dropBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = drop.classList.toggle('open');
      dropBtn.setAttribute('aria-expanded', open);
      dropContent.setAttribute('aria-hidden', !open);
    });

    document.addEventListener('click', (e) => {
      if (!drop.contains(e.target)) {
        drop.classList.remove('open');
        dropBtn.setAttribute('aria-expanded', 'false');
        dropContent.setAttribute('aria-hidden', 'true');
      }
    });
  }

  /* ========== MOBILE NAV ========== */
  const ham = document.getElementById('hamburger');
  const nav = document.querySelector('.nav-links');

  if (ham) {
    ham.addEventListener('click', () => {
      const open = nav.classList.toggle('mobile-open');
      ham.setAttribute('aria-expanded', open);
    });
  }

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      if (nav.classList.contains('mobile-open')) {
        nav.classList.remove('mobile-open');
        ham.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* =========================================
     ✅ ACTIVE PAGE HIGHLIGHT (FINAL WORKING)
     ========================================= */
  const currentPage = window.location.pathname.toLowerCase().trim();

  document.querySelectorAll(".nav-links a, .dropdown-content a").forEach(link => {
    let linkTarget = link.getAttribute("href");

    if (!linkTarget) return;

    linkTarget = linkTarget.toLowerCase().trim();

    // Exact match for pages
    if (currentPage.includes(linkTarget)) {
      link.classList.add("active");
    }
  });

});
