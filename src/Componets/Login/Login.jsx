import React, { useState, useEffect } from "react";
import firebaseApp from "../../Credentials/Index";
import "./Login.css";
import profile from "../../assets/a.png"; 

import { Button } from "react-bootstrap";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { getCasesAction, getPeritos, peritosByName } from "../../Store/Actions";
import { useDispatch, useSelector } from "react-redux";
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

function Login() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPeritos());
    dispatch(getCasesAction());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(peritosByName());
    }, 2500);
  }, []);
  const firestore = getFirestore(firebaseApp);
  const navigate = useNavigate();
  const peritos = useSelector((state) => state.peritos);

  async function loginEmailPassword(email, password) {
    signInWithEmailAndPassword(auth, email, password);
  }
 
  // async function submitHandler(e) {
  //   e.preventDefault();
  //   let booll = peritos.some((el) => el.email === "email");
  //   if (booll) {
  //     const email = e.target.elements.email.value;
  //     const password = e.target.elements.password.value;
  //     // const correo = document.getElementById("formCorreo").value;
  //     // const contra = e.target.formContra.value;
  //     await loginEmailPassword(email, password);
  //   }
  // }

  const submitHandlerGoogle = (e) => {
    console.log('e.target', e.target)
    let booll = peritos.some((el) => el.email === "email");

    try {
      
        signInWithPopup(auth, googleProvider).then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          // console.log(credential)
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // console.log('user', user)
          if(peritos.some((el) => el.email === user.email)){
            navigate("/");
          }
          else{
            alert("comuniquese con su administrador")
          }
          // ...
        })
    } catch (error) {
      return alert("comuniquese con su administrador")
    }
    
  };

  return (
    <div className="body">
      <div className="contenedor">
        <div className="screen">
          <div className="screen__content">
            {/* <form className="login" onSubmit={submitHandler}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Correo"
                  controlId="formCorreo"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  controlId="formContra"
                />
              </div>

              <div className="login__field">
                <i className="login__icon fas fa-lock"></i> */}
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
            {/*   </div>

              <button className="button login__submit">
                <span className="button__text">Inicia Sesión</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form> */}
            <div className="social-login">
              {/* <Link to={"/register"}>
                <h4>Registrarse</h4>
              </Link> */}
              <div className="social-icons">
                <Button
                variant="primary"
                  type="submit"
                  onClick={(e) => submitHandlerGoogle(e)}
                  className="social-login__icon fab fa-instagram"
                  style={{fontSize: "12px", backgroundColor:"blue"}}
                >
                  Google
                </Button>
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

{
  /* <div className="contenedor">
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
</div> */
}
