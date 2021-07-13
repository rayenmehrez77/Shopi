import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import ShopPage from "./Pages/ShopPage";
import ContactPage from "./Pages/ContactPage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/en" component={Homepage} />
        <Route path="/en/store" component={ShopPage} />
        <Route path="/en/contact-us" component={ContactPage} />
        <Route path="/en/cart" component={CartPage} />
        <Route path="/en/checkout" component={CheckoutPage} />
      </Switch>
    </>
  );
}

export default App;
