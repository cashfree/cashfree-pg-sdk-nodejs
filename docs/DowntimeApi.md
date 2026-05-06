# DowntimeApi

All URIs are relative to *https://sandbox.cashfree.com/pg*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchActiveEcosystemDowntimes**](#fetchactiveecosystemdowntimes) | **GET** /incident | Fetch All Downtimes|

# **fetchActiveEcosystemDowntimes**
> FetchActiveEcosystemDowntimes200Response fetchActiveEcosystemDowntimes()

Fetches active downtimes across various payment methods based on filters. Gives all active downtimes when no filters are applied.

### Example

```typescript
import {
    DowntimeApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new DowntimeApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD. (default to '2026-01-01')
let x_request_id: string; //Request ID for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to Cashfree. (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.  (optional) (default to undefined)
let incident_id: string; //Valid incident id for fetching incident details. (optional) (default to undefined)
let incident_status: Array<'ACTIVE' | 'UPCOMING' | 'RESOLVED'>; //Filter incidents by status. Possible values: ACTIVE, UPCOMING, RESOLVED. (optional) (default to undefined)
let incident_impact: Array<'HIGH' | 'MEDIUM' | 'LOW'>; //Filter incidents by impact level. Possible values: HIGH, MEDIUM, LOW. (optional) (default to undefined)
let incident_type: Array<'SCHEDULED' | 'UNSCHEDULED'>; //Filter incidents by type. Possible values: SCHEDULED, UNSCHEDULED. (optional) (default to undefined)
let incident_start_time: string; //Filter incidents by start time. Format: YYYY-MM-DD HH:MM:SS. (optional) (default to undefined)
let incident_end_time: string; //Filter incidents by end time. Format: YYYY-MM-DD HH:MM:SS. (optional) (default to undefined)
let payment_method: Array<'UPI' | 'CARD' | 'NET_BANKING' | 'WALLET'>; //Filter incidents by payment method. Possible values: UPI, CARD, NET_BANKING, WALLET. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchActiveEcosystemDowntimes(
    x_api_version,
    x_request_id,
    x_idempotency_key,
    incident_id,
    incident_status,
    incident_impact,
    incident_type,
    incident_start_time,
    incident_end_time,
    payment_method
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD. | defaults to '2026-01-01'|
| **x_request_id** | [**string**] | Request ID for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to Cashfree. | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.  | (optional) defaults to undefined|
| **incident_id** | [**string**] | Valid incident id for fetching incident details. | (optional) defaults to undefined|
| **incident_status** | **Array<&#39;ACTIVE&#39; &#124; &#39;UPCOMING&#39; &#124; &#39;RESOLVED&#39; &#124; &#39;11184809&#39;>** | Filter incidents by status. Possible values: ACTIVE, UPCOMING, RESOLVED. | (optional) defaults to undefined|
| **incident_impact** | **Array<&#39;HIGH&#39; &#124; &#39;MEDIUM&#39; &#124; &#39;LOW&#39; &#124; &#39;11184809&#39;>** | Filter incidents by impact level. Possible values: HIGH, MEDIUM, LOW. | (optional) defaults to undefined|
| **incident_type** | **Array<&#39;SCHEDULED&#39; &#124; &#39;UNSCHEDULED&#39; &#124; &#39;11184809&#39;>** | Filter incidents by type. Possible values: SCHEDULED, UNSCHEDULED. | (optional) defaults to undefined|
| **incident_start_time** | [**string**] | Filter incidents by start time. Format: YYYY-MM-DD HH:MM:SS. | (optional) defaults to undefined|
| **incident_end_time** | [**string**] | Filter incidents by end time. Format: YYYY-MM-DD HH:MM:SS. | (optional) defaults to undefined|
| **payment_method** | **Array<&#39;UPI&#39; &#124; &#39;CARD&#39; &#124; &#39;NET_BANKING&#39; &#124; &#39;WALLET&#39; &#124; &#39;11184809&#39;>** | Filter incidents by payment method. Possible values: UPI, CARD, NET_BANKING, WALLET. | (optional) defaults to undefined|


### Return type

**FetchActiveEcosystemDowntimes200Response**

### Authorization

[XClientSecret](../README.md#XClientSecret), [XClientID](../README.md#XClientID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success response for Fetch All Downtimes. |  * X-Api-Version -  <br>  |
|**401** | Authentication Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

