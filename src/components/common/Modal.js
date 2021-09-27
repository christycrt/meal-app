import { FaTimes } from "react-icons/fa";

function Modal({ setIsModalOpen }) {
  return (
    <section id="modal">
      <div className="overlay-modal" onClick={() => setIsModalOpen(false)} />
      <div className="modal-box">
        <div className="close-btn-wrapper">
          <button
            className="close-btn"
            onClick={() => {
              setIsModalOpen(false);
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
      </div>
    </section>
  );
}

export default Modal;
