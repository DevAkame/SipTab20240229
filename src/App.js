import logo from './logo.svg';
import './App.css';

import React, {useEffect} from "react";
import Amplify, {Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator} from "@aws-amplify/ui-react";

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}



export default withAuthenticator;
