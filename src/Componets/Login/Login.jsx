import React, { useState } from "react";
import firebaseApp from "../../Credentials/Index";
import "./Login.css";
import { Link } from "react-router-dom";
import profile from "../../assets/a.png";
import Button from "react-bootstrap/Button";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
const auth = getAuth(firebaseApp);

function Login() {
  const firestore = getFirestore(firebaseApp);
  const [registro, setRegisto] = useState(false);

  async function registrarUsuario(email, password, rol) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });
    console.log(infoUsuario);
    const docuRef = doc(firestore, `Usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, { correo: email, rol: rol });
  }

  function submitHandler(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;

    if (registro) {
      registrarUsuario(email, password, rol);
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }
  }

  return (
    <div className="body">
    <div className="contenedor">
    <div className="screen">
      <div className="screen__content">
        <form className="login" onSubmit={submitHandler}>
          <div className="login__field">
            <i className="login__icon fas fa-user"></i>
            <input type="text" className="login__input" placeholder="Correo" />
          </div>
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input type="password" className="login__input" placeholder="Password" />
          </div>

          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <select id="rol" defaultValue="default" className='login__input'>
            <option value="default"  disabled hidden>
            Seleccione un Rol{" "}
          </option>
          <option value="superAdmin">Administrador</option>
          <option value="admin">Admin</option>
          <option value="perito">Perito</option>
          </select>
             </div>

          <button className="button login__submit">
            <span className="button__text">{registro ? "registrate" : "Inicia Sesión"}</span>
            <i className="button__icon fas fa-chevron-right"></i>
          </button>				
        </form>
        <div className="social-login">
        <h4
      style={{cursor: 'pointer', color: 'inherit'}}
      onClick={() => setRegisto(!registro)}
    >
      {registro ? "Ya tengo Cuenta" : "Registrarse"}
    </h4>
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

export default Login;


{/* <div className="contenedor">
<div className="sub-main">
  <div>
    <div className="imgs">
      <div className="container-image">
        <img src={profile} alt="profile" className="profile" />
      </div>
    </div>
    <h1>{registro ? "registrate" : "Inicia Sesión"}</h1>
    <br />
    <br />
    <form onSubmit={submitHandler}>
      <label>
        <input
          type="email"
          id="email"
          placeholder="Correo"
          className="name"
        />
      </label>
      <br />
      <br />
      <label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="name"
        />
      </label>
      <br />
      <br />
      <label>
        Rol
        <select id="rol" defaultValue="default">
          <option value="default" disabled hidden>
            Seleccione un Rol{" "}
          </option>
          <option value="superAdmin">Administrador</option>
          <option value="admin">Admin</option>
          <option value="perito">Perito</option>
        </select>
      </label>
      <br />
      <br />
      <button className="login-button" type="submit">
        {registro ? "registrate" : "Inicia Sesión"}
      </button>
    </form>
    <br />
    <br />
    <button
      className="registerbutton"
      onClick={() => setRegisto(!registro)}
    >
      {registro ? "Ya tengo Cuenta" : "Registrarse"}
    </button>
  </div>
</div>
</div> */}