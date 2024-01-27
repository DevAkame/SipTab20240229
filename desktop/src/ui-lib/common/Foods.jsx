import * as React from "react";
import { getOverrideProps } from "../../ui-components/utils";
import { Button, Flex, View ,Image} from "@aws-amplify/ui-react";


export default function Foods(props){
    const {overrides, ...rest } = props;
    return(
        <Flex
          gap="2px"
          direction="row"
          width="100%"
          height="unset"
          alignSelf="stretch"
          justifyContent="center"
          alignItems="center"
          position="relative"
          padding="0px"
          backgroundColor="rgba(255,255,255,1)"
        >
            <Button
              width="100%"
              height="unset"
              shrink="0"
              size="small"
              isDisabled={false}
              variation="link"
            >
                <Image
                  width="20px"
                  height="15.9px"
                  display="block"
                  position="relative"
                  padding="0px"
                  objectFit="cover"
                  src={`${process.env.PUBLIC_URL}/img/common/akame.png`}
                ></Image>

                <View
                  as="p"
                  width="unset"
                  height="unset"
                  fontSize="small"
                  color="rgba(0,0,0,10)"
                >
                    Akame
                </View>
            </Button>
        </Flex>


    )
}