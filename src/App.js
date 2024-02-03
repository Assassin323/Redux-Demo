import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import Header from "./Components/UI/Header";
import Auth from "./Components/Authentication/Auth";
import UserProfile from "./Components/UI/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <Header />
          {!isAuth && <Auth />}
          {isAuth && <UserProfile />}
          <Counter />
        </header>
      </div>
    </Fragment>
  );
}

export default App;
