/* Amplify Params - DO NOT EDIT
	API_SIPTAB_GRAPHQLAPIENDPOINTOUTPUT
	API_SIPTAB_GRAPHQLAPIIDOUTPUT
	API_SIPTAB_GRAPHQLAPIKEYOUTPUT
	AUTH_SIPTAB_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';

// param
const StrTargetTableName = "UserProfile-xinkx4wubncvhbsorqghczlshq-staging";
const StrTargetID = "67c503b8-93d9-4d5a-afad-59fce0ccd0a9";

const client = new DynamoDBClient({
    region: "ap-northeast-1"
});


export const handler = async (event) => {
    const command = new ScanCommand({
        TableName: StrTargetTableName,
        ScanFilter:{
            "sub":{
                AttributeValueList:[{S:StrTargetID},],
                ComparisonOperator: "EQ"
            },
                
        },
    });
    //console.log(await client.send(command));     // debug 
    try{
        const data = await client.send(command);
//        console.log(data);    //debug
//        console.log(String(data.Count));  // debug
        if(data.Count === 0){
            return {
                statusCode: 200,
                body: JSON.stringify({
                    code : 0,
                    dest : "Unset id"
                })
            }
        }else if(data.Count === 1){
            return {
                statusCode: 200,
                body: JSON.stringify({
                    code : 1,
                    dest : "seted id",
                    item : data.Items
                })
            }
        } else {
            return {
                statusCode: 202,
                body: JSON.stringify({
                    code : 2,
                    dest : "Unexpected event occurs"
                })
            }
        };

    } catch (err){
        return {
            statusCode: 202,
            body: JSON.stringify({
                code : 2,
                dest : "Unexpected event occurs"
            })
        }
    };
}
