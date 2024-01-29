import './Header.css'
import Logo from '../../../images/Logo.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <a href="/"><img src={Logo} alt="" /></a>
      </div>
      <div className="menu">
        <a href="/shop">Shop</a>
        <a href="/orders">Orders</a>
        <a href="/inventory">Inventory</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;