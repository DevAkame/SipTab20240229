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
              backgroundColor="rgba(170,170,191,0.15)"
              >
                <ImageBackground
                  source=`${process.env.PUBLIC_URL}/img/common/siptab_icon.png`
                  resizeMode="cover"
                  style={styles.image}
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