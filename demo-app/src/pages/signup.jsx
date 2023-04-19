import { useState } from "react";
import { app } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const signupWithGoogle =() =>{
    signInWithPopup(auth,googleAuthProvider);
}

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) => {
      alert("Success : UserAdded ");
      console.log(value);
    });
  };

  return (
    <div className="signup-page">
      <h1>Register User </h1>

      <label>Email</label>
      <input
        required
        placeholder="Enter Here"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
      />

      <label>Password</label>
      <input
        required
        placeholder="Enter Here"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="text"
      />

      <br />

      <button onClick={createUser}> Add User </button>
      <button onClick={signupWithGoogle}>Sign In With Google </button>

      <hr />
    </div>
  );
};

export default SignupPage;
