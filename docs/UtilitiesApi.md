# UtilitiesApi

All URIs are relative to *https://sandbox.cashfree.com/pg*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**pGCreatePAR**](#pgcreatepar) | **POST** /utilities/pars | Get PAR|
|[**pGGetCardBin**](#pggetcardbin) | **POST** /utilities/cardbin | Get Card BIN Details|

# **pGCreatePAR**
> PGCreatePAR200Response pGCreatePAR(PARRequest)

Use this API to get [Payment Account Reference (PAR)](https://www.cashfree.com/docs/payments/features/payment-account-reference) by providing plain card details.

### Example

```typescript
import {
    UtilitiesApi,
    Configuration,
    PARRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new UtilitiesApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD. (default to '2026-01-01')
let PARRequest: PARRequest; //Request parameters for creating PAR.
let x_request_id: string; //Request ID for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to Cashfree. (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.  (optional) (default to undefined)

const { status, data } = await apiInstance.pGCreatePAR(
    x_api_version,
    PARRequest,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **PARRequest** | **PARRequest**| Request parameters for creating PAR. | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD. | defaults to '2026-01-01'|
| **x_request_id** | [**string**] | Request ID for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to Cashfree. | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.  | (optional) defaults to undefined|


### Return type

**PGCreatePAR200Response**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success response for PAR by providing plain card details. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  |
|**400** | Bad request error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGGetCardBin**
> GetCardBinResponseSchema pGGetCardBin(GetCardBinRequest)

Use this API to get [Card BIN](https://www.cashfree.com/docs/payments/features/utility-apis) (Bank Identification Number) details.

### Example

```typescript
import {
    UtilitiesApi,
    Configuration,
    GetCardBinRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new UtilitiesApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD. (default to '2026-01-01')
let GetCardBinRequest: GetCardBinRequest; //Request parameters to get card BIN details.
let x_request_id: string; //Request ID for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to Cashfree. (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.  (optional) (default to undefined)

const { status, data } = await apiInstance.pGGetCardBin(
    x_api_version,
    GetCardBinRequest,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **GetCardBinRequest** | **GetCardBinRequest**| Request parameters to get card BIN details. | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD. | defaults to '2026-01-01'|
| **x_request_id** | [**string**] | Request ID for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to Cashfree. | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.  | (optional) defaults to undefined|


### Return type

**GetCardBinResponseSchema**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success response for Card BIN details. |  -  |
|**400** | Bad request error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

