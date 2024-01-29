import './Product.css'

const Product = (props) => {
  const { name, price, img, stock, id, seller, ratings } = props.product;
  const addToCart = props.addToCart;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <h3>Price: ${price}</h3>
      <p>Manufacture: {seller}</p>
      <p>Rating: {ratings}</p>
      <button onClick={() => addToCart(props.product)}>Add to Cart</button>
    </div>
  );
};

export default Product;