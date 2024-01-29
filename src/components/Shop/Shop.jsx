import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('../../../fakeData/products.json')
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
      <div className="cart">
        <h2>Order Summary</h2>
        <div className="cal">
          <p id='selectedItem'>Selected Item: {cart.length}</p>
          <p id='totalPrice'>Total Price: $</p>
          <p id='totalShippingCharge'>Total Shipping Charge: $</p>
          <p id='tax'>Tax: $</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;