import { Flex } from "@aws-amplify/ui-react";
import { SipTabCreateAccount, SipTabForgetPassword, SipTabSignIn} from "../ui-components";
import STLoginViews from "./STLoginViews";

export function SipTabLoginView(){
    document.getElementById("SignInBtn").addEventListener('click',console.log("test"),false);
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
            <STLoginViews
                width="400px"
                height="50px"
                
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