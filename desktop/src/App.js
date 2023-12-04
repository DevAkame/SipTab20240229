import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import { NavBarHeader } from './ui-components';
import { withAuthenticator,  Flex } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';


import { listUserProfiles } from './graphql/queries';
import { API } from 'aws-amplify';
import FirthSetUpProfiles from './ui-components/FirthSetUpProfiles';
Amplify.configure(awsExports);


async function fechUserProfiles(subStr){
  var param = null;
  var UserProfileItems = null;
  param = { filter: {sub: {eq: subStr} }};
  const oneUserProfilesPromise = API.graphql({
    query: listUserProfiles,
    variables: param,
    authMode: 'AMAZON_COGNITO_USER_POOLS'
  });

  await oneUserProfilesPromise.then(result => {
    UserProfileItems = result.data.listUserProfiles.items;
  }).catch(error => {
    console.error(error);
  });

  if (UserProfileItems.length >= 0){
    return <FirthSetUpProfiles />;
  }else{
    console.log("is null");
    return UserProfileItems;
  };

};


function App() {
  const [user, setUser] = useState(null);
  var tmpObj = null;
  var userProfilesAry = null;
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
      tmpObj = fechUserProfiles(user.attributes.sub);
      try{
        if (tmpObj.length){
          userProfilesAry = tmpObj;
        };
      } catch (error){
        console.log(error);
        ObjsetUsreProfile = tmpObj;
      };
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


