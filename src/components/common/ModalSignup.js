import { FaTimes } from "react-icons/fa";

function ModalSignup({ setIsModalSignupOpen }) {
  return (
    <section id="modal">
      <div
        className="overlay-modal"
        onClick={() => setIsModalSignupOpen(false)}
      />
      <div className="modal-box">
        <div className="close-btn-wrapper">
          <button
            className="close-btn"
            onClick={() => {
              setIsModalSignupOpen(false);
              document.body.style.overflowY = "auto";
            }}
          >
            <FaTimes />
          </button>
        </div>
        <h4 className="login-text">Sign up</h4>
        <form className="form-login">
          <div className="input-section">
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Password</label>
            <input type="password" />
          </div>
          <input type="submit" className="login-btn" value="Sign up" />
        </form>
      </div>
    </section>
  );
}

export default ModalSignup;
