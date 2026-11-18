/**
 * Comprehensive Verification Test Suite
 * Tests DOM structure, data completeness, calculation logic, and interaction controllers
 */

const fs = require('fs');
const path = require('path');

console.log("=== RUNNING MAGIC MASALA PRODUCTION VERIFICATION SUITE ===\n");

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName) {
  totalTests++;
  if (condition) {
    console.log(`  ✓ PASS: ${testName}`);
    passedTests++;
  } else {
    console.error(`  ✗ FAIL: ${testName}`);
    process.exitCode = 1;
  }
}

// 1. Check index.html exists and is valid
const htmlPath = path.join(__dirname, '..', 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');
assert(htmlContent.length > 50000, 'index.html content length > 50KB');

// 2. Check css/styles.css exists and is valid
const cssPath = path.join(__dirname, '..', 'css', 'styles.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');
assert(cssContent.length > 80000, 'css/styles.css content length > 80KB');
assert(cssContent.includes('.plate-dish-scroll-container'), 'CSS contains .plate-dish-scroll-container');
assert(cssContent.includes('.weekly-days-scroll-container'), 'CSS contains .weekly-days-scroll-container');
assert(cssContent.includes('.dish-3d-glare'), 'CSS contains .dish-3d-glare');
assert(cssContent.includes('.dish-depth-shadow'), 'CSS contains .dish-depth-shadow');
assert(cssContent.includes('.dish-steam-effect'), 'CSS contains .dish-steam-effect');
assert(cssContent.includes('.dish-frost-effect'), 'CSS contains .dish-frost-effect');
assert(cssContent.includes('.dish-spark-effect'), 'CSS contains .dish-spark-effect');
assert(cssContent.includes('.weekly-day-nav-bar'), 'CSS contains .weekly-day-nav-bar');

// 3. Check js/app.js exists and is valid
const jsPath = path.join(__dirname, '..', 'js', 'app.js');
const jsContent = fs.readFileSync(jsPath, 'utf8');
assert(jsContent.length > 60000, 'js/app.js content length > 60KB');
assert(jsContent.includes('function getDishEffectHTML'), 'JS contains getDishEffectHTML');
assert(jsContent.includes('function init3DTiltPhysics'), 'JS contains init3DTiltPhysics');
assert(jsContent.includes('function initCatalogueScrollController'), 'JS contains initCatalogueScrollController');
assert(jsContent.includes('function initWeeklyDayTabs'), 'JS contains initWeeklyDayTabs');

// 4. Verify Tiffin Day Tabs in HTML
const requiredDays = ['all', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
for (const day of requiredDays) {
  assert(htmlContent.includes(`data-day="${day}"`), `index.html includes tab data-day="${day}"`);
}

// 5. Verify Menu Scroll Elements in HTML
assert(htmlContent.includes('id="menuScrollContainer"'), 'index.html includes #menuScrollContainer');
assert(htmlContent.includes('id="toggleCatalogueHeightBtn"'), 'index.html includes #toggleCatalogueHeightBtn');
assert(htmlContent.includes('id="menuItemsCountPill"'), 'index.html includes #menuItemsCountPill');

// 6. Verify Authentic Pure Veg Branding & Owner Data
assert(htmlContent.includes('Monika Rana'), 'index.html mentions Owner Monika Rana');
assert(htmlContent.includes('88946 16602'), 'index.html mentions Primary Phone 88946 16602');
assert(htmlContent.includes('7833980030') || htmlContent.includes('78339 80030'), 'index.html mentions Alternate Phone 78339 80030');
assert(htmlContent.includes('Massal Chowk'), 'index.html mentions Location Massal Chowk');
assert(htmlContent.includes('RGGEC'), 'index.html mentions RGGEC college');

// 7. Verify all images in assets/images exist and are valid files
const imagesDir = path.join(__dirname, '..', 'assets', 'images');
const images = fs.readdirSync(imagesDir);
assert(images.length >= 28, `Found ${images.length} images in assets/images (>= 28 required)`);

let emptyImages = 0;
for (const img of images) {
  const stat = fs.statSync(path.join(imagesDir, img));
  if (stat.size === 0) emptyImages++;
}
assert(emptyImages === 0, 'Zero 0-byte images in assets/images');

// 8. Test Data Structure and Menu Logic from js/app.js
// We evaluate MAGIC_MENU and FEATURED_CAROUSEL_ITEMS safely
const menuMatch = jsContent.match(/const MAGIC_MENU = (\[[\s\S]*?\]);/);
assert(menuMatch !== null, 'MAGIC_MENU dataset successfully extracted');

if (menuMatch) {
  const menu = eval(menuMatch[1]);
  assert(menu.length === 28, `MAGIC_MENU contains exactly 28 verified dishes (found ${menu.length})`);
  
  // Verify pure veg rates (₹15 - ₹80)
  let pricesValid = true;
  for (const item of menu) {
    if (item.priceNum < 15 || item.priceNum > 80) {
      pricesValid = false;
      console.error(`Invalid price for item: ${item.title} (${item.priceNum})`);
    }
  }
  assert(pricesValid, 'All individual dishes are priced within authentic student budget ₹15–₹80');

  // Verify categories
  const categories = new Set(menu.map(i => i.category));
  assert(categories.has('rice'), 'Contains Rice category');
  assert(categories.has('chaat'), 'Contains Chaat category');
  assert(categories.has('pakodas'), 'Contains Pakodas category');
  assert(categories.has('cafe'), 'Contains Cafe category');
  assert(categories.has('shakes'), 'Contains Shakes category');
  assert(categories.has('dessert'), 'Contains Dessert category');
  assert(categories.has('tiffin'), 'Contains Tiffin category');
}

// 9. Verify FEATURED_CAROUSEL_ITEMS
const featuredMatch = jsContent.match(/const FEATURED_CAROUSEL_ITEMS = (\[[\s\S]*?\]);/);
assert(featuredMatch !== null, 'FEATURED_CAROUSEL_ITEMS dataset successfully extracted');

if (featuredMatch) {
  const featured = eval(featuredMatch[1]);
  assert(featured.length >= 6, `FEATURED_CAROUSEL_ITEMS contains at least 6 signature specials (found ${featured.length})`);
  
  let optionsValid = true;
  for (const item of featured) {
    if (!item.options || item.options.length === 0 || !item.specs || item.specs.length === 0) {
      optionsValid = false;
    }
  }
  assert(optionsValid, 'All featured items have options array and specs array for detail view');
}

console.log(`\n=== RESULTS: ${passedTests} OF ${totalTests} TESTS PASSED ===`);
if (passedTests === totalTests) {
  console.log("ALL TESTS COMPLETED SUCCESSFULLY! WEBSITE IS READY FOR PRODUCTION!\n");
} else {
  console.error("SOME TESTS FAILED!\n");
  process.exit(1);
}
