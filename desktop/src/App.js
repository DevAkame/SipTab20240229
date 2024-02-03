import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

// router 
import { Route,Navigate, Router} from 'react-router-dom';

// imported Compornent
import LoginView from './ui-lib/login/MainLogin';
import MainHomeViews from './ui-lib/home/MainHome';


Amplify.configure(awsExports);

function App () {
  const [user,setUser ] = useState(null);


  useEffect(() => {
    const fetchUserData = async () =>{
      try {
        console.log("test1");
        setUser(await Auth.currentAuthenticatedUser());
        console.log("test2");
      } catch (error){
        console.log(error);
        setUser(null);
      }
    };
  },[]);

  Hub.listen('auth',(data) =>{
    const payload = data;
    console.log(payload.event);
    if (payload.event === 'signOut'){
      setUser(null);
    };
  });

  return(
    
    <LoginView />
    
  )
};


export default App;


