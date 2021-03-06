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


import localVarRequest from 'request';
import http, { IncomingHttpHeaders } from 'http';

/* tslint:disable:no-unused-locals */
import { CFAuthorizationRequest } from '../model/cFAuthorizationRequest';
import { CFError } from '../model/cFError';
import { CFOrder } from '../model/cFOrder';
import { CFOrderPayRequest } from '../model/cFOrderPayRequest';
import { CFOrderPayResponse } from '../model/cFOrderPayResponse';
import { CFOrderRequest } from '../model/cFOrderRequest';
import { CFPaymentsEntity } from '../model/cFPaymentsEntity';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://sandbox.cashfree.com/pg';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum OrdersApiApiKeys {
}

interface Dictionary<T> {
    [Key: string]: T;
}
export class OrdersApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: OrdersApiApiKeys, value: string) {
        (this.authentications as any)[OrdersApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Use this API to create orders with Cashfree from your backend and get the payment link
     * @summary Create Order
     * @param xClientId 
     * @param xClientSecret 
     * @param xApiVersion 
     * @param xIdempotencyReplayed 
     * @param xIdempotencyKey 
     * @param xRequestId 
     * @param cFOrderRequest 
     */
    public async createOrder (xClientId: string, xClientSecret: string, xApiVersion?: string, xIdempotencyReplayed?: boolean | null, xIdempotencyKey?: string, xRequestId?: string, cFOrderRequest?: CFOrderRequest, requestTimeout?: Number, webProxy?: any, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ cfHeaders: IncomingHttpHeaders; cfOrder: CFOrder;  }> {
        const localVarPath = this.basePath + '/orders';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'xClientId' is not null or undefined
        if (xClientId === null || xClientId === undefined) {
            throw new Error('Required parameter xClientId was null or undefined when calling createOrder.');
        }

        // verify required parameter 'xClientSecret' is not null or undefined
        if (xClientSecret === null || xClientSecret === undefined) {
            throw new Error('Required parameter xClientSecret was null or undefined when calling createOrder.');
        }

        localVarHeaderParams['x-client-id'] = ObjectSerializer.serialize(xClientId, "string");
        localVarHeaderParams['x-client-secret'] = ObjectSerializer.serialize(xClientSecret, "string");
        localVarHeaderParams['x-api-version'] = ObjectSerializer.serialize(xApiVersion, "string");
        localVarHeaderParams['x-idempotency-replayed'] = ObjectSerializer.serialize(xIdempotencyReplayed, "boolean");
        localVarHeaderParams['x-idempotency-key'] = ObjectSerializer.serialize(xIdempotencyKey, "string");
        localVarHeaderParams['x-request-id'] = ObjectSerializer.serialize(xRequestId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(cFOrderRequest, "CFOrderRequest"),
            timeout:requestTimeout,
            ...(webProxy && {
                proxy : webProxy
            })
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ cfHeaders: IncomingHttpHeaders; cfOrder: CFOrder;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CFOrder");
                            resolve({ cfHeaders: response.headers, cfOrder: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Use this API to view all details of an order.
     * @summary Get Order
     * @param xClientId 
     * @param xClientSecret 
     * @param orderId 
     * @param xApiVersion 
     * @param xIdempotencyReplayed 
     * @param xIdempotencyKey 
     * @param xRequestId 
     */
    public async getOrder (xClientId: string, xClientSecret: string, orderId: string, xApiVersion?: string, xIdempotencyReplayed?: boolean, xIdempotencyKey?: string, xRequestId?: string, requestTimeout?: Number, webProxy?: any,options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ cfHeaders: IncomingHttpHeaders; cfOrder: CFOrder;  }> {
        const localVarPath = this.basePath + '/orders/{order_id}'
            .replace('{' + 'order_id' + '}', encodeURIComponent(String(orderId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'xClientId' is not null or undefined
        if (xClientId === null || xClientId === undefined) {
            throw new Error('Required parameter xClientId was null or undefined when calling getOrder.');
        }

        // verify required parameter 'xClientSecret' is not null or undefined
        if (xClientSecret === null || xClientSecret === undefined) {
            throw new Error('Required parameter xClientSecret was null or undefined when calling getOrder.');
        }

        // verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling getOrder.');
        }

        localVarHeaderParams['x-client-id'] = ObjectSerializer.serialize(xClientId, "string");
        localVarHeaderParams['x-client-secret'] = ObjectSerializer.serialize(xClientSecret, "string");
        localVarHeaderParams['x-api-version'] = ObjectSerializer.serialize(xApiVersion, "string");
        localVarHeaderParams['x-idempotency-replayed'] = ObjectSerializer.serialize(xIdempotencyReplayed, "boolean");
        localVarHeaderParams['x-idempotency-key'] = ObjectSerializer.serialize(xIdempotencyKey, "string");
        localVarHeaderParams['x-request-id'] = ObjectSerializer.serialize(xRequestId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            timeout:requestTimeout,
            ...(webProxy && {
                proxy : webProxy
            }),
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ cfHeaders: IncomingHttpHeaders; cfOrder: CFOrder;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CFOrder");
                            resolve({ cfHeaders: response.headers, cfOrder: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Use this API when you have already created the orders and want Cashfree to process the payment.
     * @summary Order Pay
     * @param xApiVersion 
     * @param xRequestId 
     * @param cFOrderPayRequest 
     */
    public async orderPay (xApiVersion: string, xRequestId?: string, cFOrderPayRequest?: any,requestTimeout?: Number, webProxy?: any, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ cfHeaders: IncomingHttpHeaders; cfOrderPayResponse: CFOrderPayResponse;  }> {
        const localVarPath = this.basePath + '/orders/pay';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'xApiVersion' is not null or undefined
        if (xApiVersion === null || xApiVersion === undefined) {
            throw new Error('Required parameter xApiVersion was null or undefined when calling orderPay.');
        }

        localVarHeaderParams['x-request-id'] = ObjectSerializer.serialize(xRequestId, "string");
        localVarHeaderParams['x-api-version'] = ObjectSerializer.serialize(xApiVersion, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);
        let localVarUseFormData = false;
        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(cFOrderPayRequest, "CFOrderPayRequest"),
            timeout:requestTimeout,
            ...(webProxy && {
                proxy : webProxy
            })
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ cfHeaders: IncomingHttpHeaders; cfOrderPayResponse: CFOrderPayResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CFOrderPayResponse");
                            resolve({ cfHeaders: response.headers, cfOrderPayResponse: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Use this API to capture or void a preauthorized payment
     * @summary Preauthorization
     * @param xClientId 
     * @param xClientSecret 
     * @param orderId 
     * @param xApiVersion 
     * @param xIdempotencyReplayed 
     * @param xIdempotencyKey 
     * @param xRequestId 
     * @param cFAuthorizationRequest 
     */
    public async preauthorization (xClientId: string, xClientSecret: string, orderId: string, xApiVersion?: string, xIdempotencyReplayed?: boolean, xIdempotencyKey?: string, xRequestId?: string, cFAuthorizationRequest?: CFAuthorizationRequest,requestTimeout?: Number, webProxy?: any, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ cfHeaders: IncomingHttpHeaders; cfPaymentsEntity: CFPaymentsEntity;  }> {
        const localVarPath = this.basePath + '/orders/{order_id}/authorization'
            .replace('{' + 'order_id' + '}', encodeURIComponent(String(orderId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'xClientId' is not null or undefined
        if (xClientId === null || xClientId === undefined) {
            throw new Error('Required parameter xClientId was null or undefined when calling preauthorization.');
        }

        // verify required parameter 'xClientSecret' is not null or undefined
        if (xClientSecret === null || xClientSecret === undefined) {
            throw new Error('Required parameter xClientSecret was null or undefined when calling preauthorization.');
        }

        // verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling preauthorization.');
        }

        localVarHeaderParams['x-client-id'] = ObjectSerializer.serialize(xClientId, "string");
        localVarHeaderParams['x-client-secret'] = ObjectSerializer.serialize(xClientSecret, "string");
        localVarHeaderParams['x-api-version'] = ObjectSerializer.serialize(xApiVersion, "string");
        localVarHeaderParams['x-idempotency-replayed'] = ObjectSerializer.serialize(xIdempotencyReplayed, "boolean");
        localVarHeaderParams['x-idempotency-key'] = ObjectSerializer.serialize(xIdempotencyKey, "string");
        localVarHeaderParams['x-request-id'] = ObjectSerializer.serialize(xRequestId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(cFAuthorizationRequest, "CFAuthorizationRequest"),
            timeout:requestTimeout,
            ...(webProxy && {
                proxy : webProxy
            })
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ cfHeaders: IncomingHttpHeaders; cfPaymentsEntity: CFPaymentsEntity;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CFPaymentsEntity");
                            resolve({ cfHeaders: response.headers, cfPaymentsEntity: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
