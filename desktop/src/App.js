import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import { Button } from '@aws-amplify/ui-react';


import { useDispatch, useSelector } from 'react-redux';
import { increase } from './redux/counter';
import { getUsers } from './redux/userSlice';

Amplify.configure(awsExports);


function App() {
  const {hello,loading,error} = useSelector((state) => state.hello);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    console.log(hello);
  },[dispatch]);


  return(


<Button
id="ActivateCreateAccount"
width="50%"
height="unset"
shrink="0"
size="small"
disabled={false}
variation="link"
children="test"
backgroundColor="rgba(255,255,255,1)"
onClick={() => dispatch(getUsers())}
>test</Button>

  );
};

export default App;