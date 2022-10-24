import React, { useState } from "react";
import Login from "../Login/Login";
import UserRegister from "./UserRegister"
import firebaseApp from "../../Credentials/Index";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Profile from "../Profile/Profile";
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

function Users() {
  const emailUser = JSON.parse(localStorage.getItem("emailUser"));
  // window.location.reload()
  return <>{emailUser ? <Profile /> : <Login />}</>;
}

export default Users;
