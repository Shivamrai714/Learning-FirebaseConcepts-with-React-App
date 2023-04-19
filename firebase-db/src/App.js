import './App.css';
import {getFirestore ,  collection , addDoc ,ref , doc, getDoc , query , where ,getDocs, updateDoc } from "firebase/firestore"
import {app} from "./firebase"

const firestore = getFirestore(app);

function App() {

  //  ADD 1 : add a single collection:
 const writeData = async() => {
  const result = await  addDoc( collection(firestore , "cities"), {
    name:"Delhi",
    pinCode : 464551,
    lat:123,
    lang:456,
  });
  console.log("Result", result)
 };

 // Make a collection inside the document.
 const makeSubCollection = async() => {
  await addDoc(collection(firestore,'cities/uS6eInCvkGohb90O0QRZ/places'),{
  name:'Railway Station',
  desc:'Metro Station place',
  date:Date.now(),
  })
 }


 // GET 2. 
 const getDocument = async() =>{
  const ref = doc(firestore , "cities", "uS6eInCvkGohb90O0QRZ");
  const snap = await getDoc(ref);

  console.log(snap.data());

 }

// Query the data . 
const getDocumentsbyQuery= async()=>{
  const collectionRef = collection(firestore,"users");
  const q = query( collectionRef , where("isMale","==",true));
  const snapshot = await getDocs(q);
  snapshot.forEach((data) => {console.log(data.data());})

}

// Update the document
const update= async() =>{
  const docRef =  doc( firestore , 'cities' , 'uS6eInCvkGohb90O0QRZ');
  await updateDoc(docRef, {
    name:"New Delhi"
  })
}










  return (
  <div className="App">
    <h1>Firebase FireStore </h1>
    <button onClick={writeData}> Put Collection Data</button>
    <button onClick={makeSubCollection}> Put Sub Collection Data</button>
    <button onClick={getDocument}> Find Document </button>
    <button onClick={getDocumentsbyQuery}> Query the data </button>
    <button onClick={update}>  Update </button>
  </div>
  );
}

export default App;
