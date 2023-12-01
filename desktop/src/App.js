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
Amplify.configure(awsExports);





function App() {
  const [user, setUser] = useState(null);
  var param = "";
  var UserProfileItems = "";
  var ObjsetUsreProfile = "";

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

    if (user){
      console.log("user iruyo");
      param = { filter: {sub: {eq: user.attributes.sub} }};
    };

    var oneUserProfilesPromise = API.graphql({
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
    }else{
      console.log("is null");
      ObjsetUsreProfile = <FirthSetUpProfiles />;
    };

    // Hubを使用してCognitoセッションの変更を監視
    Hub.listen('auth', (data) => {
      const { payload } = data;
      if (payload.event === 'signOut') {
        // ユーザーがログアウトした場合の処理
        setUser(null);
        param = null;
      }
    });
  }, []);


 

  return (
    <div>
      <Flex direction="column" alignItems="center">
        {user ? (
          <div>
            <NavBarHeader />

            <p>{user.attributes.sub}</p>
            {ObjsetUsreProfile}
            
            {
              //console.log("testday")
//              CheckUserProfile(user.attributes.sub)
            }
            <p>testnandayo</p>
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


