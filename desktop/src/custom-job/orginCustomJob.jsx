/*
インポート文：import { 変数名 } from './custom-job/orginCustomJob';
変数一覧：
- CheckUserProfile(arg01) ユーザプロファイル登録チェック

*/
import { API } from 'aws-amplify';
import { listUserProfiles } from '../graphql/queries';
import { FirthSetUpProfiles } from '../ui-components';

// 概要：ユーザプロファイルテーブルに対象ユーザのレコードがあるかの判定を行う。
// 利用方法：CheckUserProfile(String(【ユーザID】)) ※user.attributes.subとか
// 戻り値：　bool(ユーザ有り＝正)
export async function fechUserProfiles(subStr){
  var param = null;
  var UserProfileItems = null;
  param = { filter: {sub: {eq: subStr} }};
  const oneUserProfilesPromise = API.graphql({
    query: listUserProfiles,
    variables: param,
    authMode: 'AMAZON_COGNITO_USER_POOLS'
  });

  await oneUserProfilesPromise.then(result => {
    UserProfileItems = result.data.listUserProfiles.items;
  }).catch(error => {
    console.error(error);
  });

  if (UserProfileItems.length >= 0){
    return <FirthSetUpProfiles />;
  }else{
    console.log("is null");
    return UserProfileItems;
  };

};