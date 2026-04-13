# SettlementReconciliationApi

All URIs are relative to *https://sandbox.cashfree.com/pg*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**pGFetchSettlements**](#pgfetchsettlements) | **POST** /settlements | Get All Settlements|
|[**pGSettlementFetchRecon**](#pgsettlementfetchrecon) | **POST** /settlement/recon | Settlement Reconciliation|

# **pGFetchSettlements**
> SettlementEntity pGFetchSettlements(FetchSettlementsRequest)

Use this API to get all settlement details by specifying the settlement ID, settlement UTR or date range.

### Example

```typescript
import {
    SettlementReconciliationApi,
    Configuration,
    FetchSettlementsRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new SettlementReconciliationApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let FetchSettlementsRequest: FetchSettlementsRequest; //Request Body to get the settlements
let Content_Type: string; //application/json (optional) (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)
let Accept: string; //application/json (optional) (default to undefined)

const { status, data } = await apiInstance.pGFetchSettlements(
    x_api_version,
    FetchSettlementsRequest,
    Content_Type,
    x_request_id,
    x_idempotency_key,
    Accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **FetchSettlementsRequest** | **FetchSettlementsRequest**| Request Body to get the settlements | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **Content_Type** | [**string**] | application/json | (optional) defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|
| **Accept** | [**string**] | application/json | (optional) defaults to undefined|


### Return type

**SettlementEntity**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGSettlementFetchRecon**
> SettlementReconEntity pGSettlementFetchRecon(SettlementFetchReconRequest)

- Use this API to get settlement reconciliation details using Settlement ID, settlement UTR or date range. - This API will return events for the settlement IDs you want 

### Example

```typescript
import {
    SettlementReconciliationApi,
    Configuration,
    SettlementFetchReconRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new SettlementReconciliationApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let SettlementFetchReconRequest: SettlementFetchReconRequest; //Request Body for the settlement reconciliation
let Content_Type: string; //application/json (optional) (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)
let Accept: string; //application/json (optional) (default to undefined)

const { status, data } = await apiInstance.pGSettlementFetchRecon(
    x_api_version,
    SettlementFetchReconRequest,
    Content_Type,
    x_request_id,
    x_idempotency_key,
    Accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **SettlementFetchReconRequest** | **SettlementFetchReconRequest**| Request Body for the settlement reconciliation | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **Content_Type** | [**string**] | application/json | (optional) defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|
| **Accept** | [**string**] | application/json | (optional) defaults to undefined|


### Return type

**SettlementReconEntity**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

