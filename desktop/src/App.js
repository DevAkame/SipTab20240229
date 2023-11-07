import React, { useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';
import { FirthSetUpProfiles, NavBarHeader } from './ui-components';
import { Flex } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { getUserProfiles } from './graphql/queries';

export function App() {
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

            {/* GraphQLクエリを実行 */}
            {API.graphql(graphqlOperation(getUserProfiles, opt)).then((values) => {
              const userProfilesData = values.data.getUserProfiles.items;
              if (userProfilesData == null) {
                return <p>値があったよ</p>;
              } else {
                return <FirthSetUpProfiles />;
              }
            })};
            <p>testnandayo</p>
          </div>
        ) : (
          <p>Not Authenticated</p>
        )};
      </Flex>
    </div>
  );
}
