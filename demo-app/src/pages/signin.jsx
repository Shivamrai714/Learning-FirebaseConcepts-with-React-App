import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Success");
        console.log(value);
        setEmail(email="");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signin-page">
      <h1> Sign In Page </h1>

      <label>Enter Your Email Address </label>
      <input
        type="text"
        placeholder="Enter the mail here"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <label>Enter Your password</label>
      <input
        type="text"
        placeholder="Enter password here"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      ></input>
      <button  onClick={signInUser}>Sign In Me </button>
    </div>
  );
};

export default SigninPage;
