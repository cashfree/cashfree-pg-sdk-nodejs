# SoftPOSApi

All URIs are relative to *https://sandbox.cashfree.com/pg*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**sposCreateTerminal**](#sposcreateterminal) | **POST** /terminal | Create Terminal|
|[**sposCreateTerminalTransaction**](#sposcreateterminaltransaction) | **POST** /terminal/transactions | Create Terminal Transaction|
|[**sposDemapSoundboxVpa**](#sposdemapsoundboxvpa) | **POST** /terminal/demap/soundbox | Demap Soundbox Vpa|
|[**sposFetchTerminal**](#sposfetchterminal) | **GET** /terminal/{terminal_phone_no} | Get Terminal Status using Phone Number|
|[**sposFetchTerminalQRCodes**](#sposfetchterminalqrcodes) | **GET** /terminal/qrcodes | Fetch Terminal QR Codes|
|[**sposFetchTerminalSoundboxVpa**](#sposfetchterminalsoundboxvpa) | **GET** /terminal/soundbox/qrcodes | Fetch Terminal Soundbox vpa|
|[**sposFetchTerminalTransaction**](#sposfetchterminaltransaction) | **GET** /terminal/{cf_terminal_id}/payments | Get Terminal Transaction|
|[**sposOnboardSoundboxVpa**](#sposonboardsoundboxvpa) | **POST** /terminal/soundbox | Onboard Soundbox Vpa|
|[**sposUpdateSoundboxVpa**](#sposupdatesoundboxvpa) | **PATCH** /terminal/{cf_terminal_id}/soundbox | Update Soundbox Vpa|
|[**sposUpdateTerminal**](#sposupdateterminal) | **PATCH** /terminal/{cf_terminal_id} | Update Terminal|
|[**sposUpdateTerminalStatus**](#sposupdateterminalstatus) | **PATCH** /terminal/{cf_terminal_id}/status | Update Terminal Status|
|[**sposUploadTerminalDocs**](#sposuploadterminaldocs) | **POST** /terminal/{cf_terminal_id}/docs | Upload Terminal Docs|

# **sposCreateTerminal**
> TerminalEntity sposCreateTerminal(CreateTerminalRequest)

Use this API to create new terminals to use softPOS.

### Example

```typescript
import {
    SoftPOSApi,
    Configuration,
    CreateTerminalRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new SoftPOSApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let CreateTerminalRequest: CreateTerminalRequest; //Request Body to Create Terminal for SPOS
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.sposCreateTerminal(
    x_api_version,
    CreateTerminalRequest,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **CreateTerminalRequest** | **CreateTerminalRequest**| Request Body to Create Terminal for SPOS | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**TerminalEntity**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Terminal created |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sposCreateTerminalTransaction**
> TerminalTransactionEntity sposCreateTerminalTransaction(CreateTerminalTransactionRequest)

Use this API to create a new terminal transaction. To use this API you should first create an order using the Create Order API. Also, you need to enter the terminal details while creating the order and pass the same terminal information while creating a transaction using the below mentioned API.

### Example

```typescript
import {
    SoftPOSApi,
    Configuration,
    CreateTerminalTransactionRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new SoftPOSApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let CreateTerminalTransactionRequest: CreateTerminalTransactionRequest; //Request body to create a terminal transaction
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.sposCreateTerminalTransaction(
    x_api_version,
    CreateTerminalTransactionRequest,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **CreateTerminalTransactionRequest** | **CreateTerminalTransactionRequest**| Request body to create a terminal transaction | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**TerminalTransactionEntity**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Terminal Transaction created |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sposDemapSoundboxVpa**
> Array<SoundboxVpaEntity> sposDemapSoundboxVpa(DemapSoundboxVpaRequest)

Use this API to demap a device from soundbox.

### Example

```typescript
import {
    SoftPOSApi,
    Configuration,
    DemapSoundboxVpaRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new SoftPOSApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let DemapSoundboxVpaRequest: DemapSoundboxVpaRequest; //Request body to demap soundbox vpa
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.sposDemapSoundboxVpa(
    x_api_version,
    DemapSoundboxVpaRequest,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **DemapSoundboxVpaRequest** | **DemapSoundboxVpaRequest**| Request body to demap soundbox vpa | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**Array<SoundboxVpaEntity>**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Soundbox vpa demapped Successfully |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sposFetchTerminal**
> TerminalEntity sposFetchTerminal()

Use this API to view all details of a terminal.

### Example

```typescript
import {
    SoftPOSApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new SoftPOSApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let terminal_phone_no: string; //The terminal for which you want to view the order details. (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.sposFetchTerminal(
    x_api_version,
    terminal_phone_no,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **terminal_phone_no** | [**string**] | The terminal for which you want to view the order details. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**TerminalEntity**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sposFetchTerminalQRCodes**
> Array<FetchTerminalQRCodesEntity> sposFetchTerminalQRCodes()

You can fetch all the StaticQRs corresponding to given terminal id or phone number. Provide either the terminal_phone_no or terminal_id in the request.

### Example

```typescript
import {
    SoftPOSApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new SoftPOSApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let terminal_phone_no: string; //Phone number assigned to the terminal. Required if you are not providing the cf_terminal_id in the request. (default to undefined)
let cf_terminal_id: string; //Cashfree terminal id for which you want to get staticQRs. Required if you are not providing the terminal_phone_number in the request. (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.sposFetchTerminalQRCodes(
    x_api_version,
    terminal_phone_no,
    cf_terminal_id,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **terminal_phone_no** | [**string**] | Phone number assigned to the terminal. Required if you are not providing the cf_terminal_id in the request. | defaults to undefined|
| **cf_terminal_id** | [**string**] | Cashfree terminal id for which you want to get staticQRs. Required if you are not providing the terminal_phone_number in the request. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**Array<FetchTerminalQRCodesEntity>**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fetched Terminal QR Codes |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sposFetchTerminalSoundboxVpa**
> Array<SoundboxVpaEntity> sposFetchTerminalSoundboxVpa()

You can fetch all the active and mapped SoundboxVpa corresponding to given terminal id or deviceSerialNo. Provide either the device_serial_no or cf_terminal_id in the request.

### Example

```typescript
import {
    SoftPOSApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new SoftPOSApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let device_serial_no: string; //Device Serial No assinged. Required if you are not providing the cf_terminal_id in the request. (default to undefined)
let cf_terminal_id: string; //Cashfree terminal id for which you want to get Soundbox Vpa. Required if you are not providing the device_serial_no in the request. (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.sposFetchTerminalSoundboxVpa(
    x_api_version,
    device_serial_no,
    cf_terminal_id,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **device_serial_no** | [**string**] | Device Serial No assinged. Required if you are not providing the cf_terminal_id in the request. | defaults to undefined|
| **cf_terminal_id** | [**string**] | Cashfree terminal id for which you want to get Soundbox Vpa. Required if you are not providing the device_serial_no in the request. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**Array<SoundboxVpaEntity>**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fetched Terminal Soundbox Vpa |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  |
|**400** | Bad request error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sposFetchTerminalTransaction**
> TerminalPaymentEntity sposFetchTerminalTransaction()

Use this API to get  terminal transaction.

### Example

```typescript
import {
    SoftPOSApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new SoftPOSApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let utr: string; //Utr of the transaction. (default to undefined)
let cf_terminal_id: string; //Provide the Cashfree terminal ID for which the details have to be updated. (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.sposFetchTerminalTransaction(
    x_api_version,
    utr,
    cf_terminal_id,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **utr** | [**string**] | Utr of the transaction. | defaults to undefined|
| **cf_terminal_id** | [**string**] | Provide the Cashfree terminal ID for which the details have to be updated. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**TerminalPaymentEntity**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fetch Terminal Transaction |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sposOnboardSoundboxVpa**
> SoundboxVpaEntity sposOnboardSoundboxVpa(OnboardSoundboxVpaRequest)

Use this API to onboard a terminal Vpa to soundbox.

### Example

```typescript
import {
    SoftPOSApi,
    Configuration,
    OnboardSoundboxVpaRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new SoftPOSApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let OnboardSoundboxVpaRequest: OnboardSoundboxVpaRequest; //Request body to onboard soundbox vpa
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.sposOnboardSoundboxVpa(
    x_api_version,
    OnboardSoundboxVpaRequest,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **OnboardSoundboxVpaRequest** | **OnboardSoundboxVpaRequest**| Request body to onboard soundbox vpa | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**SoundboxVpaEntity**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Soundbox vpa onboarded Successfully |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sposUpdateSoundboxVpa**
> SoundboxVpaEntity sposUpdateSoundboxVpa(UpdateSoundboxVpaRequest)

Use this API to update a terminal Vpa to soundbox.

### Example

```typescript
import {
    SoftPOSApi,
    Configuration,
    UpdateSoundboxVpaRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new SoftPOSApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let cf_terminal_id: string; //Provide the Cashfree terminal ID for which the details have to be updated. (default to undefined)
let UpdateSoundboxVpaRequest: UpdateSoundboxVpaRequest; //Request body to update soundbox vpa
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.sposUpdateSoundboxVpa(
    x_api_version,
    cf_terminal_id,
    UpdateSoundboxVpaRequest,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **UpdateSoundboxVpaRequest** | **UpdateSoundboxVpaRequest**| Request body to update soundbox vpa | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **cf_terminal_id** | [**string**] | Provide the Cashfree terminal ID for which the details have to be updated. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**SoundboxVpaEntity**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Soundbox vpa updated Successfully |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sposUpdateTerminal**
> Array<UpdateTerminalEntity> sposUpdateTerminal(UpdateTerminalRequest)

Use this API to update the terminal details. Email, Phone Number, and Terminal Meta are updatable for \"Storefront\". Only account status change is possible in case of \"Agent\".

### Example

```typescript
import {
    SoftPOSApi,
    Configuration,
    UpdateTerminalRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new SoftPOSApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let cf_terminal_id: string; //Provide the Cashfree terminal ID for which the details have to be updated. (default to undefined)
let UpdateTerminalRequest: UpdateTerminalRequest; //Request Body to update terminal for SPOS.
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.sposUpdateTerminal(
    x_api_version,
    cf_terminal_id,
    UpdateTerminalRequest,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **UpdateTerminalRequest** | **UpdateTerminalRequest**| Request Body to update terminal for SPOS. | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **cf_terminal_id** | [**string**] | Provide the Cashfree terminal ID for which the details have to be updated. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**Array<UpdateTerminalEntity>**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated Terminal |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sposUpdateTerminalStatus**
> Array<UpdateTerminalEntity> sposUpdateTerminalStatus(UpdateTerminalStatusRequest)

Use this API to update the terminal status.

### Example

```typescript
import {
    SoftPOSApi,
    Configuration,
    UpdateTerminalStatusRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new SoftPOSApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let cf_terminal_id: string; //Provide the Cashfree terminal ID for which the details have to be updated. (default to undefined)
let UpdateTerminalStatusRequest: UpdateTerminalStatusRequest; //Request Body to update terminal status for SPOS.
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.sposUpdateTerminalStatus(
    x_api_version,
    cf_terminal_id,
    UpdateTerminalStatusRequest,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **UpdateTerminalStatusRequest** | **UpdateTerminalStatusRequest**| Request Body to update terminal status for SPOS. | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **cf_terminal_id** | [**string**] | Provide the Cashfree terminal ID for which the details have to be updated. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**Array<UpdateTerminalEntity>**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated Terminal Status |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sposUploadTerminalDocs**
> Array<UploadTerminalDocsEntity> sposUploadTerminalDocs(UploadTerminalDocs)

Use this API to upload the terminal documents.

### Example

```typescript
import {
    SoftPOSApi,
    Configuration,
    UploadTerminalDocs
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new SoftPOSApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let cf_terminal_id: string; //Provide the Cashfree terminal ID for which the details have to be updated. (default to undefined)
let UploadTerminalDocs: UploadTerminalDocs; //Request Body to update terminal documents for SPOS.
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.sposUploadTerminalDocs(
    x_api_version,
    cf_terminal_id,
    UploadTerminalDocs,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **UploadTerminalDocs** | **UploadTerminalDocs**| Request Body to update terminal documents for SPOS. | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **cf_terminal_id** | [**string**] | Provide the Cashfree terminal ID for which the details have to be updated. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**Array<UploadTerminalDocsEntity>**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Upload Terminal Docs |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

