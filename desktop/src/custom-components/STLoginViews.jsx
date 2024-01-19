import * as React from "react";
import { getOverrideProps } from "../ui-components/utils";
import { useStateMutationAction } from "../ui-components/utils";
import {
    Alert,
    Button,
    Flex,
    Heading,
    PasswordField,
    TextField,
  } from "@aws-amplify/ui-react";




export function STLoginViews(props) {
    const [createAcountBtnDisabled,setcreateAcountBtnDisabled] = useStateMutationAction(undefined);
    const [SgnInBtnDisabled,setSgnInBtnDisabled] = useStateMutationAction(undefined);
    setSgnInBtnDisabled(true);

    const { overrides, ...rest } = props;

  
    const BtnChangeCompSgnOrCrateAccount = (e) =>{
        const BtmSignIn =  document.getElementById("ActivateSginIn");
        const BtmCreateAcunt = document.getElementById("ActivateCreateAccount");
        const ViewSignIn = document.getElementById("SignInView");
        const ViewCreateAcunt = document.getElementById("CreateAcountView");
        if(e.currentTarget.id === "ActivateCreateAccount"){
            BtmSignIn.style.backgroundColor = "rgba(255,255,255,1)";
            BtmCreateAcunt.style.backgroundColor = "rgba(178,34,34,1)";
            setcreateAcountBtnDisabled(true);
            setSgnInBtnDisabled(false);
            ViewSignIn.style.display = "none";
            ViewCreateAcunt.style.display = "block";

        } else if (e.currentTarget.id === "ActivateSginIn"){
            BtmCreateAcunt.style.backgroundColor = "rgba(255,255,255,1)";
            BtmSignIn.style.backgroundColor = "rgba(178,34,34,1)";
            setcreateAcountBtnDisabled(false);
            setSgnInBtnDisabled(true);
            ViewSignIn.style.display = "block";
            ViewCreateAcunt.style.display = "none";

        }
    
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

    </Flex>
  );
};
