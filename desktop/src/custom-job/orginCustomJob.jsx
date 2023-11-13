/*
インポート文：import { 変数名 } from './custom-job/orginCustomJob';
変数一覧：
- CheckUserProfile(arg01) ユーザプロファイル登録チェック

*/
import React from 'react';
import { Amplify} from 'aws-amplify';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import awsExports from '../aws-exports';
import { getSex, listSexes } from '../graphql/queries';

Amplify.configure(awsExports);

// 概要：ユーザプロファイルテーブルに対象ユーザのレコードがあるかの判定を行う。
// 利用方法：CheckUserProfile(String(【ユーザID】)) ※user.attributes.subとか
// 戻り値：　bool(ユーザ有り＝正)
export function CheckUserProfile(arg01){
    API.graphql(graphqlOperation(listSexes)).then(values=> {
        const data = values.data.listSexes.items;
        for(let item of data) {
            console.log(item.name);
        };
    });
};
