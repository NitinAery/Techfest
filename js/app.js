/**
 * REDBRICK COFFEE — APP CONTROLLER
 * "Scarlet ink editorial on butcher paper"
 * Handles product catalog filtering, interactive bento lightbox,
 * table reservation booking system, and micro-interactions.
 */

// ==========================================
// 1. PRODUCT & BLEND CATALOG DATA
// ==========================================
const REDBRICK_PRODUCTS = [
  {
    id: 'blend-1',
    category: 'blends',
    name: 'Good Day Blend',
    price: '$18.00 / 300g',
    descriptor: 'HOUSE ROAST • COLOMBIA & ETHIOPIA • FILTER & ESPRESSO',
    notes: 'Brown butter, candied tangerine, and sweet honeycomb finish.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'single-1',
    category: 'single-origin',
    name: 'Ethiopia Guji Anaerobic',
    price: '$22.00 / 250g',
    descriptor: 'SINGLE ESTATE • 72H ANAEROBIC FERMENT • WASHED',
    notes: 'White peach, fragrant jasmine blossom, and wild strawberry jam.',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bakery-1',
    category: 'bakery',
    name: 'Salted Honey Kouign-Amann',
    price: '$5.50',
    descriptor: 'BAKED FRESH 06:30 AM • NORMANDY BUTTER • GUÉRANDE SALT',
    notes: 'Layered caramelized sugar crust with a tender, molten butter center.',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'single-2',
    category: 'single-origin',
    name: 'Huila Pink Bourbon',
    price: '$24.00 / 250g',
    descriptor: 'MICRO-LOT • SAN ADOLFO • ELEVATION 1,850M',
    notes: 'Red currant, pink guava, cane sugar syrup, and silky body.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bakery-2',
    category: 'bakery',
    name: 'Cardamom Escargot Brioche',
    price: '$6.50',
    descriptor: '48-HR LAMINATED BRIOCHE • GREEN CARDAMOM • PISTACHIO',
    notes: 'Swirled with spiced vanilla custard and roasted Sicilian pistachios.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'plates-1',
    category: 'plates',
    name: 'Heritage Sourdough Tartine',
    price: '$14.50',
    descriptor: 'STONEGROUND COUNTRY BOULE • FARM EGGS • CITRUS DUKKAH',
    notes: 'Toasted wild sourdough, whipped lemon goat curd, poached egg, avocado.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'blend-2',
    category: 'blends',
    name: 'Dark Batch Espresso',
    price: '$18.00 / 300g',
    descriptor: 'DEEP ROAST • GUATEMALA & SUMATRA • HEAVY BODY',
    notes: '70% Valrhona dark cocoa, smoked molasses, and cedar aromatic oils.',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'plates-2',
    category: 'plates',
    name: 'Chanterelle & Gruyère Brioche',
    price: '$13.75',
    descriptor: 'SEASONAL HARVEST • WILD MUSHROOMS • CUSTARD QUICHE',
    notes: 'Pan-roasted forest chanterelles, shallots, Alpine Gruyère, and tarragon.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop'
  }
];

// ==========================================
// 2. GALLERY LIGHTBOX DATA
// ==========================================
const GALLERY_ITEMS = [
  {
    title: 'The Sunlit Oak Reading Bench',
    desc: 'Custom White Oak bench seating bathed in morning light through heritage arched windows.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'Terrazzo & Brass Espresso Bar',
    desc: 'Custom dual-group Slayer machine calibrated to 9 bars extraction yield on natural stone.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'Wheel-Thrown Ceramic Vessels',
    desc: 'Locally hand-crafted speckled stoneware designed for thermal retention and coffee aroma aeration.',
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'Cobblestone Garden Patio',
    desc: 'Quiet courtyard surrounded by potted jasmine and weathered bistro tables.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'Daily Scratch Viennoiserie Cooling',
    desc: 'Golden Kouign-Amann and 48-hour sourdough boules resting fresh from the deck oven.',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'The Origami Slow Pour Station',
    desc: 'Individual cup dripper bar featuring delicate single-estate African and South American lots.',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1400&auto=format&fit=crop'
  }
];

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initCatalog('all');
  initFilterTabs();
  initMobileNav();
  initGalleryModal();
  initBookingSystem();
  initNewsletterSubscription();
});

// ==========================================
// 4. PRODUCT CATALOG RENDERING & FILTERING
// ==========================================
function initCatalog(category) {
  const container = document.getElementById('productGridContainer');
  if (!container) return;

  const filtered = category === 'all'
    ? REDBRICK_PRODUCTS
    : REDBRICK_PRODUCTS.filter(item => item.category === category);

  container.innerHTML = filtered.map(item => `
    <article class="product-card" data-category="${item.category}">
      <div class="product-image-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="product-card-details">
        <div class="product-card-descriptor">${item.descriptor}</div>
        <div class="product-meta-row">
          <h3 class="product-card-title">${item.name}</h3>
          <span class="product-card-price">${item.price}</span>
        </div>
        <p class="product-card-notes">${item.notes}</p>
        <div class="product-card-action">
          <a href="#reservation" class="arrow-link">Order in Parlour →</a>
        </div>
      </div>
    </article>
  `).join('');
}

function initFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-pill');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      
      const container = document.getElementById('productGridContainer');
      container.style.opacity = '0.3';
      
      setTimeout(() => {
        initCatalog(cat);
        container.style.opacity = '1';
      }, 120);
    });
  });
}

// ==========================================
// 5. MOBILE DRAWER NAVIGATION
// ==========================================
function initMobileNav() {
  const toggle = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileDrawer');
  const links = document.querySelectorAll('.mobile-link');

  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

// ==========================================
// 6. GALLERY LIGHTBOX MODAL
// ==========================================
function initGalleryModal() {
  const tiles = document.querySelectorAll('.gallery-tile');
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const imgEl = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const descEl = document.getElementById('lightboxDesc');

  if (!modal) return;

  tiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const idx = parseInt(tile.getAttribute('data-gallery-id'), 10);
      const item = GALLERY_ITEMS[idx];
      if (item) {
        imgEl.src = item.image;
        imgEl.alt = item.title;
        titleEl.textContent = item.title;
        descEl.textContent = item.desc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// ==========================================
// 7. TABLE RESERVATION ENGINE
// ==========================================
function initBookingSystem() {
  const dateInput = document.getElementById('bookingDate');
  const partyPills = document.querySelectorAll('.party-pill');
  const timePills = document.querySelectorAll('.time-pill');
  const seatingOptions = document.querySelectorAll('.seating-option');
  const form = document.getElementById('reservationForm');
  const formWrap = document.getElementById('bookingFormWrapper');
  const voucherCard = document.getElementById('reservationVoucher');
  const resetBtn = document.getElementById('voucherResetBtn');

  // Set min date to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  let selectedParty = '2 Guests';
  let selectedTime = '09:30 AM';
  let selectedSeating = 'Window Bench';

  partyPills.forEach(pill => {
    pill.addEventListener('click', () => {
      partyPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedParty = pill.getAttribute('data-party') + ' Guests';
    });
  });

  timePills.forEach(pill => {
    pill.addEventListener('click', () => {
      timePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedTime = pill.getAttribute('data-time');
    });
  });

  seatingOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      seatingOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      selectedSeating = opt.getAttribute('data-area');
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('guestName').value.trim();
      const email = document.getElementById('guestEmail').value.trim();
      const phone = document.getElementById('guestPhone').value.trim();
      const dateVal = dateInput.value;

      if (!name || !email || !phone || !dateVal) {
        showRedbrickToast('Please complete all contact details.');
        return;
      }

      // Check past date
      const selectedMs = new Date(dateVal + 'T00:00:00').getTime();
      const todayMs = new Date().setHours(0, 0, 0, 0);
      if (selectedMs < todayMs) {
        showRedbrickToast('Selected date cannot be in the past.');
        return;
      }

      const randomCode = 'RB-' + Math.floor(10000 + Math.random() * 90000);
      const formattedDate = new Date(dateVal + 'T00:00:00').toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });

      // Update voucher view
      document.getElementById('voucherCode').textContent = randomCode;
      document.getElementById('voucherGuestName').textContent = name;
      document.getElementById('voucherDateTime').textContent = `${formattedDate} @ ${selectedTime}`;
      document.getElementById('voucherParty').textContent = selectedParty;
      document.getElementById('voucherSeating').textContent = selectedSeating;

      formWrap.style.display = 'none';
      voucherCard.style.display = 'block';

      showRedbrickToast(`Reservation voucher #${randomCode} generated.`);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      const today = new Date().toISOString().split('T')[0];
      dateInput.value = today;
      voucherCard.style.display = 'none';
      formWrap.style.display = 'block';
    });
  }
}

// ==========================================
// 8. NEWSLETTER SUBSCRIPTION
// ==========================================
function initNewsletterSubscription() {
  const form = document.getElementById('dispatchNewsletterForm');
  const input = document.getElementById('newsletterEmailInput');
  const msg = document.getElementById('newsletterMsg');

  if (!form || !input) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = input.value.trim();
    if (val && val.includes('@')) {
      msg.textContent = 'YOU ARE SUBSCRIBED TO THE MORNING DISPATCH.';
      msg.style.display = 'block';
      input.value = '';
      showRedbrickToast('Dispatch newsletter confirmed.');
    } else {
      msg.textContent = 'PLEASE ENTER A VALID EMAIL.';
      msg.style.display = 'block';
    }
  });
}

// ==========================================
// 9. TOAST NOTIFICATION UTILITY
// ==========================================
function showRedbrickToast(text) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const pill = document.createElement('div');
  pill.className = 'toast-pill';
  pill.textContent = text;
  container.appendChild(pill);

  setTimeout(() => {
    pill.style.opacity = '0';
    pill.style.transition = 'opacity 200ms ease';
    setTimeout(() => pill.remove(), 200);
  }, 3500);
}

