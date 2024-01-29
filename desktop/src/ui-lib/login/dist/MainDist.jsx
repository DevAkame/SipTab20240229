import { Flex, View } from "@aws-amplify/ui-react";
import Foods from "../../common/Foods";
        

export default function  DistView(prop){
    return(
        <View
          as="div"
          width="30vw"
          height="100vh"
          backgroundColor="rgba(170,170,191,0.15)"
        >
            <Flex
              direction="column"
              justifyContent="flex-end"
              >
              <View
                as="div"
                width="100%"
                height="unset"
                backgroundColor="rgba(255,170,191,0.15)"
              >
                <Flex
                  direction="column"
                  justifyContent="start"
                  width="100%"
                  height="unset"
                >
                  <View
                    as="p"
                    backgroundColor="rgba(255,170,255,0.15)"

                  >
                  業務統合管理アプリSipTabへようこそ<br />
                  　当アプリのご利用方法ご確認の場合は下記を参照ください。
                  </View>

                </Flex>

                
              </View>
              <Foods />
            </Flex>
        
        </View>

    )
}