import localVarRequest from 'request';

export * from './cFApp';
export * from './cFAppPayment';
export * from './cFAuthorizationInPaymentsEntity';
export * from './cFAuthorizationRequest';
export * from './cFCard';
export * from './cFCardEMI';
export * from './cFCardPayment';
export * from './cFCardlessEMI';
export * from './cFCardlessEMIPayment';
export * from './cFCryptogram';
export * from './cFCustomerDetails';
export * from './cFEMIPayment';
export * from './cFError';
export * from './cFFetchAllSavedInstruments';
export * from './cFLink';
export * from './cFLinkCancelledResponse';
export * from './cFLinkCustomerDetailsEntity';
export * from './cFLinkMetaEntity';
export * from './cFLinkNotifyEntity';
export * from './cFLinkOrders';
export * from './cFLinkRequest';
export * from './cFNetbanking';
export * from './cFNetbankingPayment';
export * from './cFOrder';
export * from './cFOrderMeta';
export * from './cFOrderPayData';
export * from './cFOrderPayRequest';
export * from './cFOrderPayResponse';
export * from './cFOrderRequest';
export * from './cFPaylater';
export * from './cFPaylaterPayment';
export * from './cFPaymentMethod';
export * from './cFPaymentURLObject';
export * from './cFPaymentsEntity';
export * from './cFPaymentsEntityAppPayment';
export * from './cFPaymentsEntityCardPayment';
export * from './cFPaymentsEntityCardlessEMIPayment';
export * from './cFPaymentsEntityMethod';
export * from './cFPaymentsEntityNetbankingPayment';
export * from './cFPaymentsEntityPaylaterPayment';
export * from './cFPaymentsEntityPayment';
export * from './cFPaymentsEntityUPIPayment';
export * from './cFRefund';
export * from './cFRefundRequest';
export * from './cFRefundURLObject';
export * from './cFSavedInstrumentMeta';
export * from './cFSettlementURLObject';
export * from './cFSettlementsEntity';
export * from './cFUPI';
export * from './cFUPIAuthorizeDetails';
export * from './cFUPIPayment';
export * from './cFVendorSplit';
export * from './linkCancelledError';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { CFApp } from './cFApp';
import { CFAppPayment } from './cFAppPayment';
import { CFAuthorizationInPaymentsEntity } from './cFAuthorizationInPaymentsEntity';
import { CFAuthorizationRequest } from './cFAuthorizationRequest';
import { CFCard } from './cFCard';
import { CFCardEMI } from './cFCardEMI';
import { CFCardPayment } from './cFCardPayment';
import { CFCardlessEMI } from './cFCardlessEMI';
import { CFCardlessEMIPayment } from './cFCardlessEMIPayment';
import { CFCryptogram } from './cFCryptogram';
import { CFCustomerDetails } from './cFCustomerDetails';
import { CFEMIPayment } from './cFEMIPayment';
import { CFError } from './cFError';
import { CFFetchAllSavedInstruments } from './cFFetchAllSavedInstruments';
import { CFLink } from './cFLink';
import { CFLinkCancelledResponse } from './cFLinkCancelledResponse';
import { CFLinkCustomerDetailsEntity } from './cFLinkCustomerDetailsEntity';
import { CFLinkMetaEntity } from './cFLinkMetaEntity';
import { CFLinkNotifyEntity } from './cFLinkNotifyEntity';
import { CFLinkOrders } from './cFLinkOrders';
import { CFLinkRequest } from './cFLinkRequest';
import { CFNetbanking } from './cFNetbanking';
import { CFNetbankingPayment } from './cFNetbankingPayment';
import { CFOrder } from './cFOrder';
import { CFOrderMeta } from './cFOrderMeta';
import { CFOrderPayData } from './cFOrderPayData';
import { CFOrderPayRequest } from './cFOrderPayRequest';
import { CFOrderPayResponse } from './cFOrderPayResponse';
import { CFOrderRequest } from './cFOrderRequest';
import { CFPaylater } from './cFPaylater';
import { CFPaylaterPayment } from './cFPaylaterPayment';
import { CFPaymentMethod } from './cFPaymentMethod';
import { CFPaymentURLObject } from './cFPaymentURLObject';
import { CFPaymentsEntity } from './cFPaymentsEntity';
import { CFPaymentsEntityAppPayment } from './cFPaymentsEntityAppPayment';
import { CFPaymentsEntityCardPayment } from './cFPaymentsEntityCardPayment';
import { CFPaymentsEntityCardlessEMIPayment } from './cFPaymentsEntityCardlessEMIPayment';
import { CFPaymentsEntityMethod } from './cFPaymentsEntityMethod';
import { CFPaymentsEntityNetbankingPayment } from './cFPaymentsEntityNetbankingPayment';
import { CFPaymentsEntityPaylaterPayment } from './cFPaymentsEntityPaylaterPayment';
import { CFPaymentsEntityPayment } from './cFPaymentsEntityPayment';
import { CFPaymentsEntityUPIPayment } from './cFPaymentsEntityUPIPayment';
import { CFRefund } from './cFRefund';
import { CFRefundRequest } from './cFRefundRequest';
import { CFRefundURLObject } from './cFRefundURLObject';
import { CFSavedInstrumentMeta } from './cFSavedInstrumentMeta';
import { CFSettlementURLObject } from './cFSettlementURLObject';
import { CFSettlementsEntity } from './cFSettlementsEntity';
import { CFUPI } from './cFUPI';
import { CFUPIAuthorizeDetails } from './cFUPIAuthorizeDetails';
import { CFUPIPayment } from './cFUPIPayment';
import { CFVendorSplit } from './cFVendorSplit';
import { LinkCancelledError } from './linkCancelledError';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "CFApp.ChannelEnum": CFApp.ChannelEnum,
        "CFAuthorizationInPaymentsEntity.ActionEnum": CFAuthorizationInPaymentsEntity.ActionEnum,
        "CFAuthorizationInPaymentsEntity.StatusEnum": CFAuthorizationInPaymentsEntity.StatusEnum,
        "CFAuthorizationRequest.ActionEnum": CFAuthorizationRequest.ActionEnum,
        "CFCard.CardBankNameEnum": CFCard.CardBankNameEnum,
        "CFCardEMI.ChannelEnum": CFCardEMI.ChannelEnum,
        "CFCardEMI.CardBankNameEnum": CFCardEMI.CardBankNameEnum,
        "CFCardlessEMI.ChannelEnum": CFCardlessEMI.ChannelEnum,
        "CFCardlessEMI.ProviderEnum": CFCardlessEMI.ProviderEnum,
        "CFError.TypeEnum": CFError.TypeEnum,
        "CFFetchAllSavedInstruments.InstrumentTypeEnum": CFFetchAllSavedInstruments.InstrumentTypeEnum,
        "CFFetchAllSavedInstruments.InstrumentStatusEnum": CFFetchAllSavedInstruments.InstrumentStatusEnum,
        "CFOrderPayResponse.PaymentMethodEnum": CFOrderPayResponse.PaymentMethodEnum,
        "CFOrderPayResponse.ChannelEnum": CFOrderPayResponse.ChannelEnum,
        "CFOrderPayResponse.ActionEnum": CFOrderPayResponse.ActionEnum,
        "CFPaylater.ProviderEnum": CFPaylater.ProviderEnum,
        "CFPaymentsEntity.PaymentStatusEnum": CFPaymentsEntity.PaymentStatusEnum,
        "CFRefund.EntityEnum": CFRefund.EntityEnum,
        "CFRefund.RefundStatusEnum": CFRefund.RefundStatusEnum,
        "CFRefund.RefundTypeEnum": CFRefund.RefundTypeEnum,
        "CFRefund.RefundModeEnum": CFRefund.RefundModeEnum,
        "CFUPI.ChannelEnum": CFUPI.ChannelEnum,
}

let typeMap: {[index: string]: any} = {
    "CFApp": CFApp,
    "CFAppPayment": CFAppPayment,
    "CFAuthorizationInPaymentsEntity": CFAuthorizationInPaymentsEntity,
    "CFAuthorizationRequest": CFAuthorizationRequest,
    "CFCard": CFCard,
    "CFCardEMI": CFCardEMI,
    "CFCardPayment": CFCardPayment,
    "CFCardlessEMI": CFCardlessEMI,
    "CFCardlessEMIPayment": CFCardlessEMIPayment,
    "CFCryptogram": CFCryptogram,
    "CFCustomerDetails": CFCustomerDetails,
    "CFEMIPayment": CFEMIPayment,
    "CFError": CFError,
    "CFFetchAllSavedInstruments": CFFetchAllSavedInstruments,
    "CFLink": CFLink,
    "CFLinkCancelledResponse": CFLinkCancelledResponse,
    "CFLinkCustomerDetailsEntity": CFLinkCustomerDetailsEntity,
    "CFLinkMetaEntity": CFLinkMetaEntity,
    "CFLinkNotifyEntity": CFLinkNotifyEntity,
    "CFLinkOrders": CFLinkOrders,
    "CFLinkRequest": CFLinkRequest,
    "CFNetbanking": CFNetbanking,
    "CFNetbankingPayment": CFNetbankingPayment,
    "CFOrder": CFOrder,
    "CFOrderMeta": CFOrderMeta,
    "CFOrderPayData": CFOrderPayData,
    "CFOrderPayRequest": CFOrderPayRequest,
    "CFOrderPayResponse": CFOrderPayResponse,
    "CFOrderRequest": CFOrderRequest,
    "CFPaylater": CFPaylater,
    "CFPaylaterPayment": CFPaylaterPayment,
    "CFPaymentMethod": CFPaymentMethod,
    "CFPaymentURLObject": CFPaymentURLObject,
    "CFPaymentsEntity": CFPaymentsEntity,
    "CFPaymentsEntityAppPayment": CFPaymentsEntityAppPayment,
    "CFPaymentsEntityCardPayment": CFPaymentsEntityCardPayment,
    "CFPaymentsEntityCardlessEMIPayment": CFPaymentsEntityCardlessEMIPayment,
    "CFPaymentsEntityMethod": CFPaymentsEntityMethod,
    "CFPaymentsEntityNetbankingPayment": CFPaymentsEntityNetbankingPayment,
    "CFPaymentsEntityPaylaterPayment": CFPaymentsEntityPaylaterPayment,
    "CFPaymentsEntityPayment": CFPaymentsEntityPayment,
    "CFPaymentsEntityUPIPayment": CFPaymentsEntityUPIPayment,
    "CFRefund": CFRefund,
    "CFRefundRequest": CFRefundRequest,
    "CFRefundURLObject": CFRefundURLObject,
    "CFSavedInstrumentMeta": CFSavedInstrumentMeta,
    "CFSettlementURLObject": CFSettlementURLObject,
    "CFSettlementsEntity": CFSettlementsEntity,
    "CFUPI": CFUPI,
    "CFUPIAuthorizeDetails": CFUPIAuthorizeDetails,
    "CFUPIPayment": CFUPIPayment,
    "CFVendorSplit": CFVendorSplit,
    "LinkCancelledError": LinkCancelledError,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
