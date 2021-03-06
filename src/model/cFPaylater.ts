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

export class CFPaylater {
    /**
    * The channel for cardless EMI is always `link`
    */
    'channel': string;
    /**
    * One of [\"kotak\", \"flexipay\", \"zestmoney\", \"lazypay\", \"olapostpaid\"]. Please note that Flexipay is offered by HDFC bank
    */
    'provider': CFPaylater.ProviderEnum;
    /**
    * Customers phone number for this payment instrument. If the customer is not eligible you will receive a 400 error with type as \'invalid_request_error\' and code as \'invalid_request_error\'
    */
    'phone': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string"
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "CFPaylater.ProviderEnum"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CFPaylater.attributeTypeMap;
    }
}

export namespace CFPaylater {
    export enum ProviderEnum {
        Kotak = <any> 'kotak',
        Flexipay = <any> 'flexipay',
        Zestmoney = <any> 'zestmoney',
        Lazypay = <any> 'lazypay',
        Olapostpaid = <any> 'olapostpaid'
    }
}
