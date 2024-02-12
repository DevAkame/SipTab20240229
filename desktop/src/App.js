import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import { Button } from '@aws-amplify/ui-react';


Amplify.configure(awsExports);


function App() {
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
onClick={()=> setCount(count + 1)}
></Button>
  );
};

export default App;


