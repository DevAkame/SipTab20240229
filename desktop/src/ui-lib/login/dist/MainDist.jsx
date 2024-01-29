import { Flex, View } from "@aws-amplify/ui-react";
import Foods from "../../common/Foods";
        

export default function  DistView(prop){
    return(
        <View
          as="div"
          width="40vw"
          height="100vh"
          backgroundColor="rgba(170,170,191,0.15)"
        >
          <Flex
            direction="column"
            justifyContent="start"
          >
            <View
              as="div"
              width="100%"
              height="unset"
              padding="auto"
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
                <Flex
                  gap="10px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  position="relative"
                  padding="10px 10px 10px 10px"
                >
                  <Button
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    shrink="0"
                    alignSelf="stretch"
                    size="small"
                    isDisabled={false}
                    variation="link"
                    children="SIpTabについて"
                  ></Button>
                  <Button
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    shrink="0"
                    alignSelf="stretch"
                    size="small"
                    isDisabled={false}
                    variation="link"
                    children="SipTabご利用方法"
                  ></Button>
                  <Button
                    width="unset"
                    height="unset"
                    justifyContent="flex-start"
                    shrink="0"
                    alignSelf="stretch"
                    size="small"
                    isDisabled={false}
                    variation="link"
                    children="お問い合わせ"
                  ></Button>
                </Flex>


              </Flex>

                
            </View>
            <Foods />
          </Flex>
        
        </View>

    )
}