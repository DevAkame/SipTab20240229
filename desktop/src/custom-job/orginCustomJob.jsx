/*
インポート文：import { 変数名 } from './custom-job/orginCustomJob';
変数一覧：
- CheckUserProfile(arg01) ユーザプロファイル登録チェック

*/
import { API } from 'aws-amplify';
import { listUserProfiles } from '../graphql/queries';
import { Amplify, Auth, Hub } from 'aws-amplify';

// 概要：ユーザプロファイルテーブルに対象ユーザのレコードがあるかの判定を行う。
// 利用方法：CheckUserProfile(String(【ユーザID】)) ※user.attributes.subとか
// 戻り値：　bool(ユーザ有り＝正)
export async function CheckUserProfile(strSubID){
  
  const oneUserProfiles = await API.graphql({
    query: listUserProfiles(),
    variables: { filter: {sub: {eq: strSubID}} }
  });
  console.log(oneUserProfiles);
  return null;
  };
