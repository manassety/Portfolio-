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

// Complete Verified Gallery Items (14 Photos)
const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Royal Velvet Bride & Groom",
    category: "WEDDINGS",
    categoryLabel: "Weddings",
    src: "images/gallery/wedding-photo/DSC_6225.jpg",
    caption: "Breathtaking royal wedding portrait featuring rich maroon velvet embroidered attire and traditional jewelry."
  },
  {
    id: 2,
    title: "Traditional Red Bridal Grace",
    category: "WEDDINGS",
    categoryLabel: "Weddings",
    src: "images/gallery/wedding-photo/DSC08475.jpg",
    caption: "Exquisite red lehenga bridal portrait capturing intricate matha patti, nath, and royal bridal jewelry."
  },
  {
    id: 3,
    title: "Velvet & Emerald Jewelry",
    category: "WEDDINGS",
    categoryLabel: "Weddings",
    src: "images/gallery/wedding-photo/DSC08506.jpg",
    caption: "Elegant studio portrait highlighting detailed polki necklace, green emerald accents, and traditional veil."
  },
  {
    id: 4,
    title: "Traditional Stage Ceremony",
    category: "TRADITIONAL",
    categoryLabel: "Traditional",
    src: "images/gallery/wedding-photo/DSC08911.jpg",
    caption: "High-definition stage lighting capture preserving sacred wedding rituals and family blessings."
  },
  {
    id: 5,
    title: "Candid Couple Smile",
    category: "CANDID",
    categoryLabel: "Candid Shots",
    src: "images/gallery/candid-photo/DSC08472.jpg",
    caption: "Heartfelt candid expression captured during golden hour ceremony moments."
  },
  {
    id: 6,
    title: "Candid Haldi Celebration",
    category: "CANDID",
    categoryLabel: "Candid Shots",
    src: "images/gallery/candid-photo/DSC08510.jpg",
    caption: "Joyous laughter and vibrant turmeric colors captured live during Haldi rituals."
  },
  {
    id: 7,
    title: "Gentle Bridal Glance",
    category: "CANDID",
    categoryLabel: "Candid Shots",
    src: "images/gallery/candid-photo/DSC08522.jpg",
    caption: "Subtle, unscripted glance showcasing genuine emotions and bridal elegance."
  },
  {
    id: 8,
    title: "Vibrant Wedding Laughter",
    category: "CANDID",
    categoryLabel: "Candid Shots",
    src: "images/gallery/candid-photo/DSC08665.jpg",
    caption: "Spontaneous laughter shared between bride, groom, and family."
  },
  {
    id: 9,
    title: "Intimate Couple Embrace",
    category: "CANDID",
    categoryLabel: "Candid Shots",
    src: "images/gallery/candid-photo/DSC_6300.jpg",
    caption: "Quiet, romantic moment recorded during post-ceremony photo shoot."
  },
  {
    id: 10,
    title: "Black & White Fine Art Portrait",
    category: "CINEMATIC",
    categoryLabel: "Cinematic Stills",
    src: "images/gallery/bw-portrait.jpeg",
    caption: "Timeless monochrome editorial bridal portrait emphasizing dramatic shadows and fine jewelry detail."
  },
  {
    id: 11,
    title: "Luxury Leather Embossed Album",
    category: "ALBUMS",
    categoryLabel: "Albums & Frames",
    src: "images/gallery/photo-album/2c48ae672f49400795336ab8c6ef7fca.jpg",
    caption: "Handcrafted 14x40 velvet-embossed wedding album with gold foil title and non-tearable metallic pages."
  },
  {
    id: 12,
    title: "Flush Mount 3D Box Presentation",
    category: "ALBUMS",
    categoryLabel: "Albums & Frames",
    src: "images/gallery/photo-album/998d1c77abda4b769e15e00f135a349a.jpg",
    caption: "Custom 3D acrylic presentation box crafted for lifelong wedding album preservation."
  },
  {
    id: 13,
    title: "Royal Velvet Album Case",
    category: "ALBUMS",
    categoryLabel: "Albums & Frames",
    src: "images/gallery/photo-album/f4b7cdcc1caa4906a8bd72669a08a0cb.jpg",
    caption: "Rich royal velvet protective album case with engraved gold calligraphy."
  },
  {
    id: 14,
    title: "High-Gloss Metallic Page Spread",
    category: "ALBUMS",
    categoryLabel: "Albums & Frames",
    src: "images/gallery/photo-album/f53be576a2184bbb87b738db61548043.jpg",
    caption: "HD panoramic 14x40 spread layout with UV weather-proof coating."
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
