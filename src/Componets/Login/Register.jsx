import React, { useState } from "react";
import firebaseApp from "../../Credentials/Index";
import { useNavigate, Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth(firebaseApp);

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      return alert("comuniquese con su administrador");
    }
  };
  return (
    <div className="body">
      <div className="contenedor">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Correo"
                  controlId="formCorreo"
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                  }}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  controlId="formContra"
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                />
              </div>

              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                {/* <select
                id="rol"
                defaultValue="default"
                className="login__input"
              >
                <option value="default" disabled hidden>
                  Seleccione un Rol{" "}
                </option>
                <option value="superAdmin">Administrador</option>
                <option value="admin">Admin</option>
                <option value="perito">Perito</option>
              </select> */}
              </div>

              <button onClick={register} className="button login__submit">
                <span className="button__text">Inicia Sesión</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div className="social-login">
              <Link to={"/user"}>
                <h4>Ingresar</h4>
              </Link>
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-instagram"></a>
                <a href="#" className="social-login__icon fab fa-facebook"></a>
                <a href="#" className="social-login__icon fab fa-twitter"></a>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
