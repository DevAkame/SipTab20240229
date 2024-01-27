import { Flex, View } from "@aws-amplify/ui-react";
import backgroundimageData from "../../public/img/common/siptab_icom.png"
import { DisDis } from "../ui-components";


export default function TopLoginView(prop){

    return(
        <Flex 
          direction="row"
        >
            <View
              as="div"
              width="30vw"
              height="100vh"
              backgroundColor="rgba(170,170,191,0.15)"
              style={{
                background : `url(${backgroundimageData})`
              }}
            >
                
                <Flex
                  direction="column"
                  gap="10px"
                  justifyContent="center"
                  alignItems="center"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgba(170,170,191,0.15)"
                  
                >
                    <View
                      width="unset"
                      height="unset"
                      display="block"
                      >
                        <Text
                          fontFamily="Inter"
                          fontSize="12px"
                          color="rgba(13,26,38,1)"
                          lineHeight="18px"
                        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"

                          



                      </View>

                    

                </Flex>

        
               
            </View>

        </Flex>

    )
}