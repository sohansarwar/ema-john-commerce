import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    // fetch('../../../fakeData/products.json')
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))

  }, []);

  const addToCart = product => {
    const newCart = [...cart, product];
    setCart(newCart);
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