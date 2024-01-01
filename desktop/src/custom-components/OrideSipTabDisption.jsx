import { Flex } from "@aws-amplify/ui-react";
import { SipTabDisption } from "../ui-components";

export function SipTabDisptionView(){
    return(
        <SipTabDisption
            width="50vw"
            height="100vh"
            overrides={
                {
                    "siptab_icon 1":{
                        src :`${process.env.PUBLIC_URL}/img/common/siptab_icon.png`
                  },
                    "LogAkame":{
                        src :`${process.env.PUBLIC_URL}/img/common/akame.png`
                }
            }}
        />

    )

}