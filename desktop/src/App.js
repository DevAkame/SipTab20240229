import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import { Button } from '@aws-amplify/ui-react';


import { useDispatch, useSelector } from 'react-redux';
import { getSession } from './redux/userSlice';

Amplify.configure(awsExports);


function App() {
  const {hello,loading,error} = useSelector((state) => state.hello);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSession());
    console.log(hello);
  },);


  return(


<Button
id="ActivateCreateAccount"
width="50%"
height="unset"
shrink="0"
size="small"
disabled={false}
variation="link"
children={getSession()}
backgroundColor="rgba(255,255,255,1)"
>{user.session}</Button>

  );
};

export default App;