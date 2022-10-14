// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyAhvoYySiSyE__7zJbxC7GW6Mi5RQ_5UqE",
  authDomain: "grupo-aguila.firebaseapp.com",
  projectId: "grupo-aguila",
  storageBucket: "grupo-aguila.appspot.com",
  messagingSenderId: "588341841468",
  appId: "1:588341841468:web:c3e33ac329d587a575fd39",
  measurementId: "G-21VGVDYL1Z",
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
export const db = getFirestore()

export async function uploadFile(file) {
  const storageRef = ref(storage, v4());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
