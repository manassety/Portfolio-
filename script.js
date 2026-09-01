/**
 * SETY VIDEOS AND MIXING LAB — Static Website JavaScript
 * Pure Vanilla JS + GSAP CDN Animations
 */

// Centralized Studio Contact & Config Metadata
const STUDIO_CONFIG = {
  brandName: "SETY VIDEOS AND MIXING LAB",
  phone: "+91 94124 78853",
  whatsapp: "+919412478853",
  email: "setydinesh@gmail.com",
  address: "Krishnapuri, Pithoragarh, Uttarakhand - 262501",
  instagram: "https://www.instagram.com/sety_videos_dinesh_sety/",
  facebook: "https://facebook.com/SetyVideos",
  youtube: "https://youtube.com/@setyvideosmixinglabdineshs3878?si=DhHKeX0A5Cn2NvAr",
  instagramHandle: "@sety_videos_dinesh_sety",
  facebookHandle: "Sety Videos",
  youtubeHandle: "@setyvideosmixinglabdineshs3878"
};

// Gallery Data Array for Lightbox Navigation
const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Royal Velvet Bride & Groom",
    category: "WEDDINGS",
    categoryLabel: "Weddings",
    src: "images/gallery/wedding-photo/DSC_6225.JPG.jpeg",
    caption: "Breathtaking royal wedding portrait featuring rich maroon velvet embroidered attire and traditional jewelry."
  },
  {
    id: 2,
    title: "Traditional Red Bridal Grace",
    category: "WEDDINGS",
    categoryLabel: "Weddings",
    src: "images/gallery/wedding-photo/DSC08475.JPG.jpeg",
    caption: "Exquisite red lehenga bridal portrait capturing intricate matha patti, nath, and royal bridal jewelry."
  },
  {
    id: 3,
    title: "Velvet & Emerald Jewelry",
    category: "WEDDINGS",
    categoryLabel: "Weddings",
    src: "images/gallery/wedding-photo/DSC08506.JPG.jpeg",
    caption: "Elegant studio portrait highlighting detailed polki necklace, green emerald accents, and traditional veil."
  },
  {
    id: 4,
    title: "Traditional Stage Ceremony",
    category: "TRADITIONAL",
    categoryLabel: "Traditional",
    src: "images/gallery/wedding-photo/DSC08911.JPG.jpeg",
    caption: "High-definition stage lighting capture preserving sacred wedding rituals and family blessings."
  },
  {
    id: 5,
    title: "Candid Couple Laugh",
    category: "CANDID",
    categoryLabel: "Candid Shots",
    src: "images/gallery/candid-photo/DSC08842.JPG.jpeg",
    caption: "Unscripted, genuine laughter shared between couple during the ceremony."
  },
  {
    id: 6,
    title: "Black & White Bridal Elegance",
    category: "CINEMATIC",
    categoryLabel: "Cinematic Stills",
    src: "images/gallery/bw-portrait.jpeg",
    caption: "Timeless monochrome editorial bridal portrait emphasizing dramatic shadows and fine jewelry detail."
  },
  {
    id: 7,
    title: "Handcrafted Leather Wedding Album",
    category: "ALBUMS",
    categoryLabel: "Albums & Frames",
    src: "images/gallery/photo-album/DSC08573.JPG.jpeg",
    caption: "Handcrafted 14x40 velvet-embossed wedding album with gold foil title and non-tearable metallic pages."
  },
  {
    id: 8,
    title: "Royal Couple Mandap Portrait",
    category: "WEDDINGS",
    categoryLabel: "Weddings",
    src: "images/gallery/wedding-photo/DSC08882.JPG.jpeg",
    caption: "Traditional couple portrait under golden mandap decorations."
  },
  {
    id: 9,
    title: "Candid Haldi Expression",
    category: "CANDID",
    categoryLabel: "Candid Shots",
    src: "images/gallery/candid-photo/DSC08865.JPG.jpeg",
    caption: "Joyous candid moment captured during turmeric ritual celebrations."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initGallery();
  initLightbox();
  initPackageAccordion();
  initCompareModal();
  initGSAPAnimations();
});

/* --------------------------------------------------------------------------
   NAVBAR SCROLL EFFECT
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   MOBILE HAMBURGER MENU
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const drawer = document.getElementById('mobile-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('active');
  });

  const mobileLinks = drawer.querySelectorAll('.mobile-nav-link, .btn-mobile-call');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('active');
    });
  });
}

/* --------------------------------------------------------------------------
   GALLERY CATEGORY FILTERING
   -------------------------------------------------------------------------- */
let activeFilteredItems = [...GALLERY_ITEMS];

function initGallery() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const galleryGrid = document.getElementById('gallery-grid');
  if (!tabBtns.length || !galleryGrid) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');
      renderGallery(category);
    });
  });
}

function renderGallery(category = 'ALL') {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  activeFilteredItems = category === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === category);

  galleryGrid.innerHTML = '';

  activeFilteredItems.forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'gallery-item';
    itemEl.setAttribute('data-index', index);

    const aspectClass = index % 3 === 0 ? 'aspect-portrait' : (index % 2 === 0 ? 'aspect-landscape' : 'aspect-square');

    itemEl.innerHTML = `
      <div class="gallery-img-wrap ${aspectClass}">
        <img src="${item.src}" alt="${item.title}" loading="lazy" />
        <div class="gallery-overlay">
          <span class="gallery-cat-label">✦ ${item.categoryLabel}</span>
          <h3 class="gallery-item-title">${item.title}</h3>
          <p class="gallery-item-caption">${item.caption}</p>
        </div>
      </div>
    `;

    itemEl.addEventListener('click', () => {
      openLightbox(index);
    });

    galleryGrid.appendChild(itemEl);
  });
}

/* --------------------------------------------------------------------------
   FULLSCREEN LIGHTBOX MODAL
   -------------------------------------------------------------------------- */
let currentLightboxIndex = 0;

function initLightbox() {
  renderGallery('ALL'); // Initial render

  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const overlay = document.getElementById('lightbox-overlay');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', prevLightbox);
  if (nextBtn) nextBtn.addEventListener('click', nextLightbox);

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!overlay || !overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();
  const overlay = document.getElementById('lightbox-overlay');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function prevLightbox() {
  if (activeFilteredItems.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + activeFilteredItems.length) % activeFilteredItems.length;
  updateLightboxContent();
}

function nextLightbox() {
  if (activeFilteredItems.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % activeFilteredItems.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = activeFilteredItems[currentLightboxIndex];
  if (!item) return;

  const imgEl = document.getElementById('lightbox-img');
  const catEl = document.getElementById('lightbox-cat');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');

  if (imgEl) imgEl.src = item.src;
  if (catEl) catEl.textContent = `✦ ${item.categoryLabel}`;
  if (titleEl) titleEl.textContent = item.title;
  if (descEl) descEl.textContent = item.caption;
}

/* --------------------------------------------------------------------------
   PACKAGE ACCORDION TOGGLE
   -------------------------------------------------------------------------- */
function initPackageAccordion() {
  const detailBtns = document.querySelectorAll('.btn-view-details');
  detailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.pkg-card');
      if (!card) return;
      const expandedBox = card.querySelector('.pkg-expanded-features');
      if (!expandedBox) return;

      const isOpen = expandedBox.classList.contains('open');
      if (isOpen) {
        expandedBox.classList.remove('open');
        btn.querySelector('span').textContent = 'View Full Details';
      } else {
        expandedBox.classList.add('open');
        btn.querySelector('span').textContent = 'Hide Details';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   PACKAGE COMPARE MODAL
   -------------------------------------------------------------------------- */
function initCompareModal() {
  const openBtn = document.getElementById('open-compare-btn');
  const closeBtn = document.getElementById('compare-close-btn');
  const modal = document.getElementById('compare-modal-overlay');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
}

/* --------------------------------------------------------------------------
   GSAP ANIMATIONS (LOADED SAFELY FROM CDN)
   -------------------------------------------------------------------------- */
function initGSAPAnimations() {
  if (typeof gsap === 'undefined') return;

  try {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Hero entrance
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
    heroTl.from('.hero-logo', { opacity: 0, y: -20 })
          .from('.hero-badge', { opacity: 0, y: 15 }, '-=0.6')
          .from('.hero-heading', { opacity: 0, y: 30 }, '-=0.6')
          .from('.hero-subtitle', { opacity: 0, y: 20 }, '-=0.6')
          .from('.hero-actions', { opacity: 0, scale: 0.95 }, '-=0.6');

    // ScrollTrigger reveals for sections
    const reveals = document.querySelectorAll('[data-reveal]');
    reveals.forEach(el => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      });
    });
  } catch (err) {
    console.warn('GSAP animations skipped:', err);
  }
}
