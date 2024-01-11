import { Flex } from "@aws-amplify/ui-react";
import { SipTabCreateAccount, SipTabForgetPassword, SipTabSignIn} from "../ui-components";
import {STLoginViews} from "./STLoginViews";

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
            <STLoginViews
                width="400px"
                height="50px"
                
            />
        </Flex>
    )
}