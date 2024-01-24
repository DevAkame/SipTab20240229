import { Flex, View } from "@aws-amplify/ui-react";
import backgroundimageData from "../../public/img/common/siptab_icom.png"


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
              style={
                backgroundImage : `url(${backgroundimageData})`
              }
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

                </Flex>

        
                </ImageBackground>
            </View>

        </Flex>

    )
}