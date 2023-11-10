import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import { FirthSetUpProfiles} from './ui-components';
import { withAuthenticator, useAuthenticator, Flex } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import { API, graphqlOperation } from 'aws-amplify';

Amplify.configure(awsExports);

//check Job group

export function CheckUserProfile(ids){
    const stats = null;
    const opt = { filter: {id: ids}};
    const userProfilesData = null;

    API.graphql(graphqlOperation(getUserProfiles, opt)).then((values) => {
        const userProfilesData = values.data.getUserProfiles.items;
        if (userProfilesData == null) {
          return (
            stats = 0
          )
          } else {
          return (
            stats = 1
          )
        }
    });

    return stats;
};
