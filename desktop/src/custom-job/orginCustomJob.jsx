/*
インポート文：import { 変数名 } from './custom-job/orginCustomJob';
変数一覧：
- CheckUserProfile(arg01) ユーザプロファイル登録チェック

*/


// 概要：ユーザプロファイルテーブルに対象ユーザのレコードがあるかの判定を行う。
// 利用方法：CheckUserProfile(String(【ユーザID】)) ※user.attributes.subとか
// 戻り値：　bool(ユーザ有り＝正)

import React from 'react';
import { Amplify} from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import awsExports from '../aws-exports';
import { getSex } from '../graphql/queries';

Amplify.configure(awsExports);

export function CheckUserProfile(arg01){
    const userProfilesData = null;
    API.graphql(graphqlOperation(getSex)).then((values) => {
        const userProfilesData = values.data.getUserProfiles.items;
        return ( <p>"testtstt"</p> )
    })
};
