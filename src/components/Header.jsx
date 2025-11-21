import Button from "./UI/Button.jsx";
import logoImg from "../assets/logo.jpg";

const Header = () => {
  return (
    <div id="main-header">
      <div id="title">
        <img src={logoImg} alt="website logo" />
        <h1>reactfood</h1>
      </div>

      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </div>
  );
};

export default Header;
