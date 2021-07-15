import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import ShopPage from "./Pages/ShopPage";
import ContactPage from "./Pages/ContactPage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import Footer from "./Components/Footer";
import { useState } from "react";
import LeftSidebar from "./Components/LeftSidebar";
import RightSidebar from "./Components/RightSidebar";
import MobileNav from "./Components/MobileNav";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        open={open}
        setOpen={setOpen}
      />
      <Switch>
        <Route exact path="/en" component={Homepage} />
        <Route path="/en/store" component={ShopPage} />
        <Route path="/en/contact-us" component={ContactPage} />
        <Route path="/en/cart" component={CartPage} />
        <Route path="/en/checkout" component={CheckoutPage} />
      </Switch>
      <Footer />
      {isOpen ? <LeftSidebar isOpen={isOpen} setIsOpen={setIsOpen} /> : ""}
      {open ? <RightSidebar open={open} setOpen={setOpen} /> : ""}
      <MobileNav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}

export default App;
