import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

// imported Orign Jobs
import { fechUserProfiles } from './custom-job/orginCustomJob';

// router 
import { Route, Routes,Navigate} from 'react-router-dom';

// imported Compornent
import LoginView from './ui-lib/login/MainLogin';


Amplify.configure(awsExports);

function App () {
  const [user,setUser ] = useState(null);


  useEffect(() => {
    const fetchUserData = async () =>{
      try {
        console.log("test1");
        await setUser(Auth.currentAuthenticatedUser());
        console.log("test2");
      } catch (error){
        console.log(error);
        setUser(null);
      }
    };
  },[]);

  return(
    <Routes>
      <Route path='/' element={<LoginView />} />
    </Routes>
  )
};


export default App;


