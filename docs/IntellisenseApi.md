# IntellisenseApi

All URIs are relative to *https://sandbox.cashfree.com/pg*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchDowntimeById**](#fetchdowntimebyid) | **GET** /incident/{id} | Fetch Downtime by ID|

# **fetchDowntimeById**
> IncidentByIdResponse fetchDowntimeById()

Fetches details of a specific downtime using its unique ID.

### Example

```typescript
import {
    IntellisenseApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new IntellisenseApi(configuration);

let id: string; //The unique identifier of the downtime. (default to undefined)
let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD. (default to '2026-01-01')

const { status, data } = await apiInstance.fetchDowntimeById(
    id,
    x_api_version
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The unique identifier of the downtime. | defaults to undefined|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD. | defaults to '2026-01-01'|


### Return type

**IncidentByIdResponse**

### Authorization

[XClientSecret](../README.md#XClientSecret), [XClientID](../README.md#XClientID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success response for Fetch Downtime by ID. |  * X-Api-Version -  <br>  |
|**401** | Authentication Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

