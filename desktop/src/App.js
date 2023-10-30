import React, { useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';
import {LoginForm } from '@aws-amplify/ui-react';
import {NavBarHeader} from './ui-components';

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
      {user ? (
        <div>
          <NavBarHeader />
        </div>
      ) : (

        
        


      )}
    </div>
  );
}

export default App;