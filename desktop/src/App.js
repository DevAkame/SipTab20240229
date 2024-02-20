import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import { Button, View } from '@aws-amplify/ui-react';


import { useDispatch, useSelector } from 'react-redux';
import { getSession, getUsers } from './redux/userSlice';

Amplify.configure(awsExports);


function App() {
  const { users, loading, error } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    console.log(hello);
  },[dispatch]);


  return(

<>
<View
as='div'>{users.map((user, index) => <div key={index}>{user.name}</div>)}</View>
<Button
id="ActivateCreateAccount"
width="50%"
height="unset"
shrink="0"
size="small"
disabled={false}
variation="link"
onClick={getUsers()}
backgroundColor="rgba(255,255,255,1)"
>"test"</Button>

</>
  );
};

export default App;