// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyC3xdTk3oik3R-_uabiSPjXlLtsiMbBKdM",
  authDomain: "grupoaguila-ecc10.firebaseapp.com",
  databaseURL: "https://grupoaguila-ecc10-default-rtdb.firebaseio.com",
  projectId: "grupoaguila-ecc10",
  storageBucket: "grupoaguila-ecc10.appspot.com",
  messagingSenderId: "252043465397",
  appId: "1:252043465397:web:2b47f5f8cb5f9d4c5764fc",
  measurementId: "G-7DQD18EFXK"
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
