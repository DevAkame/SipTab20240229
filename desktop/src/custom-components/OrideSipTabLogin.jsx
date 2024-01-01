import { Flex } from "@aws-amplify/ui-react";
import { SipTabCreateAccount, SipTabForgetPassword, SipTabSignIn,SipTabSignInOrCreateAcountChangeBar} from "../ui-components";





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