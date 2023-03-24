import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, setDoc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAFpAAouHiIb5Y7rm22-hMhZLp20esA4zU",
  authDomain: "vueproject-1853d.firebaseapp.com",
  projectId: "vueproject-1853d",
  storageBucket: "vueproject-1853d.appspot.com",
  messagingSenderId: "930946987986",
  appId: "1:930946987986:web:42c4eaf4998581c729ba0b",
  measurementId: "G-XPQXK27L3L",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getProducts(db) {
  let array = [];
  const productSnapshot = await getDocs(collection(db, "PRODUCT"));
  const productList = productSnapshot.docs.map((doc) => doc.data());
  const productID = productSnapshot.docs.map((doc) => doc.id);
  for (let i = 0; i < productID.length; i++) {
    let id = {
      id: productID[i],
    };
    array.push({ ...id, ...productList[i] });
  }
  return array;
}

async function addProduct(data){
  const ref = collection(db, "PRODUCT")
  await addDoc(ref, data)
}

async function deleteProduct(id){
  await deleteDoc(doc(db, "PRODUCT", id))
}

async function setProduct(id, item){
  await setDoc(doc(db, "PRODUCT", id), item)
}

const list = getProducts(db);
export { list, addProduct, deleteProduct, setProduct };
