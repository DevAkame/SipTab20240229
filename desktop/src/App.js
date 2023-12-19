import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import { withAuthenticator,  Flex } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import {SipTabMainHeader, SipTabSideNav} from './ui-components';
import FirthSetUpProfiles from './ui-components/FirthSetUpProfiles';


// imported Orign Jobs
import { fechUserProfiles } from './custom-job/orginCustomJob';

Amplify.configure(awsExports);





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
  var flugProfiles = false;
  useEffect(() => {
    if (user !== null){
      tmpObj = fechUserProfiles(user.attributes.sub);

      try{
        if (tmpObj.length){
          flugProfiles = true;
          userProfilesAry = tmpObj;
          
        };
      } catch (error){
        console.log(error);
      };
    };
  },user);


  

  return (
    <div>
      <Flex 
      direction="row"
      alignItems="center"
      >
        {flugProfiles ? (
          <div>
            <Flex direction="column">
            <SipTabMainHeader
              width="100vw"
              max-width="2400px"
              overrides={
                {"SipTabIcon":{
                  src :`${process.env.PUBLIC_URL}/img/siptabIcon.png`
                }}
              }
              

            />
            
              <Flex direction="row">
                <SipTabSideNav />
                
              </Flex>
            </Flex>
          </div>

        ) : (
          <>
            <FirthSetUpProfiles />
          </>
        )}
      </Flex>
    </div>
  );
}

export default withAuthenticator(App);


