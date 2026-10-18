# Paradise Nursery Shopping Application

A React + Redux Toolkit shopping cart for an online plant shop. Browse houseplants, explore categories, add plants to the cart, change quantities, remove items, and view live totals.

## Features
- Landing page with Paradise Nursery branding, background image, company information, and a **Get Started** button.
- Product listing with 18 houseplants in three categories: Air-Purifying, Low-Light, and Succulents.
- Plant thumbnails, names, descriptions, prices, and Add to Cart buttons.
- Shared navigation for Home, Plants, and Cart with a dynamic cart count.
- Redux Toolkit cart state with quantity updates, delete actions, subtotal calculations, and a Checkout button that displays “Coming Soon”.
- Responsive layout for desktop and mobile.

## Tech stack
- React
- Vite
- Redux Toolkit
- React Redux
- CSS

## Run locally
Install Node.js, then run:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Project files
- `src/AboutUs.jsx`: company information.
- `src/App.css`: global styling and landing-page background image.
- `src/App.jsx`: landing page and page navigation.
- `src/CartSlice.jsx`: Redux Toolkit cart slice.
- `src/ProductList.jsx`: product catalog and Add to Cart actions.
- `src/CartItem.jsx`: shopping cart page and quantity controls.
- `src/store.js`: Redux store setup.

## Assignment checklist
- [x] README with project details
- [x] About Us component
- [x] Landing page background styling
- [x] Landing page and Get Started button
- [x] Redux cart slice
- [x] Product listing with 3 categories and 18 plants
- [x] Shopping cart with quantities, delete, totals, and continue shopping
