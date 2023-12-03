import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import { NavBarHeader } from './ui-components';
import { withAuthenticator,  Flex } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

//import { CheckUserProfile } from './custom-job/orginCustomJob';

import { listUserProfiles } from './graphql/queries';
import { API } from 'aws-amplify';
import FirthSetUpProfiles from './ui-components/FirthSetUpProfiles';
import { use } from 'chai';
Amplify.configure(awsExports);


async function fechUserProfiles (subStr){
  var param = null;
  var UserProfileItems = null;
  param = { filter: {sub: {eq: subStr} }};
  const oneUserProfilesPromise = await API.graphql({
    query: listUserProfiles,
    variables: param,
    authMode: 'AMAZON_COGNITO_USER_POOLS'
  });

  oneUserProfilesPromise.then(result => {
    UserProfileItems = result.data.listUserProfiles.items;
  }).catch(error => {
    console.error(error);
  });

  if (UserProfileItems.length >= 0){
    console.log("atai aruyo");
    return 1;
  }else{
    console.log("is null");
    return 0;
  };

};


function App() {
  const [user, setUser] = useState(null);
  var ObjsetUsreProfile = null;

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
      console.log(payload.event);
      if (payload.event === 'signOut') {
        // ユーザーがログアウトした場合の処理
        setUser(null);
      };
    });
  }, []);

  useEffect(() => {
    if (user !== null){
      console.log("aa");
      console.log(user.attributes.sub);
    } else {
      console.log("bb");
    };
  },user);
  

  return (
    <div>
      <Flex direction="column" alignItems="center">
        {user ? (
          <div>
            <NavBarHeader />
            {ObjsetUsreProfile}
          </div>
        ) : (
          <>
            <p>Not Authenticated</p>
            <NavBarHeader />
          </>
        )}
      </Flex>
    </div>
  );
}

export default withAuthenticator(App);


