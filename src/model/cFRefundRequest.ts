/**
 * New Payment Gateway APIs
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2022-01-01
 * Contact: nextgenapi@cashfree.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CFVendorSplit } from './cFVendorSplit';

export class CFRefundRequest {
    /**
    * Amount to be refunded. Should be lesser than or equal to the transaction amount. (Decimals allowed)
    */
    'refundAmount': number;
    /**
    * An unique ID to associate the refund with. Provie alphanumeric values
    */
    'refundId': string;
    /**
    * A refund note for your reference.
    */
    'refundNote'?: string;
    'refundSplits'?: Array<CFVendorSplit>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "refundAmount",
            "baseName": "refund_amount",
            "type": "number"
        },
        {
            "name": "refundId",
            "baseName": "refund_id",
            "type": "string"
        },
        {
            "name": "refundNote",
            "baseName": "refund_note",
            "type": "string"
        },
        {
            "name": "refundSplits",
            "baseName": "refund_splits",
            "type": "Array<CFVendorSplit>"
        }    ];

    static getAttributeTypeMap() {
        return CFRefundRequest.attributeTypeMap;
    }
}

