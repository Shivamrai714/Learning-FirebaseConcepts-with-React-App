import { createContext , useContext, useEffect, useState} from "react";
import {initializeApp} from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {getDatabase , set , ref, child ,get , onValue } from "firebase/database"





const firebaseConfig = {
  apiKey: "AIzaSyDG6aiBzU4eN4JguBPzokdicY7D3W-8opg",
  authDomain: "shivam-app-50d12.firebaseapp.com",
  databaseURL: "https://shivam-app-50d12-default-rtdb.firebaseio.com",
  projectId: "shivam-app-50d12",
  storageBucket: "shivam-app-50d12.appspot.com",
  messagingSenderId: "301577557073",
  appId: "1:301577557073:web:8c19075074494a6c2d1470",
  databaseURL:"https://shivam-app-50d12-default-rtdb.firebaseio.com/"
  
};



const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

//Creating the firebase hook to access all these defined here functions. in App.js
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = (props) => {
  
    const [name,setName]=useState('');

  const signupUserWithEmailAndPassword = (email, password) => {
   return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

// 1.To save data  in realtime database of Firebase
const putData = ( key , data ) => set(ref(database,key) ,data);

//2.To get the data from the realtime database.
// get(child(ref(database), "/users/"  )).then(  snapshot =>{ 
//     console.log(snapshot.val());
// });

// 2.b. Since the values are refreshing , we need to put them in useEffect.
useEffect( ()=>{
    onValue(ref(database,'/users/Vedansh') ,(snapshot) =>{
        console.log(snapshot.val());
        setName(snapshot.val().email)
    
    } )
} ,[] );


  return  <FirebaseContext.Provider 
  value={{signupUserWithEmailAndPassword  , putData }}
  > 
  <h1>Email_Name :   {name} </h1>
  {props.children} </FirebaseContext.Provider>
  
}



