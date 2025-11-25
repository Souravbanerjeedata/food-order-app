import Button from "./UI/Button.jsx";
import logoImg from "../assets/logo.jpg";
import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <div id="main-header">
      <div id="title">
        <img src={logoImg} alt="website logo" />
        <h1>reactfood</h1>
      </div>

      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </div>
  );
};

export default Header;
