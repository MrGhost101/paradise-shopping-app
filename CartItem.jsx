import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeItem } from './CartSlice.jsx';
import './CartItem.css';

export default function CartItem({ onContinueShopping, onHomeClick, totalItems }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="page-container cart-page">
      <div className="catalog-nav">
        <button onClick={onHomeClick}>← Home</button>
        <button className="catalog-cart" onClick={onContinueShopping}>Continue Shopping</button>
      </div>
      <div className="page-heading">
        <div><p className="eyebrow">Your leafy picks</p><h1>Shopping Cart</h1><p>{totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart</p></div>
      </div>
      {items.length === 0 ? (
        <section className="empty-state">
          <div className="plant-emoji">🪴</div>
          <h2>Your cart is looking a little bare</h2>
          <p>Find a plant that makes your space feel more like home.</p>
          <button className="primary-button" onClick={onContinueShopping}>Explore Plants →</button>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-list" aria-label="Cart items">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image ? `https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=300&q=80` : ''} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)} each</p>
                  <div className="quantity-control">
                    <button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                    <span>{item.quantity}</span>
                    <button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                </div>
                <div className="cart-row-total">
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  <button className="remove-button" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                </div>
              </article>
            ))}
          </section>
          <aside className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-line"><span>Plants subtotal</span><span>${total.toFixed(2)}</span></div>
            <div className="summary-line"><span>Delivery</span><span>Free</span></div>
            <div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
            <button className="checkout-button" onClick={() => window.alert('Coming Soon!')}>Checkout</button>
            <button className="continue-button" onClick={onContinueShopping}>Continue Shopping</button>
          </aside>
        </div>
      )}
    </main>
  );
}
