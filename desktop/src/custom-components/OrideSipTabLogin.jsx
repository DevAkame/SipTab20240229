import { Flex } from "@aws-amplify/ui-react";
import { SipTabSignIn,SipTabSignInOrCreateAcountChangeBar} from "../ui-components";



export function SipTabLoginView(){
    return(
        <Flex direction="column"
        width="50vw"
        height="100%"
        padding="auto">
            <SipTabSignInOrCreateAcountChangeBar 
            height="100px"
            />
            <SipTabSignIn />
        </Flex>
    )
}