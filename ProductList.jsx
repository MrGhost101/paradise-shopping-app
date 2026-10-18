import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import './ProductList.css';

const plants = [
  { id: 1, name: 'Snake Plant', category: 'Air-Purifying', price: 18, description: 'A hardy upright plant for a cleaner-feeling space.', image: 'photo-1593482892290-f54927ae2b7b' },
  { id: 2, name: 'Peace Lily', category: 'Air-Purifying', price: 22, description: 'Elegant white blooms and glossy green leaves.', image: 'photo-1593691509543-c55fb32e5cee' },
  { id: 3, name: 'Spider Plant', category: 'Air-Purifying', price: 14, description: 'An easy-care favorite with arching striped leaves.', image: 'photo-1572688484438-313a6e50c333' },
  { id: 4, name: 'Golden Pothos', category: 'Air-Purifying', price: 16, description: 'Trailing vines that bring life to shelves and corners.', image: 'photo-1614594975525-e45190c55d0b' },
  { id: 5, name: 'Rubber Plant', category: 'Air-Purifying', price: 26, description: 'Bold, deep-green leaves make a strong statement.', image: 'photo-1509423350716-97f9360b4e09' },
  { id: 6, name: 'Areca Palm', category: 'Air-Purifying', price: 32, description: 'A tropical palm with soft, feathery fronds.', image: 'photo-1512428813834-c702c7702b78' },
  { id: 7, name: 'ZZ Plant', category: 'Low-Light', price: 20, description: 'Glossy leaves and a relaxed attitude to watering.', image: 'photo-1632207691143-643e2b7a538e' },
  { id: 8, name: 'Chinese Evergreen', category: 'Low-Light', price: 24, description: 'Beautiful patterned leaves for softer light.', image: 'photo-1597055181300-a8f3e8c3b2b1' },
  { id: 9, name: 'Cast Iron Plant', category: 'Low-Light', price: 27, description: 'A resilient plant that tolerates low-light rooms.', image: 'photo-1501004318641-b39e6451bec6' },
  { id: 10, name: 'Heartleaf Philodendron', category: 'Low-Light', price: 17, description: 'Heart-shaped leaves on graceful trailing stems.', image: 'photo-1497250681960-ef046c08a56e' },
  { id: 11, name: 'Parlor Palm', category: 'Low-Light', price: 23, description: 'A compact palm that suits cozy indoor spaces.', image: 'photo-1597055181449-8b7a8c4e7c75' },
  { id: 12, name: 'Dracaena', category: 'Low-Light', price: 29, description: 'Sculptural foliage with a modern silhouette.', image: 'photo-1545239705-1564e58b9e4a' },
  { id: 13, name: 'Echeveria', category: 'Succulents', price: 9, description: 'A rosette-shaped succulent in soft pastel tones.', image: 'photo-1509423350716-97f9360b4e09' },
  { id: 14, name: 'Jade Plant', category: 'Succulents', price: 12, description: 'A long-lived succulent with plump oval leaves.', image: 'photo-1509423350716-97f9360b4e09' },
  { id: 15, name: 'Aloe Vera', category: 'Succulents', price: 13, description: 'A sun-loving succulent with useful fleshy leaves.', image: 'photo-1509423350716-97f9360b4e09' },
  { id: 16, name: 'Haworthia', category: 'Succulents', price: 11, description: 'A small sculptural succulent for a sunny desk.', image: 'photo-1509423350716-97f9360b4e09' },
  { id: 17, name: 'String of Pearls', category: 'Succulents', price: 19, description: 'Bead-like leaves cascade beautifully from a pot.', image: 'photo-1497250681960-ef046c08a56e' },
  { id: 18, name: 'Panda Plant', category: 'Succulents', price: 15, description: 'Velvety leaves add a playful texture to a collection.', image: 'photo-1509423350716-97f9360b4e09' },
];

const imageUrl = (image) => `https://images.unsplash.com/${image}?auto=format&fit=crop&w=700&q=80`;

export default function ProductList({ totalItems, onHomeClick, onCartClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <main className="page-container">
      <div className="catalog-nav">
        <button onClick={onHomeClick}>← Home</button>
        <button className="catalog-cart" onClick={onCartClick}>View Cart <span>{totalItems}</span></button>
      </div>
      <div className="page-heading">
        <div><p className="eyebrow">Find your green corner</p><h1>Shop the plants</h1><p>Thoughtfully chosen plants for every kind of home.</p></div>
      </div>
      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <div className="category-heading"><h2>{category}</h2><span>{plants.filter((plant) => plant.category === category).length} plants</span></div>
          <div className="plant-grid">
            {plants.filter((plant) => plant.category === category).map((plant) => {
              const inCart = cartItems.some((item) => item.id === plant.id);
              return (
                <article className="plant-card" key={plant.id}>
                  <img src={imageUrl(plant.image)} alt={plant.name} loading="lazy" />
                  <div className="plant-card-body">
                    <p className="plant-category-label">{plant.category}</p>
                    <h3>{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <div className="plant-card-bottom">
                      <strong>${plant.price.toFixed(2)}</strong>
                      <button disabled={inCart} onClick={() => dispatch(addItem(plant))}>
                        {inCart ? 'Added ✓' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
