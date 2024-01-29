import { Flex, View } from "@aws-amplify/ui-react";
import DistView from "./dist/MainDist";


export default function LoginView(prop){

    return(
        <View
          as="div"
          width="100vw"
          height="100vh"
          backgroundColor="rgba(170,170,191,0.15)"
        >
            <Flex 
              direction="row"
            >
              <DistView />
            </Flex>
        </View>
    )
}