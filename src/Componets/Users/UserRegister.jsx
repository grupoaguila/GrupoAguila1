import React, { useState }  from 'react'
import Info from './Info'
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from '../../Credentials/Index'
import Home from '../Home/Home';
const auth = getAuth(firebaseApp);

function UserRegister({ user }) {
  const [User, setUser] = useState(null);
  /* console.log(user, "user") */
  return (
    <div>
      <h1>Toda la info de los registrados</h1>
      <button onClick={() => signOut(auth)}> Cerrar sesión</button>
      <h1>Usted es un {user.rol}</h1>
      {
        user.rol === "superAdmin" ? (<Info />):
        user.rol === "admin" ? (<Info />):
        user.rol === "perito" ? (<Info />):(<h1>El Usuario No pertenece a ningun rol</h1>)
      }


    </div>
  )
}

export default UserRegister
