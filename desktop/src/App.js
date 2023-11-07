import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import { FirthSetUpProfiles, NavBarHeader } from './ui-components';
import { withAuthenticator, useAuthenticator, Flex } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import { API, graphqlOperation } from 'aws-amplify';
import {getUserProfiles} from './graphql/queries'

Amplify.configure(awsExports);

function App() {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(userData => {
        setUser(userData);
      })
      .catch(() => {
        setUser(null);
      });

    // Hubを使用してCognitoセッションの変更を監視
    Hub.listen('auth', data => {
      const { payload } = data;
      if (payload.event === 'signOut') {
        // ユーザーがログアウトした場合の処理
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
      <Flex direction="column" alignItems="center">
        {user ? (
          <div>
            <NavBarHeader />
            <p>testdayo</p>
            
            <p>{user.attributes.sub}</p>
            {const opt = { filter : { id : user.attributes.sub } }};
            
            {API.graphql(graphqlOperation(getUserProfiles, opt)).then(values=> {
              
              const userProfilesData = values.data.getUserProfiles.items;
              if( userProfilesData == null){
                return(<p>値があったよ</p>)
              } else {
                return(<FirthSetUpProfiles />)
              }
            })};
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