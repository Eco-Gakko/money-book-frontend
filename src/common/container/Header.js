import { Link, Route } from "react-router-dom";
import HeaderStyle from "../component/scss/Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={HeaderStyle.wrap}>
        <div className={HeaderStyle.btnWrap}>
          <button className={HeaderStyle.signInBtn}>
            <Link className={HeaderStyle.signInLink} to="/signin">
              Sign In
            </Link>
          </button>
          <button className={HeaderStyle.signUpBtn}>
            <Link className={HeaderStyle.signUpLink} to="/signup">
              Sign Up
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
