import { useSelector } from 'react-redux';
import { useState } from 'react';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';

export default function App() {
  const [page, setPage] = useState('home');
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const goHome = () => setPage('home');
  const goPlants = () => setPage('plants');
  const goCart = () => setPage('cart');

  return (
    <div className="app-shell">
      {page !== 'home' && (
        <header className="navbar">
          <button className="brand" onClick={goHome} aria-label="Paradise Nursery home">
            <span className="brand-icon">❧</span>
            <span>Paradise Nursery</span>
          </button>
          <nav aria-label="Main navigation">
            <button onClick={goHome}>Home</button>
            <button onClick={goPlants}>Plants</button>
            <button className="cart-nav" onClick={goCart}>
              Cart <span className="cart-count">{totalItems}</span>
            </button>
          </nav>
        </header>
      )}

      {page === 'home' && (
        <main>
          <section className="hero">
            <div className="hero-overlay" />
            <div className="hero-content">
              <p className="eyebrow light">Bring the outdoors in</p>
              <h1>Paradise Nursery</h1>
              <p className="hero-tagline">Where Green Meets Serenity</p>
              <button className="primary-button" onClick={goPlants}>Get Started <span aria-hidden="true">→</span></button>
            </div>
          </section>
          <AboutUs />
          <footer className="footer">Grow a little happiness every day. © {new Date().getFullYear()} Paradise Nursery</footer>
        </main>
      )}

      {page === 'plants' && (
        <ProductList
          totalItems={totalItems}
          onHomeClick={goHome}
          onCartClick={goCart}
        />
      )}

      {page === 'cart' && (
        <CartItem
          onContinueShopping={goPlants}
          onHomeClick={goHome}
          totalItems={totalItems}
        />
      )}
    </div>
  );
}
