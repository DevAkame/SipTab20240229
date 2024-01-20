import * as React from "react";
import { useEffect } from "react";
import { getOverrideProps } from "../ui-components/utils";
import { useStateMutationAction } from "../ui-components/utils";
import {
    Alert,
    Button,
    Flex,
    Heading,
    PasswordField,
    TextField,
    View,
  } from "@aws-amplify/ui-react";




export function STLoginViews(props) {
    const [createAcountBtnDisabled,setcreateAcountBtnDisabled] = useStateMutationAction(undefined);
    const [SgnInBtnDisabled,setSgnInBtnDisabled] = useStateMutationAction(true);
    const [SginInConfineAccept,setSginInConfineAccept] = useStateMutationAction(true);
    const [TextSginInEmail,TextSginInPasswd] = useStateMutationAction(null);

    const [CreateAcountViewNone,setCreateAcountViewNone] = useStateMutationAction("none");
    const [SginInViewNone,setSginInViewNone] = useStateMutationAction("block");

    const { overrides, ...rest } = props;

    useEffect(() =>{
        if(TextSginInEmail !== null && TextSginInPasswd !== null){
            setSginInConfineAccept(false);
        }else {
            setSginInConfineAccept(true);
        };

    },[TextSginInEmail,TextSginInPasswd]);

    
    
  
    const BtnChangeCompSgnOrCrateAccount = (e) =>{
        const BtmSignIn =  document.getElementById("ActivateSginIn");
        const BtmCreateAcunt = document.getElementById("ActivateCreateAccount");
        if(e.currentTarget.id === "ActivateCreateAccount"){
            BtmSignIn.style.backgroundColor = "rgba(255,255,255,1)";
            BtmCreateAcunt.style.backgroundColor = "rgba(178,34,34,1)";
            setcreateAcountBtnDisabled(true);
            setSgnInBtnDisabled(false);
            setSginInViewNone("none");
            setCreateAcountViewNone("block");

        } else if (e.currentTarget.id === "ActivateSginIn"){
            BtmCreateAcunt.style.backgroundColor = "rgba(255,255,255,1)";
            BtmSignIn.style.backgroundColor = "rgba(178,34,34,1)";
            setcreateAcountBtnDisabled(false);
            setSgnInBtnDisabled(true);
            setSginInViewNone("block");
            setCreateAcountViewNone("none");

        };
    
    };

    const BtnSginInJob = event =>{
        event.preventDefault();
        console.log(TextSginInEmail,TextSginInPasswd);
    };

  return (
    <Flex
        direction="column"
        width="50vw"
        height="100vh"
        gap="0rem"
        justifyContent="flex-start"
        alignItems="center"
        paddingTop="10px"
    >
{/* ログイン　アカウント作成表示切り替えバー */}
        <Flex
            direction="row"
            gap="10px"
            width="500px"
            height="50px"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            position="relative"
            padding="10px 10px 10px 10px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "STSignInOrCreateAcountChangeBar")}
            {...rest}
        >
            <Button
                id="ActivateSginIn"
                width="50%"
                height="unset"
                shrink="0"
                size="small"
                disabled={SgnInBtnDisabled}
                variation="link"
                children="SignIn"
                backgroundColor="rgba(178,34,34,1)"
                {...getOverrideProps(overrides, "SIBtn")}
                onClick={BtnChangeCompSgnOrCrateAccount} 
            ></Button>
            <Button
                id="ActivateCreateAccount"
                width="50%"
                height="unset"
                shrink="0"
                size="small"
                disabled={createAcountBtnDisabled}
                variation="link"
                children="CreateAcount"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "CAcountBtn")}
                onClick={BtnChangeCompSgnOrCrateAccount} 
            ></Button>
        </Flex>
{/* ログイン　*/}
    <View
      as="div"
      display={SginInViewNone}
      >
        <Flex
            id="SignInView"
            gap="35px"
            direction="column"
            width="500px"
            height="426px"
            justifyContent="flex-start"
            alignItems="center"
            alignContent="center"
            overflow="hidden"
            position="relative"
            padding="10px 8px 10px 8px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "SipTabSignIns")}
            {...rest}
        >
            <TextField
                width="300px"
                height="unset"
                label="Email"
                shrink="0"
                placeholder="Mail Address"
                size="small"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                value={TextSginInEmail}
                {...getOverrideProps(overrides, "SignInMail")}
            ></TextField>
            <PasswordField
                width="300px"
                height="unset"
                label="Password"
                shrink="0"
                placeholder="password"
                size="small"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                hideShowPassword={false}
                value={TextSginInPasswd}
                {...getOverrideProps(overrides, "SignInPasswd")}
            ></PasswordField>
            <Button
                width="300px"
                height="unset"
                paddingTop="10px"
                shrink="0"
                size="small"
                variation="primary"
                children="Confirm"
                disabled={SginInConfineAccept}
                onClick={BtnSginInJob}
                {...getOverrideProps(overrides, "SignInSubmitBtn")}
            ></Button>
        </Flex>
    </View>
{/* アカウント新規作成画面 */}
    <View
      as="div"
      display={CreateAcountViewNone}
      >
        <Flex
            id="CreateAcountView"
            gap="19px"
            direction="column"
            width="500px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            alignContent="center"
            overflow="hidden"
            position="relative"
            padding="31px 47px 31px 47px"
            backgroundColor="rgba(255,255,255,1)"
            
            {...getOverrideProps(overrides, "SipTabCreateAccount")}
            {...rest}
        >
            <TextField
                width="300px"
                height="unset"
                label="Email"
                shrink="0"
                placeholder="Placeholder"
                size="small"
                variation="default"
                {...getOverrideProps(overrides, "CreateAccountEmailField")}
            ></TextField>
            <TextField
                width="300px"
                height="unset"
                label="Name"
                shrink="0"
                placeholder="Placeholder"
                size="small"
                variation="default"
                {...getOverrideProps(overrides, "CreateAccountNameField")}
            ></TextField>
            <PasswordField
                width="300px"
                height="unset"
                label="Password"
                shrink="0"
                placeholder="Placeholder"
                size="small"
                variation="default"
                hideShowPassword={false}
                {...getOverrideProps(overrides, "CreateAccountPasswordField")}
            ></PasswordField>
            <PasswordField
                width="300px"
                height="unset"
                label="Confirm Password"
                shrink="0"
                placeholder="Placeholder"
                size="small"
                variation="default"
                hideShowPassword={false}
                {...getOverrideProps(overrides, "CreateAccountConfirmPasswordField")}
            ></PasswordField>
            <Button
                width="unset"
                height="unset"
                padding="3px 0px 3px 0px"
                shrink="0"
                alignSelf="stretch"
                size="default"
                variation="primary"
                children="Confirm"
                {...getOverrideProps(overrides, "CreateAccountConfirmBtn")}
            ></Button>
        </Flex>
    </View>
    </Flex>
  );
}