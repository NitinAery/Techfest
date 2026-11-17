/**
 * MAGIC MASALA CAFE & RESTAURANT - CONTROLLER
 * Massal Chowk, near RGGEC Kangra, Nagrota Bagwan
 * Owner: Monika Rana | Pure Veg | Multi-Cuisine | Tiffin Service
 * All images taken directly from Magic Masala's restaurant photos & Google Maps listing!
 */

// ==========================================
// 1. AUTHENTIC MENU DATASET (ALL PRICES ₹15 - ₹120, WITHIN ₹1-200 RANGE)
// ==========================================
const MAGIC_MENU = [
  // --- Rice Delights (Ghar Ka Khana) ---
  {
    id: 'rice-1',
    category: 'rice',
    title: 'Rajma Rice Combo',
    hindi: 'राजमा चावल',
    price: '₹80',
    priceNum: 80,
    tags: ['Pure Veg', 'College Favorite', 'Ghar Ka Khana'],
    desc: 'Homestyle slow-simmered Kashmiri Rajma curry served with fragrant Basmati rice, fresh salad, and chilled boondi raita.',
    serving: 'Served with Salad + Raita',
    image: 'assets/images/card-rice-thali.jpg'
  },
  {
    id: 'rice-2',
    category: 'rice',
    title: 'Kadhi Rice Combo',
    hindi: 'कढ़ी चावल',
    price: '₹80',
    priceNum: 80,
    tags: ['Pure Veg', 'Himachali Style'],
    desc: 'Traditional sour curd kadhi infused with fenugreek and soft besan pakodis, paired with hot steamed rice and sliced salad.',
    serving: 'Served with Salad',
    image: 'assets/images/tiffin-dal-sabzi.jpg'
  },
  {
    id: 'rice-3',
    category: 'rice',
    title: 'Chole Rice Combo',
    hindi: 'छोले चावल',
    price: '₹80',
    priceNum: 80,
    tags: ['Pure Veg', 'Spiced Gravy'],
    desc: 'Amritsari spiced chickpea gravy simmered in roasted garam masala, served hot with steamed rice, onion lachha, and raita.',
    serving: 'Served with Salad + Raita',
    image: 'assets/images/google-paneer-curry.jpg'
  },

  // --- Samosa & Chaat ---
  {
    id: 'snack-1',
    category: 'snacks',
    title: 'Crispy Samosa (Per Pc)',
    hindi: 'समोसा',
    price: '₹15',
    priceNum: 15,
    tags: ['Freshly Fried', 'Pocket Friendly (₹15)'],
    desc: 'Golden flaky crust stuffed with spiced potatoes, green peas, coriander seeds, and ginger. Served with tamarind & mint chutney.',
    serving: 'Served with 2 Chutneys',
    image: 'assets/images/card-samosa.jpg'
  },
  {
    id: 'snack-2',
    category: 'snacks',
    title: 'Samosa Chat',
    hindi: 'समोसा चाट',
    price: '₹60',
    priceNum: 60,
    tags: ['Bestseller', 'Street Style'],
    desc: 'Crushed hot samosas topped with spicy chole gravy, fresh whisked curd, roasted jeera, saunth chutney, and crunchy sev.',
    serving: 'Generous Single Portion',
    image: 'assets/images/card-samosa.jpg'
  },
  {
    id: 'snack-3',
    category: 'snacks',
    title: 'Tikki Chat',
    hindi: 'टिक्की चाट',
    price: '₹60',
    priceNum: 60,
    tags: ['Crispy Golden', 'Chatpata'],
    desc: 'Double shallow-fried spiced potato tikkis pressed crisp on tawa, smothered in warm chole, curd, and green mint chutney.',
    serving: '2 Crispy Tikkis',
    image: 'assets/images/card-samosa.jpg'
  },
  {
    id: 'snack-4',
    category: 'snacks',
    title: 'Samosa + Tikki Chat Combo',
    hindi: 'समोसा + टिक्की चाट',
    price: '₹60',
    priceNum: 60,
    tags: ['Double Delight', 'Student Pick'],
    desc: 'One crunchy samosa and one potato tikki crushed together with rich dahi, chole masala, onions, and sweet-sour chutneys.',
    serving: 'Combo Portion',
    image: 'assets/images/card-samosa.jpg'
  },
  {
    id: 'snack-5',
    category: 'snacks',
    title: 'Fresh Fruit Chat',
    hindi: 'फ्रूट चाट',
    price: '₹80',
    priceNum: 80,
    tags: ['Healthy Choice', 'Fresh Cut'],
    desc: 'A vibrant bowl of freshly chopped seasonal fruits tossed in lemon juice and signature Magic Masala rock salt spice blend.',
    serving: 'Full Fresh Bowl',
    image: 'assets/images/card-rice-thali.jpg'
  },

  // --- Pakodas ---
  {
    id: 'pakoda-1',
    category: 'snacks',
    title: 'Paneer Pakoda',
    hindi: 'पनीर पकौड़ा',
    price: '₹70',
    priceNum: 70,
    tags: ['Fresh Paneer', 'Chai Companion'],
    desc: 'Thick slabs of fresh malai paneer sandwiched with tangy mint paste, dipped in ajwain besan batter and fried golden crisp.',
    serving: 'Served with Mint Chutney',
    image: 'assets/images/card-pakoda.jpg'
  },
  {
    id: 'pakoda-2',
    category: 'snacks',
    title: 'Mix Pakoda Platter',
    hindi: 'मिक्स पकौड़ा',
    price: '₹80',
    priceNum: 80,
    tags: ['Rainy Day Favorite', 'Full Plate'],
    desc: 'Assorted hot fritters including onion, potato, gobhi, and green chilli, sprinkled with chaat masala. Perfect with hot chai.',
    serving: 'Sharing Plate',
    image: 'assets/images/card-pakoda.jpg'
  },
  {
    id: 'pakoda-3',
    category: 'snacks',
    title: 'Onion / Veg Pakoda',
    hindi: 'प्याज / वेज पकौड़ा',
    price: '₹50',
    priceNum: 50,
    tags: ['Super Crunch', 'Budget Hit'],
    desc: 'Finely sliced red onions and herbs mixed with spiced gram flour and fried to a deep amber crunch. Served with spicy dip.',
    serving: 'Single Plate',
    image: 'assets/images/card-pakoda.jpg'
  },

  // --- Chinese & Fast Food (Direct from Magic Masala & Google listing photos) ---
  {
    id: 'fast-1',
    category: 'chinese',
    title: 'Paneer Hakka Noodles',
    hindi: 'पनीर हक्का नूडल्स',
    price: '₹90',
    priceNum: 90,
    tags: ['Real Cafe Photo', 'Wok Tossed'],
    desc: 'Wok-tossed noodles loaded with fried cottage cheese cubes, colorful bell peppers, shredded cabbage, and garlic-soya sauce.',
    serving: 'Full Plate',
    image: 'assets/images/hakka-noodles.jpg'
  },
  {
    id: 'fast-2',
    category: 'chinese',
    title: 'Magic Veg Burger',
    hindi: 'वेज बर्गर',
    price: '₹60',
    priceNum: 60,
    tags: ['Real Cafe Photo', 'Sesame Bun'],
    desc: 'Toasted sesame seed bun packed with a crispy spiced vegetable patty, cucumber ribbons, tomato slices, mayo, and chili drizzle.',
    serving: 'Served with Dipping Sauces',
    image: 'assets/images/burger-plate.jpg'
  },
  {
    id: 'fast-3',
    category: 'chinese',
    title: 'Paneer Kathi Roll / Frankie',
    hindi: 'पनीर काठी रोल',
    price: '₹70',
    priceNum: 70,
    tags: ['From Google Listing', 'Roll Special'],
    desc: 'Flaky paratha wrap stuffed with marinated tandoori paneer, sliced bell peppers, crisp onions, and tangy mint mayo.',
    serving: 'Cut in Halves with Dip',
    image: 'assets/images/google-kathi-roll.jpg'
  },
  {
    id: 'fast-4',
    category: 'chinese',
    title: 'Veg Steamed / Fried Momos',
    hindi: 'मोमोज (स्टीम्ड / फ्राइड)',
    price: '₹60 - ₹70',
    priceNum: 60,
    tags: ['From Restaurant Banner', 'Fiery Dip'],
    desc: 'Thin dough dumplings filled with minced ginger, garlic, and cabbage. Served with our signature fiery red chili garlic chutney.',
    serving: '8 Pieces',
    image: 'assets/images/poster-momos.jpg'
  },
  {
    id: 'fast-5',
    category: 'chinese',
    title: 'Cheesy Veg Farmhouse Pizza',
    hindi: 'चीज वेज पिज्जा',
    price: '₹120',
    priceNum: 120,
    tags: ['From Restaurant Banner', 'Fresh Baked'],
    desc: 'Fresh pan pizza crust layered with spiced tomato sauce, mozzarella cheese, diced capsicum, onions, and sweet corn.',
    serving: 'Personal 7" Pizza',
    image: 'assets/images/poster-pizza.jpg'
  },

  // --- Shakes & Drinks ---
  {
    id: 'shake-1',
    category: 'shakes',
    title: 'Chilled Chocolate Shake',
    hindi: 'चॉकलेट शेक',
    price: '₹70',
    priceNum: 70,
    tags: ['Real Cafe Photo', 'Thick & Frothy'],
    desc: 'Creamy cold chocolate shake whipped with rich cocoa and chilled milk, crowned with dark chocolate shavings. Served tall with straw.',
    serving: 'Tall Glass',
    image: 'assets/images/shakes-table.jpg'
  },
  {
    id: 'shake-2',
    category: 'shakes',
    title: 'Oreo Thick Shake',
    hindi: 'ओरियों शेक',
    price: '₹80',
    priceNum: 80,
    tags: ['Student Favorite', 'Extra Thick'],
    desc: 'Double crushed Oreo cookies blended with creamy vanilla ice cream and chilled milk, topped with crunchy cookie crumbs.',
    serving: 'Tall Glass',
    image: 'assets/images/card-shake.jpg'
  },
  {
    id: 'shake-3',
    category: 'shakes',
    title: 'Vanilla / Banana Shake',
    hindi: 'वैनिला / केला शेक',
    price: '₹60 - ₹70',
    priceNum: 60,
    tags: ['Natural Fresh', 'Energy Booster'],
    desc: 'Pure banana fruit and rich dairy goodness blended smooth. High energy nourishment between college lecture hours.',
    serving: 'Tall Glass',
    image: 'assets/images/shakes-table.jpg'
  },
  {
    id: 'shake-4',
    category: 'shakes',
    title: 'Seasonal Mango Shake',
    hindi: 'मैंगो शेक',
    price: '₹70',
    priceNum: 70,
    tags: ['Seasonal Special', 'Summer Hit'],
    desc: 'Luscious ripe mango pulp blended with full-cream milk and chilled ice cubes, topped with chopped dry fruits.',
    serving: 'Tall Glass (Seasonal)',
    image: 'assets/images/card-shake.jpg'
  },

  // --- Desserts ---
  {
    id: 'dessert-1',
    category: 'dessert',
    title: 'Hot Gulab Jamun (2 Pcs)',
    hindi: 'गुलाब जामुन',
    price: '₹50',
    priceNum: 50,
    tags: ['From Menu Card', 'Cardamom Syrup'],
    desc: 'Two melt-in-mouth mawa spheres steeped in warm green cardamom and saffron rose syrup. The quintessential Indian sweet finish.',
    serving: '2 Pieces (Hot)',
    image: 'assets/images/card-dessert-gulab.jpg'
  },
  {
    id: 'dessert-2',
    category: 'dessert',
    title: 'Gajar Ka Halwa',
    hindi: 'गाजर का हलवा',
    price: '₹50',
    priceNum: 50,
    tags: ['From Menu Card', 'Desi Ghee'],
    desc: 'Grated mountain carrots slow-braised in full-cream milk and khoya, garnished with slivered almonds and cashews.',
    serving: 'Single Bowl',
    image: 'assets/images/card-dessert-gulab.jpg'
  }
];

// ==========================================
// 2. REAL CAFE AMBIANCE GALLERY
// ==========================================
const CAFE_GALLERY = [
  {
    title: 'Cozy Dining Hall & Geometric Lights',
    desc: 'Our warm, clean seating space with overhead geometric wire pendant lamps, comfortable white benches, and checkered tiled floor.',
    image: 'assets/images/dining-hall-1.jpg',
    tag: 'Main Hall'
  },
  {
    title: 'Fairy Light Wall & Indoor Greenery',
    desc: 'Lush climbing creepers, warm fairy string lights, framed wall art, and ambient dining tables perfect for college groups & birthday celebrations.',
    image: 'assets/images/dining-fairy-lights.jpg',
    tag: 'Cozy Corner'
  },
  {
    title: 'Night View & Welcome Entrance',
    desc: 'Magic Masala front entrance lit up with colorful balloons, glowing fairy lights, and cheerful welcome vibe for visitors at Massal Chowk.',
    image: 'assets/images/restaurant-exterior-night.jpg',
    tag: 'Exterior'
  },
  {
    title: 'Fresh Paneer Hakka Noodles',
    desc: 'Freshly tossed sizzling Hakka noodles with sautéed paneer cubes and colorful capsicum served piping hot from our kitchen.',
    image: 'assets/images/hakka-noodles.jpg',
    tag: 'Food Art'
  },
  {
    title: 'Chilled Milkshakes on Table',
    desc: 'Two tall chocolate milkshakes served cold with straws beside potted table palm for your afternoon refresher.',
    image: 'assets/images/shakes-table.jpg',
    tag: 'Shakes'
  },
  {
    title: 'Specialty Sesame Bun Burger',
    desc: 'Handcrafted spiced veg burger served with artistically plated green mint and sweet tomato sauces.',
    image: 'assets/images/burger-plate.jpg',
    tag: 'Snacks'
  }
];

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');
  initCategoryFilters();
  initMenuSearch();
  initMobileDrawer();
  initGalleryLightbox();
  initTiffinCalculator();
  initTableReservation();
});

// ==========================================
// 4. MENU RENDERING & FILTERING
// ==========================================
function renderMenu(category, searchQuery = '') {
  const container = document.getElementById('menuGridContainer');
  if (!container) return;

  let filtered = category === 'all' 
    ? MAGIC_MENU 
    : MAGIC_MENU.filter(item => item.category === category);

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q) ||
      item.hindi.includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--color-text-muted);">
        <p style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">No dishes found matching "${searchQuery}"</p>
        <p>Try searching for "Rajma", "Samosa", "Shake", or "Noodles"</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="menu-card" data-category="${item.category}">
      <div class="menu-card-img-wrap">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="menu-card-badge">
          <span class="veg-badge"><span class="veg-icon"></span> 100% Veg</span>
        </div>
      </div>
      <div class="menu-card-body">
        <div class="card-title-row">
          <div>
            <h3 class="card-item-title">${item.title}</h3>
            <small style="color: var(--color-accent); font-weight: 600; font-size: 0.82rem;">${item.hindi}</small>
          </div>
          <span class="card-item-price">${item.price}</span>
        </div>
        <p class="card-item-desc">${item.desc}</p>
        <div class="card-action-bar">
          <span class="card-serving-tag">${item.serving}</span>
          <a 
            href="https://wa.me/918894616602?text=Hello%20Monika%20Ji!%20I%20would%20like%20to%20order%20${encodeURIComponent(item.title)}%20(${encodeURIComponent(item.price)})%20from%20Magic%20Masala." 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-whatsapp" 
            style="min-height: 36px; padding: 0.35rem 0.85rem; font-size: 0.8rem;"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      const searchVal = document.getElementById('menuSearchInput').value;
      
      const container = document.getElementById('menuGridContainer');
      container.style.opacity = '0.3';
      setTimeout(() => {
        renderMenu(cat, searchVal);
        container.style.opacity = '1';
      }, 120);
    });
  });
}

function initMenuSearch() {
  const searchInput = document.getElementById('menuSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const activeBtn = document.querySelector('.filter-btn.active');
    const cat = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    renderMenu(cat, e.target.value);
  });
}

// ==========================================
// 5. MOBILE DRAWER NAVIGATION
// ==========================================
function initMobileDrawer() {
  const toggle = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  const links = document.querySelectorAll('.mobile-link');

  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  links.forEach(l => {
    l.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

// ==========================================
// 6. GALLERY LIGHTBOX
// ==========================================
function initGalleryLightbox() {
  const cards = document.querySelectorAll('.gallery-card');
  const modal = document.getElementById('galleryModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const imgEl = document.getElementById('modalImage');
  const titleEl = document.getElementById('modalTitle');
  const descEl = document.getElementById('modalDesc');

  if (!modal) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      const item = CAFE_GALLERY[idx];
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
// 7. TIFFIN SUBSCRIPTION CALCULATOR (STUDENT RATES WITHIN ₹1-200 PER MEAL)
// ==========================================
function initTiffinCalculator() {
  const planSelect = document.getElementById('tiffinPlanSelect');
  const mealSelect = document.getElementById('tiffinMealType');
  const studentCount = document.getElementById('tiffinStudents');
  const costDisplay = document.getElementById('tiffinEstimateDisplay');
  const whatsappTiffinBtn = document.getElementById('whatsappTiffinBtn');

  function calculate() {
    if (!planSelect || !mealSelect || !studentCount || !costDisplay) return;

    const plan = planSelect.value; // 'daily', 'weekly', 'monthly'
    const meals = mealSelect.value; // 'lunch', 'both'
    const count = parseInt(studentCount.value, 10) || 1;

    let costPerDayPerMeal = 80; // Exactly ₹80 per meal (well within ₹1-200 range)
    if (plan === 'monthly') costPerDayPerMeal = 70; // Discounted monthly student rate (₹70 per meal)

    let mealsPerDay = meals === 'both' ? 2 : 1;
    let days = 1;
    if (plan === 'weekly') days = 7;
    if (plan === 'monthly') days = 30;

    const total = costPerDayPerMeal * mealsPerDay * days * count;
    costDisplay.textContent = `₹${total.toLocaleString('en-IN')}`;

    if (whatsappTiffinBtn) {
      const message = `Hello Monika Ji! I want to inquire about the Magic Masala Tiffin Service for ${count} person(s). Plan: ${plan.toUpperCase()}, Meals: ${meals.toUpperCase()} (${mealsPerDay}/day). Calculated Estimate: ₹${total}. Please share details!`;
      whatsappTiffinBtn.href = `https://wa.me/918894616602?text=${encodeURIComponent(message)}`;
    }
  }

  [planSelect, mealSelect, studentCount].forEach(el => {
    if (el) el.addEventListener('change', calculate);
    if (el && el.tagName === 'INPUT') el.addEventListener('input', calculate);
  });

  calculate();
}

// ==========================================
// 8. TABLE & CELEBRATION RESERVATIONS
// ==========================================
function initTableReservation() {
  const form = document.getElementById('reservationForm');
  const formWrap = document.getElementById('bookingFormWrap');
  const confirmCard = document.getElementById('bookingConfirmCard');
  const resetBtn = document.getElementById('bookAgainBtn');
  const partyButtons = document.querySelectorAll('.party-btn');
  const dateInput = document.getElementById('resDate');

  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  let selectedParty = '2-4 Friends';
  partyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      partyButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedParty = btn.getAttribute('data-party');
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('resName').value.trim();
      const phone = document.getElementById('resPhone').value.trim();
      const occasion = document.getElementById('resOccasion').value;
      const time = document.getElementById('resTime').value;
      const date = dateInput.value;

      if (!name || !phone || !date) {
        showToast('Please provide your name, phone number, and date.');
        return;
      }

      const randomBookingId = 'MM-' + Math.floor(1000 + Math.random() * 9000);

      document.getElementById('confirmBookingId').textContent = randomBookingId;
      document.getElementById('confirmGuestName').textContent = name;
      document.getElementById('confirmDateTime').textContent = `${date} at ${time}`;
      document.getElementById('confirmOccasion').textContent = `${occasion} (${selectedParty})`;

      const waText = `Hello Monika Ji! Table reservation request #${randomBookingId}: Name: ${name}, Phone: ${phone}, Date & Time: ${date} at ${time}, Occasion: ${occasion}, Party: ${selectedParty}.`;
      document.getElementById('confirmWhatsAppBtn').href = `https://wa.me/918894616602?text=${encodeURIComponent(waText)}`;

      formWrap.style.display = 'none';
      confirmCard.style.display = 'block';

      showToast(`Reservation #${randomBookingId} created successfully!`);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      confirmCard.style.display = 'none';
      formWrap.style.display = 'block';
    });
  }
}

// ==========================================
// 9. TOAST NOTIFICATION UTILITY
// ==========================================
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 200ms ease';
    setTimeout(() => toast.remove(), 200);
  }, 3500);
}
