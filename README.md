# REDBRICK COFFEE — Web Application
> **"Scarlet ink editorial on butcher paper"**

A warm, editorial, and visually rich web application designed for **Redbrick Coffee Roasters**, an artisanal specialty coffee house and scratch bakery.

---

## ☕ Design System & Aesthetic Foundation

The design strictly implements the **Redbrick Style Reference** specification:
- **Palette:**
  - **Brick Red (`#e82c2a`):** The signature aggressive scarlet accent that saturates every interactive surface, wordmark, section labels, running heads, rules, and outlined actions.
  - **Press Black (`#212529`):** Primary body and paragraph text for high legibility without digital glare.
  - **Cream White (`#ffffff`):** Page canvas and base reading surface that creates a tactile, printed broadsheet feel.
  - **Soft Grey (`#f2f2f2`):** Elevated product card surface (one subtle step below canvas) with **25px border-radius** and zero drop shadows.
  - **Carbon (`#121212`):** Deep anchor for footer, running heads, and dark inverse panels.
- **Typography:**
  - **Display Headlines:** Editorial Old (`Playfair Display` at weight 300) scaled from 85px to 150px with tight line-height (~1.0), never bold.
  - **Body & UI:** Surt (`Plus Jakarta Sans` at weight 400) with positive letter-spacing (`0.013em` to `0.04em`) for a printed typeset feel.
  - **Micro-Labels & Taglines:** GTStandard-M (`JetBrains Mono` at 10px with `0.06em` tracking) mimicking letterpress taglines.
- **Elevation Philosophy:** 
  - Strictly avoids harsh drop shadows. Elevation is achieved through **25px border-radius**, tonal contrast between `#ffffff` and `#f2f2f2`, and hairline `#e82c2a` rules.
- **Action Philosophy:**
  - Ghost/outlined actions with 1px `#e82c2a` borders and pill radii (`50px` or `3.75px`). No solid filled buttons.

---

## 🏛️ Page Architecture & Features

1. **Top Announcement Bar (`#e82c2a`)**:
   - Full-bleed scarlet banner with tracked letterpress micro-type: `"FOR COFFEE DRINKERS • ROASTED IN SMALL BATCHES • DAILY BAKE FROM 7:00 AM"`.
   - Secondary quick navigation (`About`, `Wholesale`, `Table Booking`, `Contact`).

2. **Primary & Secondary Header Navigation**:
   - 3D red brick isometric logo paired with `REDBRICK` wordmark.
   - Primary navigation links and outlined action button: `Book a Table →`.
   - Secondary sub-category navigation strip below a 1px `#e82c2a` rule (`Coffee Coffee`, `Good Day Blend`, `Rogue Single Origin`, `Dark Batch`, `48-Hr Viennoiserie`, etc.).
   - Responsive slide-out mobile drawer with animated toggle.

3. **Hero Section (50/50 Editorial Split)**:
   - Left: Weight-300 display headline (`"Morning ritual printed in scarlet."`), tracked body paragraph, and dual outlined actions.
   - Right: 25px radius overhead lifestyle photograph of morning coffee and flaky pastry.

4. **Product Blend & Signature Menu Showcase (`#f2f2f2` Cards)**:
   - Interactive category filter pills (`All Offerings`, `Specialty Blends`, `Single Origin`, `Scratch Bakery`, `Brunch Plates`).
   - Cards with 25px radius, 30px padding, no drop shadows, centered package/dish photography, tasting notes, and parlour ordering action.

5. **Brand Story & Craft (Alternating 50/50 Splits)**:
   - Alternating editorial spreads highlighting **Direct-Trade sourcing**, **48-Hour wild sourdough fermentation**, and **Small-batch precision roasting**.

6. **Curated Ambiance Gallery (Editorial Bento Grid)**:
   - Six curated spaces (Sunlit Oak Bench, Terrazzo & Brass Bar, Wheel-Thrown Ceramics, Garden Patio, Fresh Bake Rack, Pour-Over Slow Bar).
   - Click-to-enlarge **interactive full-screen Lightbox modal** with captions and keyboard ESC navigation.

7. **Table Reservation System (Editorial Split Architecture)**:
   - Left: Daily service hours, location, seating descriptions, and walk-in policies.
   - Right: Single-view booking engine with date picker (past dates disabled), party size pills (1–8+), time slot pills, and seating atmosphere selection (Window Bench, Garden Courtyard, Espresso Counter).
   - Generates an instant printable **Reservation Voucher Card** (`RB-XXXXX`) upon submission.

8. **Carbon (`#121212`) Footer**:
   - Large editorial display statement: *"Good coffee speaks quietly."*
   - Horizontal mini-navigation in `#e82c2a`.
   - Dispatch newsletter signup with instant feedback validation.
   - Roastery details, daily hours, and running copyright micro-labels.

---

## 🚀 How to Run & View

The project is completely self-contained with no external build steps required.

### Local Development Server
A lightweight HTTP server is running at:
```bash
http://127.0.0.1:4321/
```

Or start a server anytime:
```bash
# Python
python3 -m http.server 4321

# Or with Node
npx serve .
```

Simply open [http://127.0.0.1:4321](http://127.0.0.1:4321) in your browser to experience the website!

