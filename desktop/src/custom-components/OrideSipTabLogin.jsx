import { Flex } from "@aws-amplify/ui-react";
import { SipTabSignIn,SipTabSignInOrCreateAcountChangeBar} from "../ui-components";



export function SipTabLoginView(){
    return(
        <Flex
        direction="column"
        width="50vw"
        height="100%"
        gap="0rem"
        padding="auto"
        >
            <SipTabSignInOrCreateAcountChangeBar 
            width="400px"
            height="50px"
            />
            <SipTabSignIn 
            width="400px"
            />
        </Flex>
    )
}