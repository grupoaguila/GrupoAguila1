import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from '../../Credentials/Index'
const auth = getAuth(firebaseApp);

function Info({ user}) {
    
  return (
    <div>
      <h1>Hola aca reenderizamos</h1>
    </div>
  )
}

export default Info
