import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);
  useEffect(() => {
    const storedCart = getShoppingCart();
    for (const id in storedCart) {
      const addedProducts = products.find(product => product.id === id);
      if (addedProducts) {
        const quantity = storedCart[id];
        addedProducts.quantity = quantity;
        console.log(addedProducts);
      }
    }
  }, [products])

  const addToCart = product => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id)
  };

  return (
    <div className='shop'>
      <div className="products">
        {
          products.map(product => <Product addToCart={addToCart} key={product.id} product={product}></Product>)
        }
      </div>
      <div className='cart-main'>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;