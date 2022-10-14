import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where} from "firebase/firestore";
import { db } from "../../Credentials/Index";
import { useCollection } from "react-firebase-hooks/firestore"

// CREATE
export const createPer = async(obj) => {
    const colRef = collection(db, 'Peritos');
    const data = await addDoc(colRef, obj);
    return data.id;
}
export const createCase = async(obj) => {
    const colRef = collection(db, 'Casos');
    const data = await addDoc(colRef, obj);
    return data.id;
}
// UPDATE
export const updateCases = async (id, obj) => {
    const colRef = collection(db, 'Casos');
    await updateDoc(doc(colRef, id), obj)
}
export const updatePeritos = async (id, obj) => {
    const colRef = collection(db, 'Peritos');
    await updateDoc(doc(colRef, id), obj)
}


// READ
export const getPer= async ()  => {
    const colRef = collection(db, 'Peritos');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

export const getCases= async ()  => {
    const colRef = collection(db, 'Casos');
    
    const result = await getDocs(query(colRef));
    
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getCasesByCondition = async (value) => {
    // const colRef = collection(db, 'Casos');
    // const result = await getDocs(query(colRef, where('Patente', '==', value)));
    // return getArrayFromCollection(result);
    const docusFiltrado = [];

  const collecionRef = collection(db, "Casos");
  const queryTitulo = query(
    collecionRef,
    where("Patente", "==", value)
  );
  const querySku = query(collecionRef, where("sku", "==", value));

  const arraySnapshots = await Promise.all([
    getDocs(queryTitulo),
    getDocs(querySku),
  ]);

  arraySnapshots.forEach((snapshot) => {
    snapshot.forEach((doc) => {
      docusFiltrado.push(doc.data());
    });
  });
  console.log('docusFiltrado', docusFiltrado)
  return docusFiltrado;
}

export const getItemById = async (id) => {
    const colRef = collection(db, 'items');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}

// DELETE
export const deleteItem = async (id) => {
    const colRef = collection(db, 'items');
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}