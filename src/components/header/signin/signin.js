import React from 'react';
import "./signin.css"; 
import firebase from 'firebase/compat/app';
import signup from '../../../Assets/signup.png';


const SignIn  = ({auth}) => {   
    const signInWithGoogle = e =>{
        e.preventDefault()
        const provider=new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider);
    };
  return (
    <div className='dad'>
    <div className='child'>
      <img src={signup} alt='' id="signuup"onClick={signInWithGoogle}></img>
    </div>
    </div>

  )
}

export default SignIn ;