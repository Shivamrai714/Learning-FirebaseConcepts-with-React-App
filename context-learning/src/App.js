import { useFirebase } from './context/firebase'
import './App.css';
import { useState } from 'react';

function App() {



  const firebase = useFirebase();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
 
  console.log("Firebase",firebase);

 return (
    <div className="App">
     <h1>Firebase</h1>
     <input type="text" 
     onChange={ (e)=> setEmail(e.target.value)  }
     value={email} 
     placeholder='Enter email' />
     <input 
     type="password"
     onChange={ (e)=> setPassword(e.target.value)  }
     value={password}
     placeholder='Enter password' />
    <button onClick={ ()=>{ 
   firebase.signupUserWithEmailAndPassword(email,password);
   firebase.putData("users/" + "Vedansh"   , {email, password}) ;
   }} 
   > SignUp </button>
    </div>
  );



}

export default App;
