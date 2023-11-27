import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import { NavBarHeader } from './ui-components';
import { withAuthenticator,  Flex } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

//import { CheckUserProfile } from './custom-job/orginCustomJob';

import { listUserProfiles } from './graphql/queries';
import { API } from 'aws-amplify';
import FirthSetUpProfiles, { FirthSetUpProfilesProps } from './ui-components/FirthSetUpProfiles';
Amplify.configure(awsExports);

var param = "";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await Auth.currentAuthenticatedUser();
        setUser(userData);
        

      } catch (error) {
        setUser(null);
      };

      
    };


    fetchUserData();

    // Hubを使用してCognitoセッションの変更を監視
    Hub.listen('auth', (data) => {
      const { payload } = data;
      if (payload.event === 'signOut') {
        // ユーザーがログアウトした場合の処理
        setUser(null);
      }
    });
  }, []);


  console.log("get query");
  var ObjsetUsreProfile = "";

  try {
    param = { filter: {sub: {eq: user.attributes.sub} }};
    const oneUserProfiles = API.graphql({
      query: listUserProfiles,
      variables: param,
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    });
    if (oneUserProfiles !== null){
      console.log(oneUserProfiles);
    } else{
      console.log("is null");
      ObjsetUsreProfile = "<FirthSetUpProfiles />";
      
    };
  } catch (error) {
    console.log(error);
  };


  

  return (
    <div>
      <Flex direction="column" alignItems="center">
        {user ? (
          <div>
            <NavBarHeader />
            <p>testdayo</p>

            <p>{user.attributes.sub}</p>
            {ObjsetUsreProfile}
            
            {
              //console.log("testday")
//              CheckUserProfile(user.attributes.sub)
            }
            <p>testnandayo</p>
          </div>
        ) : (
          <p>Not Authenticated</p>
        )}
      </Flex>
    </div>
  );
}

export default withAuthenticator(App);


