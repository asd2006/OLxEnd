import React from 'react';
import '../Auth.scss'
import { auth, provider } from '../../../Firebase/firebaseconfig';
import { instance } from '../../../API/Instance';

const Create = () => {
  const handleAuthWithGoogle = () => {
    auth.signInWithPopup(provider)
      .then(res => {
        console.log(res.user.multiFactor.user.email);
        console.log(res);
        // instance.post("/users",{
        // name: res.user.multiFactor.user.displayName,
        // email: res.user.multiFactor.user.email,
        // possword: res.user.multiFactor.user.email,
        // avatar: res.user.multiFactor.user.photoURL
        // })
      })
  }
  return (
    <div>
      <form >
        <input type="text" placeholder='Your name' />
        <input type="email" required placeholder='Your email' />
        <input type="password" required placeholder='Your password' />
        <input type="url" required placeholder='Your avatar' />
        <button type='submit'>Create account</button>
      </form>
      <button onClick={handleAuthWithGoogle}>Sing in with Google</button>
    </div>
  );
}

export default Create;
