import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Modal({ modal }) {
  return (
    <section id="modal">
      <div
        className="overlay-modal"
        onClick={() => modal.setIsModalOpen(false)}
      />
      <div className="modal-box">
        <div className="close-btn-wrapper">
          <button
            className="close-btn"
            onClick={() => {
              modal.setIsModalOpen(false);
              document.body.style.overflowY = "auto";
            }}
          >
            <FaTimes />
          </button>
        </div>
        <h4 className="login-text">Log in</h4>
        <form className="form-login">
          <div className="input-section">
            <label>Email</label>
            <input type="email" />
            <label>Password</label>
            <input type="password" />
          </div>
          <div className="forget-pwd-wrapper">
            <a className="forget-pwd" href="">
              Forgot Password?
            </a>
          </div>
          <input type="submit" className="login-btn" value="Log in" />
        </form>
        <p className="signup-text">
          Don't have an account yet?{" "}
          <Link to="#">
            <a
              href="#"
              onClick={() => {
                modal.setIsModalSignupOpen(true);
                modal.setIsModalOpen(false);
              }}
            >
              Sign up
            </a>
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Modal;
