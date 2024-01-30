import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const { cart } = props;
  let totalPrice = 0; 
  let totalShippingCharge = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShippingCharge = totalShippingCharge + product.shipping;
  };
  const tax = totalPrice * 7 / 100;
  const grandTotal = totalPrice + totalShippingCharge + tax;
  return (
    <div className='cart'>
      <h2>Order Summary</h2>
      <div className="cal">
        <p id='selectedItem'>Selected Item: {cart.length}</p>
        <p id='totalPrice'>Total Price: ${totalPrice}</p>
        <p id='totalShippingCharge'>Total Shipping Charge: ${totalShippingCharge}</p>
        <p id='tax'>Tax: ${tax}</p>
        <h6>Grand Total: ${grandTotal}</h6>
      </div>
    </div>
  );
};

export default Cart;