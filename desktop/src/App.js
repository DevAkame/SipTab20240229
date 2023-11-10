import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import { FirthSetUpProfiles, NavBarHeader } from './ui-components';
import { withAuthenticator, useAuthenticator, Flex } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import { API, graphqlOperation } from 'aws-amplify';
import { getUserProfiles } from './graphql/queries';
import { CheckUserProfile } from 'src/custom-job/orginCustomJob';
Amplify.configure(awsExports);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await Auth.currentAuthenticatedUser();
        setUser(userData);
      } catch (error) {
        setUser(null);
      }
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

  // コンポーネントの外で変数optを宣言
  const opt = { filter: { id: user?.attributes.sub } };

  return (
    <div>
      <Flex direction="column" alignItems="center">
        {user ? (
          <div>
            <NavBarHeader />
            <p>testdayo</p>

            <p>{user.attributes.sub}</p>
            <p>testnandayo</p>
            {CheckUserProfile(user.attributes.sub)};
          </div>
        ) : (
          <p>Not Authenticated</p>
        )}
      </Flex>
    </div>
  );
}

export default withAuthenticator(App);
