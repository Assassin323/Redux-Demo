import { useDispatch } from "react-redux";
import "./Auth.css";
import { authActions } from "../store/AuthReducer";

const Auth = () => {
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className="auth">
      <section>
        <form onSubmit={loginHandler}>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
