/*
インポート文：import { 変数名 } from './custom-job/orginCustomJob';
変数一覧：
- CheckUserProfile(arg01) ユーザプロファイル登録チェック

*/
import { API } from 'aws-amplify';
import { getUserProfiles } from '../graphql/queries';

// 概要：ユーザプロファイルテーブルに対象ユーザのレコードがあるかの判定を行う。
// 利用方法：CheckUserProfile(String(【ユーザID】)) ※user.attributes.subとか
// 戻り値：　bool(ユーザ有り＝正)
export async function CheckUserProfile(strSubID){
    const oneUserProfiles = await API.graphql({
      query: getUserProfiles,
      variables: { id: 'be98f05a-e74f-4e1f-9842-5bc5b8c96d9b' }
    });
    console.log(oneUserProfiles);
    return null;
  };
