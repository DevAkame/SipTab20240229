import { Flex, View } from "@aws-amplify/ui-react";


export default function TopLoginView(prop){

    return(
        <Flex 
          direction="row"
        >
            <View
              as="div"
              width="30vw"
              height="100vh"
            >
                <Flex
                  direction="column"
                  gap="10px"
                  justifyContent="center"
                  alignItems="center"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgba(64,170,191,0.15)"
                >

                </Flex>

        

            </View>

        </Flex>

    )
}