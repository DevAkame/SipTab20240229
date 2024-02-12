import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

// router 
import { Route,Navigate, Routes} from 'react-router-dom';

// imported Compornent
import LoginView from './ui-lib/login/MainLogin';
import MainHomeViews from './ui-lib/home/MainHome';
import { Button, View } from '@aws-amplify/ui-react';


Amplify.configure(awsExports);


function PreApp() {
  const [count,setCount] = useState(0);
  return(

<Button
id="ActivateCreateAccount"
width="50%"
height="unset"
shrink="0"
size="small"
disabled={false}
variation="link"
children={count}
backgroundColor="rgba(255,255,255,1)"
{...getOverrideProps(overrides, "CAcountBtn")}
onClick={()=> setCount(count + 1)}
></Button>
  );
};

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
    <Routes>
      <Route path='/login' element={<LoginView /> } />
      <Route path='/' element={user ? <MainHomeViews /> : <Navigate replace to="/login" />} />

    </Routes>
   

  )
};

//export default App;
// test
export default PreApp;


