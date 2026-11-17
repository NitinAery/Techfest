/**
 * MAGIC MASALA CAFE & RESTAURANT - CONTROLLER
 * Inspired by UI/UX video: "Take a taste • Come join us • Life is so endlessly delicious"
 * "What's on our Plate" • "Let's see what other says"
 * STRICTLY CONTAINS ONLY ITEMS FROM THE OFFICIAL MENU CARD & TIFFIN SERVICE!
 */

// ==========================================
// 1. STRICT MENU DATASET (ONLY OFFICIAL MENU ITEMS)
// ==========================================
const MAGIC_MENU = [
  // --- 1. Rice Delights (Ghar Ka Khana) ---
  {
    id: 'rice-1',
    category: 'rice',
    title: 'Rajma Rice Combo',
    hindi: 'राजमा चावल',
    price: '₹80',
    priceNum: 80,
    tags: ['Pure Veg', 'College Favorite', 'Ghar Ka Khana'],
    desc: 'Homestyle slow-simmered Kashmiri Rajma curry served with fragrant Basmati rice, fresh cucumber-onion salad, and chilled boondi raita.',
    serving: 'Rajma + Rice + Salad + Raita',
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
    serving: 'Kadhi + Rice + Salad',
    image: 'assets/images/tiffin-dal-sabzi.jpg'
  },
  {
    id: 'rice-3',
    category: 'rice',
    title: 'Chole Rice Combo',
    hindi: 'छोले चावल',
    price: '₹80',
    priceNum: 80,
    tags: ['Pure Veg', 'Aromatic Spices'],
    desc: 'Amritsari spiced chickpea gravy simmered in roasted garam masala, served hot with steamed rice, onion lachha, and cooling raita.',
    serving: 'Chole + Rice + Salad + Raita',
    image: 'assets/images/google-paneer-curry.jpg'
  },

  // --- 2. Samosa & Chaat ---
  {
    id: 'samosa-1',
    category: 'chaat',
    title: 'Crispy Samosa',
    hindi: 'समोसा',
    price: '₹15',
    priceNum: 15,
    tags: ['Fresh Daily', 'Pocket Friendly'],
    desc: 'Golden flaky crust stuffed with spiced potatoes, green peas, coriander seeds, and ginger. Served with tamarind & mint chutney.',
    serving: 'Single Pc with 2 Chutneys',
    image: 'assets/images/card-samosa.jpg'
  },
  {
    id: 'samosa-2',
    category: 'chaat',
    title: 'Samosa Chat',
    hindi: 'समोसा चाट',
    price: '₹60',
    priceNum: 60,
    tags: ['Bestseller', 'Chatpata'],
    desc: 'Crushed hot samosas topped with spicy chole gravy, fresh whisked curd, roasted jeera, saunth chutney, and crunchy sev.',
    serving: 'Generous Single Portion',
    image: 'assets/images/card-samosa.jpg'
  },
  {
    id: 'samosa-3',
    category: 'chaat',
    title: 'Tikki Chat',
    hindi: 'टिक्की चाट',
    price: '₹60',
    priceNum: 60,
    tags: ['Crispy Golden', 'Tawa Fried'],
    desc: 'Double shallow-fried spiced potato tikkis pressed crisp on tawa, smothered in warm chole, sweet curd, and green mint chutney.',
    serving: '2 Crispy Tikkis Portion',
    image: 'assets/images/card-samosa.jpg'
  },
  {
    id: 'samosa-4',
    category: 'chaat',
    title: 'Samosa + Tikki Chat',
    hindi: 'समोसा + टिक्की चाट',
    price: '₹60',
    priceNum: 60,
    tags: ['Signature Combo', 'Student Pick'],
    desc: 'One crunchy samosa and one potato tikki crushed together with rich dahi, chole masala, onions, and sweet-sour chutneys.',
    serving: 'Double Snack Combo',
    image: 'assets/images/card-samosa.jpg'
  },
  {
    id: 'samosa-5',
    category: 'chaat',
    title: 'Fruit Chat',
    hindi: 'फ्रूट चाट',
    price: '₹80',
    priceNum: 80,
    tags: ['Healthy Choice', 'Fresh Cut'],
    desc: 'A refreshing bowl of freshly chopped seasonal fruits tossed in lemon juice and signature Magic Masala rock salt spice blend.',
    serving: 'Fresh Fruit Bowl',
    image: 'assets/images/card-rice-thali.jpg'
  },

  // --- 3. Pakodas & Snacks ---
  {
    id: 'pakoda-1',
    category: 'pakodas',
    title: 'Veg Pakoda',
    hindi: 'वेज पकौड़ा',
    price: '₹50',
    priceNum: 50,
    tags: ['Freshly Fried', 'Crispy Batter'],
    desc: 'Fresh garden vegetables coated in seasoned ajwain gram flour batter and fried until crispy golden. Served with chutney.',
    serving: 'Full Plate with Chutney',
    image: 'assets/images/card-pakoda.jpg'
  },
  {
    id: 'pakoda-2',
    category: 'pakodas',
    title: 'Onion Pakoda',
    hindi: 'प्याज पकौड़ा',
    price: '₹50',
    priceNum: 50,
    tags: ['Super Crunch', 'Chai Partner'],
    desc: 'Finely sliced red onions tossed with green chilies, coriander, and spiced besan batter, fried into crunchy golden fritters.',
    serving: 'Full Plate with Chutney',
    image: 'assets/images/card-pakoda.jpg'
  },
  {
    id: 'pakoda-3',
    category: 'pakodas',
    title: 'Paneer Pakoda',
    hindi: 'पनीर पकौड़ा',
    price: '₹70',
    priceNum: 70,
    tags: ['Fresh Dairy Paneer', 'Soft Inside'],
    desc: 'Thick slabs of fresh malai paneer sandwiched with tangy mint paste, dipped in spiced besan batter and fried golden crisp.',
    serving: 'Plate of Paneer Pakodas',
    image: 'assets/images/card-pakoda.jpg'
  },
  {
    id: 'pakoda-4',
    category: 'pakodas',
    title: 'Mix Pakoda',
    hindi: 'मिक्स पकौड़ा',
    price: '₹80',
    priceNum: 80,
    tags: ['Assorted Platter', 'Popular'],
    desc: 'Assorted hot fritters including onion, potato, gobhi, paneer, and green chilli, sprinkled with chaat masala.',
    serving: 'Full Sharing Platter',
    image: 'assets/images/card-pakoda.jpg'
  },

  // --- 4. Thick Shakes ---
  {
    id: 'shake-1',
    category: 'shakes',
    title: 'Banana Shake',
    hindi: 'केला शेक',
    price: '₹60',
    priceNum: 60,
    tags: ['Energy Booster', 'Natural Fruit'],
    desc: 'Fresh ripe bananas whipped smooth with chilled milk and a hint of green cardamom. Healthy campus energy booster.',
    serving: 'Tall Glass',
    image: 'assets/images/shakes-table.jpg'
  },
  {
    id: 'shake-2',
    category: 'shakes',
    title: 'Chocolate Shake',
    hindi: 'चॉकलेट शेक',
    price: '₹70',
    priceNum: 70,
    tags: ['Real Cafe Photo', 'Thick & Frothy'],
    desc: 'Creamy cold chocolate shake whipped with rich cocoa and chilled milk, crowned with dark chocolate shavings. Served with straw.',
    serving: 'Tall Glass',
    image: 'assets/images/shakes-table.jpg'
  },
  {
    id: 'shake-3',
    category: 'shakes',
    title: 'Vanilla Shake',
    hindi: 'वैनिला शेक',
    price: '₹70',
    priceNum: 70,
    tags: ['Classic Smooth', 'Chilled'],
    desc: 'Smooth and aromatic vanilla bean milkshake blended thick with full-cream milk and ice cream.',
    serving: 'Tall Glass',
    image: 'assets/images/shakes-table.jpg'
  },
  {
    id: 'shake-4',
    category: 'shakes',
    title: 'Oreo Shake',
    hindi: 'ओरियों शेक',
    price: '₹80',
    priceNum: 80,
    tags: ['Student Favorite', 'Extra Thick'],
    desc: 'Crushed Oreo cookies blended with creamy vanilla ice cream and chilled milk, topped with crunchy cookie crumbs.',
    serving: 'Tall Glass',
    image: 'assets/images/card-shake.jpg'
  },
  {
    id: 'shake-5',
    category: 'shakes',
    title: 'Mango Shake',
    hindi: 'मैंगो शेक',
    price: '₹70',
    priceNum: 70,
    tags: ['Seasonal Special', 'Sweet Mango'],
    desc: 'Luscious ripe mango pulp blended with rich milk and chilled cubes, topped with chopped nuts. (Available in season).',
    serving: 'Tall Glass (Seasonal)',
    image: 'assets/images/card-shake.jpg'
  },

  // --- 5. Desserts ---
  {
    id: 'dessert-1',
    category: 'dessert',
    title: 'Gulab Jamun [2 Pcs]',
    hindi: 'गुलाब जामुन',
    price: '₹50',
    priceNum: 50,
    tags: ['Cardamom Syrup', 'Hot & Soft'],
    desc: 'Two melt-in-mouth mawa spheres steeped in warm green cardamom and saffron rose syrup. The perfect sweet ending.',
    serving: '2 Pieces (Served Hot)',
    image: 'assets/images/card-dessert-gulab.jpg'
  },
  {
    id: 'dessert-2',
    category: 'dessert',
    title: 'Gajak / Gajar Ka Halwa',
    hindi: 'गाजर का हलवा',
    price: '₹50',
    priceNum: 50,
    tags: ['Desi Ghee', 'Slow Cooked'],
    desc: 'Grated mountain carrots slow-braised in full-cream milk, pure ghee, and khoya, garnished with roasted cashews and almonds.',
    serving: 'Warm Dessert Bowl',
    image: 'assets/images/card-dessert-gulab.jpg'
  },
  {
    id: 'dessert-3',
    category: 'dessert',
    title: 'Ice Cream & Pastries',
    hindi: 'आइसक्रीम / पेस्ट्री',
    price: 'M.R.P',
    priceNum: 30,
    tags: ['Chilled Delights', 'Standard Rates'],
    desc: 'Assorted delightful ice cream cups and bakery pastries kept fresh in our display chiller.',
    serving: 'Available at M.R.P',
    image: 'assets/images/card-dessert-gulab.jpg'
  },

  // --- 6. Daily Tiffin Service ---
  {
    id: 'tiffin-1',
    category: 'tiffin',
    title: 'Ghar Ka Khana Tiffin Meal',
    hindi: 'घर का खाना टिफिन',
    price: '₹80',
    priceNum: 80,
    tags: ['Pure Veg', 'Freshly Cooked Daily', 'Student Plan'],
    desc: 'Balanced nutritious homestyle meal: Dal Tadka / Rajma / Chole + Seasonal Sabzi + 4 Hot Wheat Phulkas + Steamed Rice + Fresh Salad.',
    serving: 'Dal + Sabzi + 4 Roti + Rice + Salad',
    image: 'assets/images/tiffin-stack.jpg'
  }
];

// ==========================================
// 2. REAL CAFE GALLERY DATASET
// ==========================================
const CAFE_GALLERY = [
  {
    title: 'Dining Hall with Geometric Pendant Lights',
    desc: 'Our warm, clean seating space with geometric wire pendant lamps, comfortable white benches, and checkered tiled floor.',
    image: 'assets/images/dining-hall-1.jpg'
  },
  {
    title: 'Fairy Light Wall & Creepers',
    desc: 'Lush climbing creepers, warm fairy string lights, framed wall art, and ambient dining tables perfect for birthday celebrations.',
    image: 'assets/images/dining-fairy-lights.jpg'
  },
  {
    title: 'Evening Entrance at Massal Chowk',
    desc: 'Magic Masala front entrance lit up with colorful balloons, glowing fairy lights, and cheerful welcome vibe.',
    image: 'assets/images/restaurant-exterior-night.jpg'
  },
  {
    title: 'Chilled Milkshakes on Cafe Table',
    desc: 'Two tall chocolate milkshakes served cold with straws beside table palm for your afternoon college refresher.',
    image: 'assets/images/shakes-table.jpg'
  },
  {
    title: 'Original Printed Menu Card',
    desc: 'Our authentic kitchen rates and offerings printed on parchment banner.',
    image: 'assets/images/menu-card-original.jpg'
  },
  {
    title: 'Ghar Ka Khana Tiffin Service Poster',
    desc: 'Official tiffin service poster detailing 100% vegetarian, hygienic homestyle meals for students.',
    image: 'assets/images/tiffin-poster.jpg'
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
  initNewsletterForm();
});

// ==========================================
// 4. "WHAT'S ON OUR PLATE" MENU CONTROLLER
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
        <p style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--color-text-title);">No dish found matching "${searchQuery}"</p>
        <p>Try searching for "Rajma", "Samosa", "Pakoda", or "Shake"</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="dish-plate-card" data-category="${item.category}">
      <!-- Floating Circular Plate Image (Video UI Style) -->
      <div class="dish-round-media">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </div>

      <div class="dish-card-info">
        <div class="dish-title-price-row">
          <h3 class="dish-name-title">${item.title}</h3>
          <span class="dish-price-pill">${item.price}</span>
        </div>
        <div class="dish-hindi-title">${item.hindi}</div>

        <p class="dish-desc-text">${item.desc}</p>

        <div class="dish-bottom-action-bar">
          <span class="dish-serving-note">${item.serving}</span>
          <a 
            href="https://wa.me/918894616602?text=Hello%20Monika%20Ji!%20I%20would%20like%20to%20order%20${encodeURIComponent(item.title)}%20(${encodeURIComponent(item.price)})%20from%20Magic%20Masala." 
            target="_blank" 
            rel="noopener noreferrer" 
            class="add-order-btn" 
            title="Order this dish on WhatsApp"
          >
            <span>Order</span>
            <span>+</span>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.cat-tab-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      const searchVal = document.getElementById('menuSearchInput').value;
      
      const container = document.getElementById('menuGridContainer');
      container.style.opacity = '0.2';
      container.style.transform = 'translateY(8px)';
      
      setTimeout(() => {
        renderMenu(cat, searchVal);
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
        container.style.transition = 'all 250ms ease';
      }, 100);
    });
  });
}

function initMenuSearch() {
  const searchInput = document.getElementById('menuSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const activeBtn = document.querySelector('.cat-tab-btn.active');
    const cat = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    renderMenu(cat, e.target.value);
  });
}

// ==========================================
// 5. MOBILE DRAWER NAVIGATION
// ==========================================
function initMobileDrawer() {
  const toggle = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileNavPanel');
  const links = document.querySelectorAll('.mobile-link-item');

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
  const cards = document.querySelectorAll('.bento-tile');
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
// 7. TIFFIN SUBSCRIPTION CALCULATOR
// ==========================================
function initTiffinCalculator() {
  const planSelect = document.getElementById('tiffinPlanSelect');
  const mealSelect = document.getElementById('tiffinMealType');
  const studentCount = document.getElementById('tiffinStudents');
  const costDisplay = document.getElementById('tiffinEstimateDisplay');
  const whatsappTiffinBtn = document.getElementById('whatsappTiffinBtn');

  function calculate() {
    if (!planSelect || !mealSelect || !studentCount || !costDisplay) return;

    const plan = planSelect.value;
    const meals = mealSelect.value;
    const count = parseInt(studentCount.value, 10) || 1;

    let costPerMeal = 80; // Standard single meal rate
    if (plan === 'monthly') costPerMeal = 70; // Discounted monthly student subscription

    let mealsPerDay = meals === 'both' ? 2 : 1;
    let days = 1;
    if (plan === 'weekly') days = 7;
    if (plan === 'monthly') days = 30;

    const total = costPerMeal * mealsPerDay * days * count;
    costDisplay.textContent = `₹${total.toLocaleString('en-IN')}`;

    if (whatsappTiffinBtn) {
      const msg = `Hello Monika Ji! I want to subscribe to Magic Masala Tiffin Service for ${count} person(s). Plan: ${plan.toUpperCase()}, Meals: ${meals.toUpperCase()} (${mealsPerDay}/day). Calculated Estimate: ₹${total}. Please confirm!`;
      whatsappTiffinBtn.href = `https://wa.me/918894616602?text=${encodeURIComponent(msg)}`;
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
  const dateInput = document.getElementById('resDate');

  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('resName').value.trim();
      const phone = document.getElementById('resPhone').value.trim();
      const occasion = document.getElementById('resOccasion').value;
      const guests = document.getElementById('resGuests').value;
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
      document.getElementById('confirmOccasion').textContent = `${occasion} (${guests} Guests)`;

      const waText = `Hello Monika Ji! Table reservation request #${randomBookingId}: Name: ${name}, Phone: ${phone}, Date & Time: ${date} at ${time}, Occasion: ${occasion}, Guests: ${guests}.`;
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
// 9. NEWSLETTER SUBSCRIPTION (FROM VIDEO: "EASY RECIPES SENT TO INBOX")
// ==========================================
function initNewsletterForm() {
  const form = document.getElementById('inboxNewsletterForm');
  const input = document.getElementById('newsletterEmailInput');
  const feedback = document.getElementById('newsletterFeedbackMsg');

  if (!form || !input) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = input.value.trim();
    if (val && val.includes('@')) {
      feedback.textContent = '🎉 You are subscribed to our daily specials and recipes dispatch!';
      feedback.style.display = 'block';
      feedback.style.color = '#86EFAC';
      input.value = '';
      showToast('Subscribed to Magic Masala daily menu updates!');
    } else {
      feedback.textContent = 'Please enter a valid email address.';
      feedback.style.display = 'block';
      feedback.style.color = '#FCA5A5';
    }
  });
}

// ==========================================
// 10. TOAST NOTIFICATION UTILITY
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
    toast.style.transition = 'opacity 200ms ease';
    setTimeout(() => toast.remove(), 200);
  }, 3500);
}
