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

export class CFVendorSplit {
    /**
    * Vendor id created in Cashfree system
    */
    'vendorId'?: string;
    /**
    * Amount which will be associated with this vendor
    */
    'amount'?: number;
    /**
    * Percentage of order amount which shall get added to vendor account
    */
    'percentage'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "vendorId",
            "baseName": "vendor_id",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "percentage",
            "baseName": "percentage",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CFVendorSplit.attributeTypeMap;
    }
}

