import { Flex } from "@aws-amplify/ui-react";
import { SipTabCreateAccount, SipTabForgetPassword, SipTabSignIn,SipTabSignInOrCreateAcountChangeBar} from "../ui-components";


const changeSignInOrCreateAccount = () => {
    //console.log(target.id);
    console.log("test");
    if(e.target.id == "SignInBtn"){
        console.log("SignInBtn")
    }else if (e.target.id == "CreateAcountBtn"){
        console.log("CreateAcountBtn")
    }
};

document.getElementById("SignInBtn").addEventListener('click',console.log("test"),false);

export function SipTabLoginView(){
    return(
        <Flex
        direction="column"
        width="50vw"
        height="100%"
        gap="0rem"
        justifyContent="center"
        alignItems="center"
        paddingTop="100px"
        >
            <SipTabSignInOrCreateAcountChangeBar 
                width="400px"
                height="50px"
                overrides={{
                    "SignInBtn":{
                        onclick:console.log("test")
                    },
                    "CreateAcountBtn":{
                        onclick:changeSignInOrCreateAccount
                    }
                }}
            />
            <SipTabSignIn 
                width="400px"
            />
            <SipTabCreateAccount
                width="400px"
                display="none"
            />
            <SipTabForgetPassword
                width="400px"
                display="none"
            />

        </Flex>
    )
}