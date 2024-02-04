import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
// import Counter from "./Components/Counter/Counter";
// import Header from "./Components/UI/Header";
// import Auth from "./Components/Authentication/Auth";
// import UserProfile from "./Components/UI/UserProfile";
import Layout from "./Components/Advance-Redux/Layout/Layout";
import Cart from "./Components/Advance-Redux/Cart/Cart";
import Product from "./Components/Advance-Redux/Shop/Product";
import Notification from "./Components/Advance-Redux/UI/Notification";
import { fetchCartData, sendCartData } from "./Components/Advance-Redux/Store/cart-action";

// to stop sending notification to DB whenever the app loads at start
let isInitial = true;
function App() {
  // const isAuth = useSelector((state) => state.auth.isAuthenticated);

  // advance redux
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  // for fetching data from cart
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch])
  // for sending data to cart
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {/* <div className="App">
        <header className="App-header">
          <Header />
          {!isAuth && <Auth />}
          {isAuth && <UserProfile />}
          <Counter />
        </header>
      </div> */}

      {/* Advance Redux */}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Product />
      </Layout>
    </Fragment>
  );
}

export default App;
