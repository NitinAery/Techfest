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
    image: 'assets/images/item-rajma-rice.jpg'
  },
  {
    id: 'rice-2',
    category: 'rice',
    title: 'Kadhi Rice Combo',
    hindi: 'कढ़ी चावल',
    price: '₹80',
    priceNum: 80,
    tags: ['Pure Veg', 'Himachali Style', 'Comfort Food'],
    desc: 'Traditional sour curd kadhi infused with fenugreek and soft besan pakodis, paired with hot steamed rice and sliced salad.',
    serving: 'Kadhi + Rice + Salad',
    image: 'assets/images/item-kadhi-rice.jpg'
  },
  {
    id: 'rice-3',
    category: 'rice',
    title: 'Chole Rice Combo',
    hindi: 'छोले चावल',
    price: '₹80',
    priceNum: 80,
    tags: ['Pure Veg', 'Aromatic Spices', 'North Indian'],
    desc: 'Amritsari spiced chickpea gravy simmered in roasted garam masala, served hot with steamed rice, onion lachha, and cooling raita.',
    serving: 'Chole + Rice + Salad + Raita',
    image: 'assets/images/item-chole-rice.jpg'
  },

  // --- 2. Samosa & Chaat ---
  {
    id: 'samosa-1',
    category: 'chaat',
    title: 'Crispy Samosa',
    hindi: 'समोसा',
    price: '₹15',
    priceNum: 15,
    tags: ['Fresh Daily', 'Pocket Friendly', 'Golden Crust'],
    desc: 'Golden flaky crust stuffed with spiced potatoes, green peas, coriander seeds, and ginger. Served with tamarind & mint chutney.',
    serving: 'Single Pc with 2 Chutneys',
    image: 'assets/images/item-samosa.jpg'
  },
  {
    id: 'samosa-2',
    category: 'chaat',
    title: 'Samosa Chat',
    hindi: 'समोसा चाट',
    price: '₹60',
    priceNum: 60,
    tags: ['Bestseller', 'Chatpata', 'Street Style'],
    desc: 'Crushed hot samosas topped with spicy chole gravy, fresh whisked curd, roasted jeera, saunth chutney, and crunchy sev.',
    serving: 'Generous Single Portion',
    image: 'assets/images/item-samosa-chat.jpg'
  },
  {
    id: 'samosa-3',
    category: 'chaat',
    title: 'Tikki Chat',
    hindi: 'टिक्की चाट',
    price: '₹60',
    priceNum: 60,
    tags: ['Crispy Golden', 'Tawa Fried', 'Dahi Chutney'],
    desc: 'Double shallow-fried spiced potato tikkis pressed crisp on tawa, smothered in warm chole, sweet curd, and green mint chutney.',
    serving: '2 Crispy Tikkis Portion',
    image: 'assets/images/item-tikki-chat.jpg'
  },
  {
    id: 'samosa-4',
    category: 'chaat',
    title: 'Samosa + Tikki Chat',
    hindi: 'समोसा + टिक्की चाट',
    price: '₹60',
    priceNum: 60,
    tags: ['Signature Combo', 'Student Pick', 'Double Delight'],
    desc: 'One crunchy samosa and one potato tikki crushed together with rich dahi, chole masala, onions, and sweet-sour chutneys.',
    serving: 'Double Snack Combo',
    image: 'assets/images/item-samosa-tikki-chat.jpg'
  },
  {
    id: 'samosa-5',
    category: 'chaat',
    title: 'Fruit Chat',
    hindi: 'फ्रूट चाट',
    price: '₹80',
    priceNum: 80,
    tags: ['Healthy Choice', 'Fresh Cut', 'Zero Oil'],
    desc: 'A refreshing bowl of freshly chopped seasonal fruits tossed in lemon juice and signature Magic Masala rock salt spice blend.',
    serving: 'Fresh Fruit Bowl',
    image: 'assets/images/item-fruit-chat.jpg'
  },

  // --- 3. Pakodas & Snacks ---
  {
    id: 'pakoda-1',
    category: 'pakodas',
    title: 'Veg Pakoda',
    hindi: 'वेज पकौड़ा',
    price: '₹50',
    priceNum: 50,
    tags: ['Freshly Fried', 'Crispy Batter', 'Monsoon Favorite'],
    desc: 'Fresh garden vegetables coated in seasoned ajwain gram flour batter and fried until crispy golden. Served with chutney.',
    serving: 'Full Plate with Chutney',
    image: 'assets/images/item-veg-pakoda.jpg'
  },
  {
    id: 'pakoda-2',
    category: 'pakodas',
    title: 'Onion Pakoda',
    hindi: 'प्याज पकौड़ा',
    price: '₹50',
    priceNum: 50,
    tags: ['Super Crunch', 'Chai Partner', 'Kanda Bhaji'],
    desc: 'Finely sliced red onions tossed with green chilies, coriander, and spiced besan batter, fried into crunchy golden fritters.',
    serving: 'Full Plate with Chutney',
    image: 'assets/images/item-onion-pakoda.jpg'
  },
  {
    id: 'pakoda-3',
    category: 'pakodas',
    title: 'Paneer Pakoda',
    hindi: 'पनीर पकौड़ा',
    price: '₹70',
    priceNum: 70,
    tags: ['Fresh Dairy Paneer', 'Soft Inside', 'Rich Snack'],
    desc: 'Thick slabs of fresh malai paneer sandwiched with tangy mint paste, dipped in spiced besan batter and fried golden crisp.',
    serving: 'Plate of Paneer Pakodas',
    image: 'assets/images/item-paneer-pakoda.jpg'
  },
  {
    id: 'pakoda-4',
    category: 'pakodas',
    title: 'Mix Pakoda',
    hindi: 'मिक्स पकौड़ा',
    price: '₹80',
    priceNum: 80,
    tags: ['Assorted Platter', 'Popular', 'Group Sharing'],
    desc: 'Assorted hot fritters including onion, potato, gobhi, paneer, and green chilli, sprinkled with chaat masala.',
    serving: 'Full Sharing Platter',
    image: 'assets/images/item-mix-pakoda.jpg'
  },

  // --- 4. Thick Shakes ---
  {
    id: 'shake-1',
    category: 'shakes',
    title: 'Banana Shake',
    hindi: 'केला शेक',
    price: '₹60',
    priceNum: 60,
    tags: ['Energy Booster', 'Natural Fruit', 'Fresh Milk'],
    desc: 'Fresh ripe bananas whipped smooth with chilled milk and a hint of green cardamom. Healthy campus energy booster.',
    serving: 'Tall Frosted Glass',
    image: 'assets/images/item-banana-shake.jpg'
  },
  {
    id: 'shake-2',
    category: 'shakes',
    title: 'Chocolate Shake',
    hindi: 'चॉकलेट शेक',
    price: '₹70',
    priceNum: 70,
    tags: ['Real Cafe Special', 'Thick & Frothy', 'Cocoa Rich'],
    desc: 'Creamy cold chocolate shake whipped with rich cocoa and chilled milk, crowned with dark chocolate shavings. Served with straw.',
    serving: 'Tall Frosted Glass',
    image: 'assets/images/item-chocolate-shake.jpg'
  },
  {
    id: 'shake-3',
    category: 'shakes',
    title: 'Vanilla Shake',
    hindi: 'वैनिला शेक',
    price: '₹70',
    priceNum: 70,
    tags: ['Classic Smooth', 'Chilled', 'Creamy Vanilla'],
    desc: 'Smooth and aromatic vanilla bean milkshake blended thick with full-cream milk and ice cream.',
    serving: 'Tall Frosted Glass',
    image: 'assets/images/item-vanilla-shake.jpg'
  },
  {
    id: 'shake-4',
    category: 'shakes',
    title: 'Oreo Shake',
    hindi: 'ओरियों शेक',
    price: '₹80',
    priceNum: 80,
    tags: ['Student Favorite', 'Extra Thick', 'Cookie Crumble'],
    desc: 'Crushed Oreo cookies blended with creamy vanilla ice cream and chilled milk, topped with crunchy cookie crumbs.',
    serving: 'Tall Frosted Glass',
    image: 'assets/images/item-oreo-shake.jpg'
  },
  {
    id: 'shake-5',
    category: 'shakes',
    title: 'Mango Shake',
    hindi: 'मैंगो शेक',
    price: '₹70',
    priceNum: 70,
    tags: ['Seasonal Special', 'Sweet Mango', 'Summer Favorite'],
    desc: 'Luscious ripe mango pulp blended with rich milk and chilled cubes, topped with chopped nuts. (Available in season).',
    serving: 'Tall Glass (Seasonal)',
    image: 'assets/images/item-mango-shake.jpg'
  },

  // --- 5. Desserts & Sweets ---
  {
    id: 'dessert-1',
    category: 'dessert',
    title: 'Gulab Jamun [2 Pcs]',
    hindi: 'गुलाब जामुन',
    price: '₹50',
    priceNum: 50,
    tags: ['Cardamom Syrup', 'Hot & Soft', 'Desi Sweet'],
    desc: 'Two melt-in-mouth mawa spheres steeped in warm green cardamom and saffron rose syrup. The perfect sweet ending.',
    serving: '2 Pieces (Served Hot)',
    image: 'assets/images/item-gulab-jamun.jpg'
  },
  {
    id: 'dessert-2',
    category: 'dessert',
    title: 'Gajak / Gajar Ka Halwa',
    hindi: 'गाजर का हलवा',
    price: '₹50',
    priceNum: 50,
    tags: ['Desi Ghee', 'Slow Cooked', 'Winter Classic'],
    desc: 'Grated mountain carrots slow-braised in full-cream milk, pure ghee, and khoya, garnished with roasted cashews and almonds.',
    serving: 'Warm Dessert Bowl',
    image: 'assets/images/item-gajar-halwa.jpg'
  },
  {
    id: 'dessert-3',
    category: 'dessert',
    title: 'Pastries',
    hindi: 'पेस्ट्री',
    price: 'M.R.P (₹40)',
    priceNum: 40,
    tags: ['Chilled Bakery', 'Chocolate Layered'],
    desc: 'Freshly baked chocolate sponge pastry with smooth cocoa frosting kept chilled in our dessert display chiller.',
    serving: '1 Chilled Pastry Slice',
    image: 'assets/images/item-pastries.jpg'
  },
  {
    id: 'dessert-4',
    category: 'dessert',
    title: 'Ice Cream Scoops',
    hindi: 'आइसक्रीम',
    price: 'M.R.P (₹40)',
    priceNum: 40,
    tags: ['Chilled Sundae', 'Student Treat'],
    desc: 'Assorted delightful ice cream scoops (Butterscotch, Chocolate, Vanilla) served chilled with sweet sauce.',
    serving: 'Chilled Dessert Cup',
    image: 'assets/images/item-ice-cream.jpg'
  },

  // --- 6. Cafe Specials (From Front Signboard: Indian • Italian • Chinese) ---
  {
    id: 'cafe-1',
    category: 'cafe',
    title: 'Crispy French Fries',
    hindi: 'फ्रेंच फ्राइज',
    price: '₹50',
    priceNum: 50,
    tags: ['Peri-Peri Seasoned', 'Golden Crisp', 'Cafe Classic'],
    desc: 'Crispy golden potato fingers tossed in aromatic peri-peri spices and sea salt. Served hot with tangy tomato dip and mayo.',
    serving: 'Full Golden Basket',
    image: 'assets/images/item-french-fries.jpg'
  },
  {
    id: 'cafe-2',
    category: 'cafe',
    title: 'Veg Steamed Momos',
    hindi: 'वेज मोमोज',
    price: '₹50',
    priceNum: 50,
    tags: ['Himachali Favorite', 'Fiery Chutney', 'Steamed Fresh'],
    desc: 'Thin-skinned dumplings stuffed with finely minced cabbage, carrots, onions, and mountain herbs. Served with fiery red chili-garlic chutney.',
    serving: 'Plate of 6 Pcs with Dip',
    image: 'assets/images/item-veg-momos.jpg'
  },
  {
    id: 'cafe-3',
    category: 'cafe',
    title: 'Veg Hakka Noodles / Chowmein',
    hindi: 'वेज हक्का नूडल्स',
    price: '₹60',
    priceNum: 60,
    tags: ['Wok Tossed', 'Indo-Chinese', 'Crunchy Veggies'],
    desc: 'Fresh wheat noodles tossed in smoking wok with julienned bell peppers, shredded cabbage, spring onions, and light soy sauce.',
    serving: 'Full Wok-Plated Portion',
    image: 'assets/images/item-hakka-noodles.jpg'
  },
  {
    id: 'cafe-4',
    category: 'cafe',
    title: 'Mini Italian Veg Pizza',
    hindi: 'मिनी वेज पिज्जा',
    price: '₹80',
    priceNum: 80,
    tags: ['Cheese Loaded', 'Freshly Baked', 'Italian Style'],
    desc: 'Hand-tossed mini pizza crust brushed with herbed tomato sauce, topped with sweet corn, crisp capsicum, onions, and melted mozzarella cheese.',
    serving: 'Single Mini 6-Inch Pizza',
    image: 'assets/images/item-mini-pizza.jpg'
  },
  {
    id: 'cafe-5',
    category: 'cafe',
    title: 'Veg Grilled Sandwich',
    hindi: 'वेज ग्रिल्ड सैंडविच',
    price: '₹50',
    priceNum: 50,
    tags: ['Crispy Grill', 'Mint Chutney', 'Quick Snack'],
    desc: 'Golden toasted bread stuffed with spiced potato filling, sliced cucumbers, tomatoes, and spicy green chutney, grilled with butter.',
    serving: '2 Slices Grilled & Cut in Triangles',
    image: 'assets/images/item-veg-sandwich.jpg'
  },
  {
    id: 'cafe-6',
    category: 'cafe',
    title: 'Crispy Veg Burger',
    hindi: 'वेज बर्गर',
    price: '₹50',
    priceNum: 50,
    tags: ['Aloo Patty', 'Sesame Bun', 'Student Favorite'],
    desc: 'Golden crisp spiced vegetable-potato patty layered with fresh onion rings, juicy tomatoes, crunchy lettuce, and tangy burger mayo in a toasted bun.',
    serving: 'Freshly Assembled Burger',
    image: 'assets/images/item-veg-burger.jpg'
  },

  // --- 7. Daily Tiffin Service ---
  {
    id: 'tiffin-1',
    category: 'tiffin',
    title: 'Ghar Ka Khana Tiffin Meal',
    hindi: 'घर का खाना टिफिन',
    price: '₹80',
    priceNum: 80,
    tags: ['Pure Veg', 'Freshly Cooked Daily', 'Student Plan'],
    desc: 'Balanced nutritious homestyle meal: Dal Tadka / Rajma / Chole + Seasonal Sabzi + 4 Hot Wheat Phulkas + Steamed Rice + Fresh Salad + Raita.',
    serving: 'Dal + Sabzi + 4 Roti + Rice + Salad',
    image: 'assets/images/item-tiffin-thali.jpg'
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
// 2B. SIGNATURE SHOWCASE DATASET & SPECIFICATIONS (FROM REFERENCE VIDEO)
// ==========================================
const FEATURED_CAROUSEL_ITEMS = [
  {
    id: 'rice-1',
    category: 'rice',
    title: 'Rajma Rice Special Combo',
    hindi: 'राजमा चावल कॉम्बो',
    price: '₹80',
    priceNum: 80,
    tags: ['Pure Veg', 'College Favorite', 'Desi Ghee Tadka', 'Kangri Taste'],
    desc: 'Homestyle slow-simmered Kashmiri Rajma in fragrant aromatic spices, paired with hot steamed Basmati rice, fresh cucumber-onion salad, and chilled boondi raita.',
    serving: 'Rajma + Basmati Rice + Salad + Boondi Raita',
    image: 'assets/images/item-rajma-rice.jpg',
    glow: 'rgba(16, 185, 129, 0.42)', // Emerald
    specs: [
      { label: 'Kitchen Special', value: 'Monika Rana Recipe' },
      { label: 'Preparation', value: 'Freshly plated in 5-8 mins' },
      { label: 'Dietary', value: '100% Pure Vegetarian' },
      { label: 'Portion Size', value: 'Wholesome Student Meal' }
    ],
    options: [
      { name: 'Standard Thali', price: '₹80', priceNum: 80, desc: 'Rajma + Basmati Rice + Salad + Boondi Raita', icon: '🍛' },
      { name: 'Desi Ghee Tadka', price: '₹90', priceNum: 90, desc: 'Standard Thali with rich pure Desi Ghee aroma', icon: '🧈' },
      { name: 'With 2 Hot Phulkas', price: '₹100', priceNum: 100, desc: 'Complete meal + 2 freshly made tawa phulkas', icon: '🫓' }
    ]
  },
  {
    id: 'samosa-1',
    category: 'chaat',
    title: 'Golden Crispy Samosa',
    hindi: 'कुरकुरा समोसा',
    price: '₹15',
    priceNum: 15,
    tags: ['Fresh Daily', 'Pocket Friendly', 'Golden Crust', 'Ajwain Infused'],
    desc: 'Crisp, golden flaky pastry crust stuffed with spiced potatoes, green peas, whole coriander, and ginger. Served piping hot with signature tamarind & mint chutneys.',
    serving: 'Single Samosa with 2 Chutneys',
    image: 'assets/images/item-samosa.jpg',
    glow: 'rgba(245, 158, 11, 0.42)', // Amber/Gold
    specs: [
      { label: 'Freshness', value: 'Fried fresh every 30 mins' },
      { label: 'Crust Type', value: 'Crispy Ajwain Flaky Dough' },
      { label: 'Accompaniment', value: 'Sweet Saunth & Spicy Mint Chutney' },
      { label: 'Price Guarantee', value: 'Best Student Value (₹15)' }
    ],
    options: [
      { name: 'Single Samosa', price: '₹15', priceNum: 15, desc: '1 hot crispy samosa with both signature chutneys', icon: '🥟' },
      { name: 'Samosa Duo (2 Pcs)', price: '₹30', priceNum: 30, desc: '2 crispy samosas with extra spicy green chutney', icon: '✌️' },
      { name: 'Samosa Chaat Style', price: '₹60', priceNum: 60, desc: 'Crushed with chole curry, curd, and roasted jeera', icon: '🥣' }
    ]
  },
  {
    id: 'cafe-2',
    category: 'cafe',
    title: 'Veg Steamed Momos',
    hindi: 'वेज स्टीम्ड मोमोज',
    price: '₹50',
    priceNum: 50,
    tags: ['Himachali Street Favorite', 'Fiery Red Dip', 'Thin Translucent Skin', 'Steamed Fresh'],
    desc: 'Delicate handmade dumplings packed with garden-fresh cabbage, grated carrots, garlic, and mountain herbs. Served with Monika Ji’s signature fiery red momo chutney.',
    serving: 'Plate of 6 Hot Momos with Dip',
    image: 'assets/images/item-veg-momos.jpg',
    glow: 'rgba(239, 68, 68, 0.42)', // Fiery Crimson
    specs: [
      { label: 'Stuffing', value: '100% Fresh Vegetable & Herbs' },
      { label: 'Cooking Style', value: 'Freshly Steamed to Order' },
      { label: 'Signature Sauce', value: 'Fiery Garlic-Tomato Chutney' },
      { label: 'Student Rating', value: 'Campus Evening Craving' }
    ],
    options: [
      { name: 'Steamed Momos (6 Pcs)', price: '₹50', priceNum: 50, desc: '6 delicate steamed vegetable momos with red dip', icon: '🥟' },
      { name: 'Crispy Fried Momos', price: '₹60', priceNum: 60, desc: 'Golden crunchy shallow-fried momos', icon: '✨' },
      { name: 'Double Sharing Plate (12 Pcs)', price: '₹95', priceNum: 95, desc: '12 hot momos for study group cravings', icon: '🎉' }
    ]
  },
  {
    id: 'cafe-3',
    category: 'cafe',
    title: 'Veg Hakka Chowmein',
    hindi: 'वेज हक्का चाउमीन',
    price: '₹60',
    priceNum: 60,
    tags: ['Wok Tossed', 'Indo-Chinese', 'Crunchy Peppers', 'Street Style'],
    desc: 'High-flame wok-tossed noodles loaded with crunchy bell peppers, shredded cabbage, spring onions, and a splash of aromatic soy-garlic seasoning.',
    serving: 'Full Wok-Plated Serving',
    image: 'assets/images/item-hakka-noodles.jpg',
    glow: 'rgba(245, 158, 11, 0.42)', // Amber
    specs: [
      { label: 'Wok Technique', value: 'High-Heat Smoking Wok' },
      { label: 'Veggies', value: 'Fresh Capsicum, Cabbage, Carrot' },
      { label: 'Seasoning', value: 'Natural Soy, Garlic & Pepper' },
      { label: 'Portion', value: 'Substantial Sharing Plate' }
    ],
    options: [
      { name: 'Classic Veg Chowmein', price: '₹60', priceNum: 60, desc: 'Standard wok-tossed noodles with crunchy veggies', icon: '🥢' },
      { name: 'Extra Spicy Schezwan', price: '₹70', priceNum: 70, desc: 'Tossed in fiery homemade Schezwan sauce', icon: '🌶️' },
      { name: 'Chowmein + Manchurian Combo', price: '₹95', priceNum: 95, desc: 'Hot chowmein served with rich veg Manchurian gravy', icon: '🍲' }
    ]
  },
  {
    id: 'pakoda-2',
    category: 'pakodas',
    title: 'Paneer Pakoda Platter',
    hindi: 'पनीर पकौड़ा',
    price: '₹70',
    priceNum: 70,
    tags: ['Melt In Mouth', 'Evening Snack', 'Piping Hot', 'Ajwain Batter'],
    desc: 'Generous cubes of fresh paneer coated in a spiced carom-seed besan batter, fried crisp outside and succulent within. Served with spicy green mint chutney.',
    serving: 'Generous Snack Portion with Chutney',
    image: 'assets/images/item-paneer-pakoda.jpg',
    glow: 'rgba(16, 185, 129, 0.42)', // Emerald
    specs: [
      { label: 'Paneer Quality', value: 'Fresh Malai Paneer Cubes' },
      { label: 'Batter Recipe', value: 'Light Spiced Gram Flour & Ajwain' },
      { label: 'Serving Style', value: 'Served hot with sliced onion & chutney' },
      { label: 'Pairs Best With', value: 'Hot Evening Masala Chai' }
    ],
    options: [
      { name: 'Standard Platter', price: '₹70', priceNum: 70, desc: 'Fresh crispy paneer pakoda platter with chutney', icon: '🧀' },
      { name: 'With Kadak Chai', price: '₹85', priceNum: 85, desc: 'Paneer pakoda plate + steaming ginger tea', icon: '☕' },
      { name: 'Mix Pakoda Combo', price: '₹80', priceNum: 80, desc: 'Assortment of paneer, onion, and potato pakodas', icon: '🥨' }
    ]
  },
  {
    id: 'shake-2',
    category: 'shakes',
    title: 'Rich Chocolate Thick Shake',
    hindi: 'चॉकलेट थिक शेक',
    price: '₹70',
    priceNum: 70,
    tags: ['Thick & Creamy', 'Student Craving', 'Chilled', 'Rich Cocoa'],
    desc: 'Velvety blend of rich cocoa, chilled dairy milk, and chocolate swirl, crowned with dark chocolate shavings. Served chilled in a tall frosted glass.',
    serving: 'Tall Frosted Glass Serving',
    image: 'assets/images/item-chocolate-shake.jpg',
    glow: 'rgba(217, 119, 6, 0.42)', // Warm Gold
    specs: [
      { label: 'Base', value: 'Chilled Full-Cream Milk & Cocoa' },
      { label: 'Texture', value: 'Extra Thick & Velvety' },
      { label: 'Topping', value: 'Dark Chocolate Curls & Drizzle' },
      { label: 'Serving Size', value: '350ml Tall Frosted Glass' }
    ],
    options: [
      { name: 'Classic Chocolate', price: '₹70', priceNum: 70, desc: 'Velvety cocoa shake in frosted glass', icon: '🥤' },
      { name: 'Double Choco Drizzle', price: '₹80', priceNum: 80, desc: 'Extra rich chocolate sauce and double flakes', icon: '🍫' },
      { name: 'Oreo Infusion Style', price: '₹80', priceNum: 80, desc: 'Blended with crunchy crushed Oreo cookies', icon: '🍪' }
    ]
  },
  {
    id: 'rice-2',
    category: 'rice',
    title: 'Himachali Kadhi Rice Combo',
    hindi: 'कढ़ी चावल कॉम्बो',
    price: '₹80',
    priceNum: 80,
    tags: ['Pure Veg', 'Himachali Style', 'Comfort Food', 'Methi Tadka'],
    desc: 'Authentic sour curd kadhi simmered with fenugreek seeds, mustard seeds, and soft besan pakodis, ladled generously over hot steamed rice with crisp salad.',
    serving: 'Kadhi + Rice + Crisp Salad',
    image: 'assets/images/item-kadhi-rice.jpg',
    glow: 'rgba(234, 88, 12, 0.42)', // Saffron
    specs: [
      { label: 'Kadhi Style', value: 'Authentic Kangri Sour Curd' },
      { label: 'Dumplings', value: 'Melt-in-mouth Besan Pakodis' },
      { label: 'Tadka', value: 'Whole Red Chillies, Hing & Methi' },
      { label: 'Rice', value: 'Steamed Long Grain Basmati' }
    ],
    options: [
      { name: 'Standard Combo', price: '₹80', priceNum: 80, desc: 'Kadhi + Steamed Rice + Fresh Salad', icon: '🍛' },
      { name: 'With Boondi Raita', price: '₹95', priceNum: 95, desc: 'Kadhi Chawal combo with extra chilled raita', icon: '🥣' },
      { name: 'With 2 Fresh Phulkas', price: '₹100', priceNum: 100, desc: 'Kadhi Chawal + 2 soft tawa rotis', icon: '🫓' }
    ]
  },
  {
    id: 'dessert-3',
    category: 'dessert',
    title: 'Shahi Gulab Jamun [2 Pcs]',
    hindi: 'शाही गुलाब जामुन',
    price: '₹50',
    priceNum: 50,
    tags: ['Warm & Soft', 'Sweet Tooth', 'Desi Ghee', 'Cardamom Rose'],
    desc: 'Soft mawa dumplings fried to a warm mahogany hue and drenched in cardamom-saffron sugar syrup. Served delightfully warm.',
    serving: '2 Warm Pieces with Rose Syrup',
    image: 'assets/images/item-gulab-jamun.jpg',
    glow: 'rgba(245, 158, 11, 0.42)', // Amber Glow
    specs: [
      { label: 'Mawa Quality', value: 'Fresh Pure Khoya Dumplings' },
      { label: 'Syrup Infusion', value: 'Green Cardamom & Rose Water' },
      { label: 'Serving Temperature', value: 'Served Freshly Warm' },
      { label: 'Pieces', value: '2 Large Pieces per plate' }
    ],
    options: [
      { name: '2 Warm Pieces', price: '₹50', priceNum: 50, desc: 'Standard 2 warm pieces in rose syrup', icon: '🍯' },
      { name: 'Party Pack (4 Pcs)', price: '₹95', priceNum: 95, desc: '4 warm pieces to share with hostel friends', icon: '🎉' },
      { name: 'With Vanilla Scoop', price: '₹70', priceNum: 70, desc: 'Hot Gulab Jamun paired with cold ice cream', icon: '🍨' }
    ]
  },
  {
    id: 'tiffin-service',
    category: 'tiffin',
    title: 'Ghar Ka Khana Daily Tiffin',
    hindi: 'घर जैसा शुद्ध टिफिन',
    price: '₹80 / meal',
    priceNum: 80,
    tags: ['RGGEC Delivery', '100% Homestyle', 'Monika Rana Special', 'Freshly Packed'],
    desc: 'Wholesome student tiffin prepared with homestyle love: Dal Tadka, Seasonal Vegetable, 4 Soft Phulkas, Rice, and Salad delivered straight to college gates.',
    serving: 'Complete 5-Item Balanced Meal',
    image: 'assets/images/item-tiffin-thali.jpg',
    glow: 'rgba(16, 185, 129, 0.42)', // Emerald
    specs: [
      { label: 'Daily Delivery', value: 'Massal & RGGEC Hostel Gates' },
      { label: 'Meal Composition', value: 'Dal + Sabzi + 4 Rotis + Rice + Salad' },
      { label: 'Timing', value: 'Lunch (12:30 PM) & Dinner (7:30 PM)' },
      { label: 'Monthly Discount', value: '₹70/meal on 30-day student pass' }
    ],
    options: [
      { name: 'Single Daily Meal', price: '₹80', priceNum: 80, desc: 'One fresh lunch or dinner meal delivery', icon: '🍱' },
      { name: 'Daily 2-Meal Plan', price: '₹160 / day', priceNum: 160, desc: 'Both lunch and dinner delivered hot', icon: '📦' },
      { name: 'Monthly Student Pass', price: '₹2,100 / mo', priceNum: 2100, desc: '30-day single meal pass (saves ₹300)', icon: '🎓' }
    ]
  }
];

// Unified Showcase State Controller
const ShowcaseState = {
  currentIndex: 0,
  viewMode: 'carousel', // 'carousel' | 'detail' | 'list'
  originView: 'carousel',
  selectedOptionIndex: 0
};

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initShowcaseTransformationEngine();
  renderMenu('all');
  initCategoryFilters();
  initMenuSearch();
  initMobileDrawer();
  initGalleryLightbox();
  initTiffinCalculator();
  initTableReservation();
  initNewsletterForm();
  initScrollReveals();
  initNavScrollSpy();
});

// ==========================================
// 3A. ADVANCED DYNAMIC SHOWCASE TRANSFORMATION ENGINE (PHASE 4)
// ==========================================
function initShowcaseTransformationEngine() {
  const section = document.getElementById('featuredCarouselSection');
  const carouselView = document.getElementById('showcaseCarouselView');
  const detailView = document.getElementById('showcaseDetailView');
  const listView = document.getElementById('showcaseListView');
  const viewCarouselBtn = document.getElementById('viewModeCarouselBtn');
  const viewListBtn = document.getElementById('viewModeListBtn');

  // Carousel View Elements
  const viewport = document.getElementById('carouselViewportWindow');
  const track = document.getElementById('carouselTrackStrip');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');
  const ambientGlow = document.getElementById('carouselAmbientGlow');
  const metaPanel = document.getElementById('carouselDishMetaPanel');
  const dotsRail = document.getElementById('carouselDotsRail');
  const counter = document.getElementById('carouselSlideCounter');

  // Detail View Elements
  const detailBackBtn = document.getElementById('detailBackBtn');
  const detailBackBtnText = document.getElementById('detailBackBtnText');
  const detailBreadcrumb = document.getElementById('detailBreadcrumbTitle');
  const detailTagsRow = document.getElementById('detailTagsRow');
  const detailDishTitle = document.getElementById('detailDishTitle');
  const detailDishHindi = document.getElementById('detailDishHindi');
  const detailDishDesc = document.getElementById('detailDishDesc');
  const detailSpecsGrid = document.getElementById('detailSpecsGrid');
  const detailOptionsSlider = document.getElementById('detailOptionsSlider');
  const optionsSelectedBadge = document.getElementById('optionsSelectedBadge');
  const detailPriceDisplay = document.getElementById('detailPriceDisplay');
  const detailPriceSubtext = document.getElementById('detailPriceSubtext');
  const detailWhatsAppOrderBtn = document.getElementById('detailWhatsAppOrderBtn');
  const detailFindInMenuBtn = document.getElementById('detailFindInMenuBtn');
  const detailPlateImg = document.getElementById('detailPlateImg');
  const detailFloatingPricePill = document.getElementById('detailFloatingPricePill');
  const detailHeroGlow = document.getElementById('detailHeroGlow');

  // List View Element
  const compactDishesList = document.getElementById('compactDishesList');

  if (!section || !carouselView || !detailView || !listView) return;

  const totalSlides = FEATURED_CAROUSEL_ITEMS.length;

  // 1. Render Carousel Slides
  track.innerHTML = FEATURED_CAROUSEL_ITEMS.map((item, idx) => `
    <div class="carousel-slide-item" data-index="${idx}" role="listitem" aria-label="${item.title}">
      <div class="carousel-plate-disc" title="Click to view full recipe & options">
        <img src="${item.image}" alt="${item.title}" class="carousel-plate-img" loading="${idx === 0 ? 'eager' : 'lazy'}" />
        <div class="carousel-plate-price-tag">${item.price}</div>
      </div>
    </div>
  `).join('');

  // 2. Render Pagination Dots
  if (dotsRail) {
    dotsRail.innerHTML = FEATURED_CAROUSEL_ITEMS.map((item, idx) => `
      <button type="button" class="carousel-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Select ${item.title}"></button>
    `).join('');
  }

  const slideElements = Array.from(track.querySelectorAll('.carousel-slide-item'));
  const dotElements = dotsRail ? Array.from(dotsRail.querySelectorAll('.carousel-dot')) : [];

  // 3. Render Compact List View Items
  function renderCompactListView() {
    if (!compactDishesList) return;
    compactDishesList.innerHTML = FEATURED_CAROUSEL_ITEMS.map((item, idx) => {
      const isSelected = idx === ShowcaseState.currentIndex;
      return `
        <div class="compact-dish-row ${isSelected ? 'is-selected-row' : ''}" data-index="${idx}" role="button" tabindex="0" aria-label="View ${item.title}">
          <div class="row-thumb-media">
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
          </div>
          <div class="row-dish-info">
            <h4 class="row-title">${item.title}</h4>
            <span class="row-hindi">${item.hindi}</span>
            <div class="row-meta-tags">
              <span class="row-rating-badge">★ 4.7</span>
              <span>•</span>
              <span>${item.serving}</span>
            </div>
          </div>
          <div class="row-price-action">
            <span class="row-price">${item.price}</span>
            <button type="button" class="row-inspect-btn" data-index="${idx}">
              <span>Details →</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Attach click events on list rows
    compactDishesList.querySelectorAll('.compact-dish-row').forEach(row => {
      const idx = parseInt(row.getAttribute('data-index'), 10);
      row.addEventListener('click', (e) => {
        ShowcaseState.currentIndex = idx;
        openDetailView(idx, 'list');
      });
      row.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          ShowcaseState.currentIndex = idx;
          openDetailView(idx, 'list');
        }
      });
    });
  }

  function calculateTranslateX(targetIdx) {
    if (!slideElements[targetIdx]) return 0;
    const targetSlide = slideElements[targetIdx];
    const viewportWidth = viewport.clientWidth;
    const slideCenter = targetSlide.offsetLeft + (targetSlide.offsetWidth / 2);
    return (viewportWidth / 2) - slideCenter;
  }

  function updateMetaPanel(item) {
    if (!metaPanel) return;
    metaPanel.classList.add('is-animating');

    setTimeout(() => {
      metaPanel.innerHTML = `
        <h3 class="active-dish-title">${item.title}</h3>
        <div class="active-dish-hindi">${item.hindi}</div>
        <div class="active-dish-tags">
          ${item.tags.map((tag, i) => `<span class="active-dish-tag ${i === 0 ? 'tag-accent' : ''}">• ${tag}</span>`).join('')}
        </div>
        <p class="active-dish-desc">${item.desc}</p>
        <div class="active-dish-serving-pill">🍱 Serving: ${item.serving}</div>
        <div class="active-dish-actions">
          <div class="active-dish-price-bubble">${item.price} <span>All-Inclusive</span></div>
          <button type="button" class="btn-pill btn-primary-pill" id="carouselInspectDetailsBtn">
            <span>Inspect Details & Options</span>
            <span>→</span>
          </button>
          <a 
            href="https://wa.me/918894616602?text=${encodeURIComponent('Hello Monika Ji! I would like to order ' + item.title + ' (' + item.price + ') from Magic Masala.')}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn-pill btn-whatsapp-pill"
          >
            <span>WhatsApp Order</span>
            <span>↗</span>
          </a>
        </div>
      `;

      // Hook up Inspect Details button
      const inspectBtn = metaPanel.querySelector('#carouselInspectDetailsBtn');
      if (inspectBtn) {
        inspectBtn.addEventListener('click', () => {
          openDetailView(ShowcaseState.currentIndex, 'carousel');
        });
      }

      metaPanel.classList.remove('is-animating');
    }, 140);
  }

  function goToSlide(targetIdx, animate = true) {
    if (targetIdx < 0) targetIdx = 0;
    if (targetIdx >= totalSlides) targetIdx = totalSlides - 1;

    ShowcaseState.currentIndex = targetIdx;
    const currentItem = FEATURED_CAROUSEL_ITEMS[ShowcaseState.currentIndex];

    if (!animate) {
      track.classList.add('no-transition');
    } else {
      track.classList.remove('no-transition');
    }

    const tx = calculateTranslateX(ShowcaseState.currentIndex);
    track.style.transform = `translate3d(${tx}px, 0, 0)`;

    if (!animate) {
      void track.offsetHeight;
      track.classList.remove('no-transition');
    }

    // Update Slide Classes
    slideElements.forEach((slide, i) => {
      slide.classList.remove('is-active', 'is-adjacent', 'is-distant');
      const dist = Math.abs(i - ShowcaseState.currentIndex);
      if (dist === 0) {
        slide.classList.add('is-active');
        slide.setAttribute('aria-selected', 'true');
      } else if (dist === 1) {
        slide.classList.add('is-adjacent');
        slide.setAttribute('aria-selected', 'false');
      } else {
        slide.classList.add('is-distant');
        slide.setAttribute('aria-selected', 'false');
      }
    });

    // Update Dots
    dotElements.forEach((dot, i) => {
      dot.classList.toggle('active', i === ShowcaseState.currentIndex);
      dot.setAttribute('aria-selected', i === ShowcaseState.currentIndex ? 'true' : 'false');
    });

    // Update Counter
    if (counter) {
      counter.textContent = `${ShowcaseState.currentIndex + 1} / ${totalSlides}`;
    }

    // Update Buttons
    if (prevBtn) prevBtn.disabled = ShowcaseState.currentIndex === 0;
    if (nextBtn) nextBtn.disabled = ShowcaseState.currentIndex === totalSlides - 1;

    // Update Ambient Glow
    if (ambientGlow) {
      ambientGlow.style.background = `radial-gradient(circle, ${currentItem.glow} 0%, rgba(245, 158, 11, 0.12) 50%, transparent 75%)`;
    }

    // Update Meta Panel
    updateMetaPanel(currentItem);
  }

  // ==========================================
  // VIEW MODE SWITCHING (CAROUSEL VS COMPACT LIST)
  // ==========================================
  function switchViewMode(targetMode) {
    if (ShowcaseState.viewMode === targetMode) return;
    ShowcaseState.viewMode = targetMode;

    if (targetMode === 'carousel') {
      viewCarouselBtn.classList.add('active');
      viewCarouselBtn.setAttribute('aria-selected', 'true');
      viewListBtn.classList.remove('active');
      viewListBtn.setAttribute('aria-selected', 'false');

      detailView.classList.remove('is-active');
      detailView.setAttribute('aria-hidden', 'true');
      listView.classList.remove('is-active');
      listView.setAttribute('aria-hidden', 'true');

      carouselView.classList.add('is-active');
      carouselView.setAttribute('aria-hidden', 'false');

      goToSlide(ShowcaseState.currentIndex, false);
      showToast('Switched to Signature 3D Carousel view');
    } else if (targetMode === 'list') {
      viewListBtn.classList.add('active');
      viewListBtn.setAttribute('aria-selected', 'true');
      viewCarouselBtn.classList.remove('active');
      viewCarouselBtn.setAttribute('aria-selected', 'false');

      detailView.classList.remove('is-active');
      detailView.setAttribute('aria-hidden', 'true');
      carouselView.classList.remove('is-active');
      carouselView.setAttribute('aria-hidden', 'true');

      listView.classList.add('is-active');
      listView.setAttribute('aria-hidden', 'false');

      renderCompactListView();
      showToast('Switched to Compact Vertical List view');
    }
  }

  if (viewCarouselBtn) {
    viewCarouselBtn.addEventListener('click', () => switchViewMode('carousel'));
  }
  if (viewListBtn) {
    viewListBtn.addEventListener('click', () => switchViewMode('list'));
  }

  // ==========================================
  // DETAIL VIEW TRANSFORMATION (PHASE 4 A, B, D, E)
  // ==========================================
  function openDetailView(itemIdx, origin = 'carousel') {
    ShowcaseState.currentIndex = itemIdx;
    ShowcaseState.originView = origin;
    ShowcaseState.viewMode = 'detail';
    ShowcaseState.selectedOptionIndex = 0; // Default to standard option

    const item = FEATURED_CAROUSEL_ITEMS[itemIdx];

    // Hide other views smoothly
    carouselView.classList.remove('is-active');
    carouselView.setAttribute('aria-hidden', 'true');
    listView.classList.remove('is-active');
    listView.setAttribute('aria-hidden', 'true');

    // Show Detail View
    detailView.classList.add('is-active');
    detailView.setAttribute('aria-hidden', 'false');

    // Back button text
    if (detailBackBtnText) {
      detailBackBtnText.textContent = origin === 'list' ? 'Back to List View' : 'Back to Carousel';
    }

    // Breadcrumb
    if (detailBreadcrumb) {
      detailBreadcrumb.textContent = `Signature Specials • ${item.title}`;
    }

    // Populate Dish Info
    detailDishTitle.textContent = item.title;
    detailDishHindi.textContent = item.hindi;
    detailDishDesc.textContent = item.desc;

    // Badges Row
    if (detailTagsRow) {
      detailTagsRow.innerHTML = item.tags.map((tag, i) => `
        <span class="detail-tag-pill ${i === 0 ? 'tag-emerald' : ''}">• ${tag}</span>
      `).join('');
    }

    // Specifications Grid
    if (detailSpecsGrid) {
      detailSpecsGrid.innerHTML = item.specs.map(spec => `
        <div class="detail-spec-card">
          <div class="spec-label">${spec.label}</div>
          <div class="spec-value">${spec.value}</div>
        </div>
      `).join('');
    }

    // Visual Continuity Hero Plate
    if (detailPlateImg) {
      detailPlateImg.src = item.image;
      detailPlateImg.alt = item.title;
    }
    if (detailFloatingPricePill) {
      detailFloatingPricePill.textContent = item.price;
    }
    if (detailHeroGlow) {
      detailHeroGlow.style.background = `radial-gradient(circle, ${item.glow} 0%, rgba(245, 158, 11, 0.15) 50%, transparent 75%)`;
    }

    // Render Options & Accompaniment Selector (Section E)
    renderOptionsSelector(item);

    // Initial Option sync
    updateSelectedOption(item, 0);

    // Hook Find In Menu Grid button
    if (detailFindInMenuBtn) {
      detailFindInMenuBtn.onclick = () => {
        const filterBtn = document.querySelector(`.cat-tab-btn[data-filter="${item.category}"]`) ||
                          document.querySelector('.cat-tab-btn[data-filter="all"]');
        if (filterBtn) filterBtn.click();

        const gridEl = document.getElementById('menuGridContainer');
        if (gridEl) {
          gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        showToast(`Showing ${item.title} in Menu Card below!`);
      };
    }

    // Ambient glow sync
    if (ambientGlow) {
      ambientGlow.style.background = `radial-gradient(circle, ${item.glow} 0%, rgba(245, 158, 11, 0.15) 50%, transparent 75%)`;
    }

    // Scroll smoothly to section if needed
    section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function renderOptionsSelector(item) {
    if (!detailOptionsSlider) return;

    detailOptionsSlider.innerHTML = item.options.map((opt, i) => `
      <div class="option-thumb-card ${i === 0 ? 'active' : ''}" data-opt-index="${i}" role="radio" aria-checked="${i === 0}">
        <span class="opt-indicator"></span>
        <span class="opt-name">${opt.icon} ${opt.name}</span>
        <span class="opt-price">${opt.price}</span>
      </div>
    `).join('');

    // Attach click events on option cards
    detailOptionsSlider.querySelectorAll('.option-thumb-card').forEach(card => {
      card.addEventListener('click', () => {
        const optIdx = parseInt(card.getAttribute('data-opt-index'), 10);
        updateSelectedOption(item, optIdx);
      });
    });
  }

  function updateSelectedOption(item, optIdx) {
    ShowcaseState.selectedOptionIndex = optIdx;
    const opt = item.options[optIdx];
    if (!opt) return;

    // Update cards active state
    if (detailOptionsSlider) {
      detailOptionsSlider.querySelectorAll('.option-thumb-card').forEach((card, i) => {
        card.classList.toggle('active', i === optIdx);
        card.setAttribute('aria-checked', i === optIdx ? 'true' : 'false');
      });
    }

    // Update text & price displays
    if (optionsSelectedBadge) {
      optionsSelectedBadge.textContent = opt.name;
    }
    if (detailPriceDisplay) {
      detailPriceDisplay.textContent = opt.price;
    }
    if (detailPriceSubtext) {
      detailPriceSubtext.textContent = opt.desc;
    }
    if (detailFloatingPricePill) {
      detailFloatingPricePill.textContent = opt.price;
    }

    // Update WhatsApp Order Link
    if (detailWhatsAppOrderBtn) {
      const msg = `Hello Monika Ji! I want to order ${item.title} (Option: ${opt.name} at ${opt.price}) from Magic Masala. Please confirm availability!`;
      detailWhatsAppOrderBtn.href = `https://wa.me/918894616602?text=${encodeURIComponent(msg)}`;
    }
  }

  function closeDetailView() {
    if (ShowcaseState.originView === 'list') {
      switchViewMode('list');
    } else {
      switchViewMode('carousel');
    }
  }

  if (detailBackBtn) {
    detailBackBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeDetailView();
    });
  }

  // ==========================================
  // CAROUSEL INTERACTION LISTENERS
  // ==========================================
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (ShowcaseState.currentIndex > 0) goToSlide(ShowcaseState.currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (ShowcaseState.currentIndex < totalSlides - 1) goToSlide(ShowcaseState.currentIndex + 1);
    });
  }

  dotElements.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      goToSlide(idx);
    });
  });

  // Slide Direct Click: Center if inactive, or open detail view if active!
  let isDragging = false;
  let startX = 0;
  let currentTranslateX = 0;
  let dragOffset = 0;
  let hasMoved = false;

  slideElements.forEach((slide, idx) => {
    slide.addEventListener('click', () => {
      if (hasMoved) return;
      if (ShowcaseState.currentIndex !== idx) {
        goToSlide(idx);
      } else {
        // Tapping the active centered dish opens the detail presentation!
        openDetailView(idx, 'carousel');
      }
    });
  });

  // Touch & Mouse Drag Handlers
  function startDrag(clientX) {
    isDragging = true;
    hasMoved = false;
    startX = clientX;
    dragOffset = 0;
    currentTranslateX = calculateTranslateX(ShowcaseState.currentIndex);
    track.classList.add('no-transition');
    viewport.classList.add('is-dragging');
  }

  function moveDrag(clientX) {
    if (!isDragging) return;
    const diff = clientX - startX;
    if (Math.abs(diff) > 6) {
      hasMoved = true;
    }

    let effectiveDiff = diff;
    if ((ShowcaseState.currentIndex === 0 && diff > 0) || (ShowcaseState.currentIndex === totalSlides - 1 && diff < 0)) {
      effectiveDiff = diff * 0.28;
    }

    dragOffset = effectiveDiff;
    track.style.transform = `translate3d(${currentTranslateX + dragOffset}px, 0, 0)`;
  }

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    viewport.classList.remove('is-dragging');
    track.classList.remove('no-transition');

    const threshold = 45;
    if (dragOffset < -threshold && ShowcaseState.currentIndex < totalSlides - 1) {
      goToSlide(ShowcaseState.currentIndex + 1);
    } else if (dragOffset > threshold && ShowcaseState.currentIndex > 0) {
      goToSlide(ShowcaseState.currentIndex - 1);
    } else {
      goToSlide(ShowcaseState.currentIndex);
    }

    setTimeout(() => {
      hasMoved = false;
    }, 60);
  }

  viewport.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      startDrag(e.touches[0].clientX);
    }
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length === 1) {
      moveDrag(e.touches[0].clientX);
    }
  }, { passive: true });

  viewport.addEventListener('touchend', endDrag);
  viewport.addEventListener('touchcancel', endDrag);

  viewport.addEventListener('mousedown', (e) => {
    startDrag(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (isDragging) {
      moveDrag(e.clientX);
    }
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) endDrag();
  });

  // Global Keyboard Navigation
  section.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && ShowcaseState.viewMode === 'detail') {
      e.preventDefault();
      closeDetailView();
    } else if (ShowcaseState.viewMode === 'carousel') {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (ShowcaseState.currentIndex > 0) goToSlide(ShowcaseState.currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (ShowcaseState.currentIndex < totalSlides - 1) goToSlide(ShowcaseState.currentIndex + 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides - 1);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        openDetailView(ShowcaseState.currentIndex, 'carousel');
      }
    }
  });

  // Window Resize Handling
  window.addEventListener('resize', () => {
    if (ShowcaseState.viewMode === 'carousel') {
      goToSlide(ShowcaseState.currentIndex, false);
    }
  });

  // Initial Placement
  requestAnimationFrame(() => {
    goToSlide(0, false);
  });
}

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
      <!-- Floating Circular Plate Image -->
      <div class="dish-round-media">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </div>

      <div class="dish-card-info">
        <div class="dish-tags-row">
          ${item.tags ? item.tags.slice(0, 2).map(tag => `<span class="dish-mini-tag">${tag}</span>`).join('') : ''}
        </div>

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

// ==========================================
// 11. SCROLL-TRIGGERED REVEAL OBSERVER (PHASE 5)
// ==========================================
function initScrollReveals() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements || elements.length === 0) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
}

// ==========================================
// 12. NAVIGATION ACTIVE SCROLL-SPY (PHASE 5)
// ==========================================
function initNavScrollSpy() {
  const sections = document.querySelectorAll('section[id], div[id="gallery"]');
  const navLinks = document.querySelectorAll('.nav-link-item, .mobile-link-item');
  if (!sections || sections.length === 0 || !navLinks) return;

  function onScroll() {
    const scrollPos = window.scrollY + 140;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
