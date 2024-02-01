import { Flex, View } from "@aws-amplify/ui-react";
import DistView from "./dist/MainDist";
import AuthViews from "./auth/LoginAuth";


export default function LoginView(prop){

    return(
        <View
          as="div"
          width="100vw"
          height="100vh"
        >
            <Flex 
              direction="row"
            >
              <DistView />
              <AuthViews />
            </Flex>
        </View>
    )
}