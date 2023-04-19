import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged ,signOut} from "firebase/auth";
import { app } from "./firebase";
import "./App.css";
import SignupPage from "./pages/signup";
import SigninPage from "./pages/signin";
import { useEffect, useState } from "react";

//Video 3 :

function App() {
  
   const [user,setUser] =useState(null);
   const auth = getAuth(app);

// Making the useEffet to change State after the sign
  useEffect( ()=>{  
    onAuthStateChanged(auth, (user) => {
      if(user){ 
        //Yes you are logged In
        setUser(user); 
      }else{
        //User is Logged out
        console.log("You are logged out ");
        setUser(null)
      }
    })
  } , [] );

  if(user ===  null ){
  return (
   <div className="App">
    <SignupPage></SignupPage>
    <SigninPage></SigninPage>
   </div> 
   );
}

return  (
  <div className="App">
    <h1>Hello  {user.email}  </h1>
    <button  onClick={ ()=> { signOut(auth)}}> LogOut  </button>
  </div>
);


}
export default App;












//VIDEO = 2

// const auth = getAuth(app);

// function App() {
//   const signUpUser = () => {
//     createUserWithEmailAndPassword(auth, 
//       "shivamrai@gmail.com",
//        "shivam"
//        ).then(
//       (value) => console.log(value)
//     );
//   };



//   return (
//     <div className="App">
//       <h1>Firebase React App</h1>

//       <button onClick={signUpUser}> SignUp User</button>
//     </div>
//   );
// }

// export default App;

//VIDEO 1 :
// const db = getDatabase(app);

// function App() {

//  const putData= () =>{
//    set(ref(db,"users/shivam"), {
//     id:2,
//     name:"Shivam Rai MST",
//     age:22,
//    })
//  };

//   return (
//     <div className="App">
//     <h1>Firebase React App</h1>

//    <button  onClick={putData}>  Submit Data</button>

//     </div>
//   );
// }

// export default App;
