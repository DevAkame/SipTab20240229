import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import {SipTabMainHeader, SipTabSideNav} from './ui-components';
import FirthSetUpProfiles from './ui-components/FirthSetUpProfiles';

import { createRoot } from 'react-dom/client';

// amplify Views 
import { View,Flex } from '@aws-amplify/ui-react';

// imported Orign Jobs
import { fechUserProfiles } from './custom-job/orginCustomJob';


// router 
import { Route, Routes,Navigate} from 'react-router-dom';
import LoginView from './ui-lib/login/MainLogin';


Amplify.configure(awsExports);

function App () {
  const [user,setUser ] = useState(null);
  const [userProfile,setUserProfile] =useState(null);
  const [userSginIn,setUserSginIn] =false;

  useEffect(() => {
    const fetchUserData = async () =>{
    try {
      const userData = await Auth.currentAuthenticatedUser();
      setUser(userData);
      setUserSginIn(true);
    } catch (error) {
      setUser(null);
      setUserSginIn(false);
    };

    fetchUserData();

    Hub.listen('auth', (data) => {
      const { payload } = data;
      if (payload.event === 'signOut') {
        // ユーザーがログアウトした場合の処理
        setUser(null);
        setUserSginIn(false);
      };
    });
  };
    
  },[]);

  var flugProfiles = false;
  var tmpObj = null;
  useEffect(() => {
    if (user !== null){
      tmpObj = fechUserProfiles(user.attributes.sub);

      try{
        if (tmpObj.length){
          flugProfiles = true;
          setUserProfile(tmpObj);
          
        };
      } catch (error){
        console.log(error);
      };
    };
  },user);

  return(
    <Routes>
      <Route path='/login' element={<LoginView />} />
      <Route path='/' element={ userSginIn ? <LoginView /> : <Navigate replace to="/login" />} />
    </Routes>
  )
};


export default App;


