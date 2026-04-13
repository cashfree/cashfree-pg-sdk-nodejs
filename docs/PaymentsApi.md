# PaymentsApi

All URIs are relative to *https://sandbox.cashfree.com/pg*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**pGAuthorizeOrder**](#pgauthorizeorder) | **POST** /orders/{order_id}/authorization | Preauthorization|
|[**pGOrderAuthenticatePayment**](#pgorderauthenticatepayment) | **POST** /orders/pay/authenticate/{cf_payment_id} | Submit or Resend OTP|
|[**pGOrderFetchPayment**](#pgorderfetchpayment) | **GET** /orders/{order_id}/payments/{cf_payment_id} | Get Payment by ID|
|[**pGOrderFetchPayments**](#pgorderfetchpayments) | **GET** /orders/{order_id}/payments | Get Payments for an Order|
|[**pGPayOrder**](#pgpayorder) | **POST** /orders/sessions | Order Pay|

# **pGAuthorizeOrder**
> PaymentEntity pGAuthorizeOrder(AuthorizeOrderRequest)

Use this API to capture or void a preauthorized payment

### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    AuthorizeOrderRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let order_id: string; //The id which uniquely identifies your order (default to undefined)
let AuthorizeOrderRequest: AuthorizeOrderRequest; //Request to Capture or Void Transactions
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.pGAuthorizeOrder(
    x_api_version,
    order_id,
    AuthorizeOrderRequest,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **AuthorizeOrderRequest** | **AuthorizeOrderRequest**| Request to Capture or Void Transactions | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **order_id** | [**string**] | The id which uniquely identifies your order | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**PaymentEntity**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**502** | Bank related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGOrderAuthenticatePayment**
> OrderAuthenticateEntity pGOrderAuthenticatePayment(OrderAuthenticatePaymentRequest)

If you accept OTP on your own page, you can use the below API to send OTP to Cashfree.

### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    OrderAuthenticatePaymentRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let cf_payment_id: string; //The Cashfree payment or transaction ID. (default to undefined)
let OrderAuthenticatePaymentRequest: OrderAuthenticatePaymentRequest; //Request body to submit/resend headless OTP. To use this API make sure you have headless OTP enabled for your account
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.pGOrderAuthenticatePayment(
    x_api_version,
    cf_payment_id,
    OrderAuthenticatePaymentRequest,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **OrderAuthenticatePaymentRequest** | **OrderAuthenticatePaymentRequest**| Request body to submit/resend headless OTP. To use this API make sure you have headless OTP enabled for your account | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **cf_payment_id** | [**string**] | The Cashfree payment or transaction ID. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**OrderAuthenticateEntity**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**502** | Bank related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGOrderFetchPayment**
> PaymentEntity pGOrderFetchPayment()

Use this API to view payment details of an order for a payment ID.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let order_id: string; //The id which uniquely identifies your order (default to undefined)
let cf_payment_id: string; //The Cashfree payment or transaction ID. (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.pGOrderFetchPayment(
    x_api_version,
    order_id,
    cf_payment_id,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **order_id** | [**string**] | The id which uniquely identifies your order | defaults to undefined|
| **cf_payment_id** | [**string**] | The Cashfree payment or transaction ID. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**PaymentEntity**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**502** | Bank related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGOrderFetchPayments**
> Array<PaymentEntity> pGOrderFetchPayments()

Use this API to view all payment details for an order.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let order_id: string; //The id which uniquely identifies your order (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.pGOrderFetchPayments(
    x_api_version,
    order_id,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **order_id** | [**string**] | The id which uniquely identifies your order | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**Array<PaymentEntity>**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of payment entity |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**502** | Bank related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGPayOrder**
> PayOrderEntity pGPayOrder(PayOrderRequest)

Use this API when you have already created the orders and want Cashfree to process the payment. To use this API S2S flag needs to be enabled from the backend. In case you want to use the cards payment option the PCI DSS flag is required, for more information send an email to \"care@cashfree.com\". 

### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    PayOrderRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let PayOrderRequest: PayOrderRequest; //Request body to create a transaction at cashfree using `payment_session_id`
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.pGPayOrder(
    x_api_version,
    PayOrderRequest,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **PayOrderRequest** | **PayOrderRequest**| Request body to create a transaction at cashfree using &#x60;payment_session_id&#x60; | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**PayOrderEntity**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**502** | Bank related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

