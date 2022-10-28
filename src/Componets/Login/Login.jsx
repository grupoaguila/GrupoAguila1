import React, { useState, useEffect } from "react";
import firebaseApp from "../../Credentials/Index";

import profile from "../../assets/a.png";

import { Button } from "react-bootstrap";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../Credentials/index";
import * as C from "./styles";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { getCasesAction, getPeritos, peritosByName } from "../../Store/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "../../CustomHook/useLocalStorage";
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

function Login() {
  const [emailUser, setEmailUser] = useLocalStorage("emailUser", "");
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

  /*  async function loginEmailPassword(email, password) {
    signInWithEmailAndPassword(auth, email, password);
  } */

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

//  const submitHandlerGoogle = (e) => {
//     /* console.log('e.target', e.target) */
//     let booll = peritos.some((el) => el.email === "email");

//     try {
//       signInWithPopup(auth, googleProvider).then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         // const credential = GoogleAuthProvider.credentialFromResult(result);
//         // console.log(credential)
//         // const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         console.log("user", user);
//         let userPerito1 = peritos.some((el) => el.email === user.email);

//         //  console.log('userPerito1', userPerito1);
//         //  console.log('Perito1', peritos);
//         if (userPerito1) {
//           setEmailUser(user.email);
//           //GUARDAR EN EL LOCALSTORAGE USER.EMAIL
//           navigate("/");
//         } else {
//           alert("comuniquese con su administrador");
//         }
//         // ...
//       });
//     } catch (error) {
//       return alert("comuniquese con su administrador");
//     }
//   };
  
  



  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <C.Container>
      <C.Button onClick={handleSignin}>Login com Google</C.Button>
    </C.Container>
  );


//   return (
//     <div className="social-icons">
//       <Button
//         variant="primary"
//         type="submit"
//         onClick={(e) => submitHandlerGoogle(e)}
//         className="social-login__icon fab fa-instagram"
//         style={{ fontSize: "12px", backgroundColor: "blue" }}
//       >
//         Iniciar Sesion
//       </Button>
//     </div>
//   );
// }

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
