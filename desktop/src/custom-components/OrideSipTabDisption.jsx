import { Flex } from "@aws-amplify/ui-react";
import { SipTabDisption } from "../ui-components";

export function OrideSipTabDisption(){
    return(
        <SipTabDisption
            width="50vw"
            height="100vh"
            overrides={
                {
                    "siptab_icon 1":{
                        src :`${process.env.PUBLIC_URL}/img/common/akame.png`
                  },
                    "LogAkame":{
                        src :`${process.env.PUBLIC_URL}/img/common/siptab_icon.png`
                }
            }
        />

    )

}