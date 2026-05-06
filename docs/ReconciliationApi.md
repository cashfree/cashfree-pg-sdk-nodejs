# ReconciliationApi

All URIs are relative to *https://sandbox.cashfree.com/pg*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**pGESReconVendor**](#pgesreconvendor) | **POST** /recon/vendor | Vendor Reconciliation API|

# **pGESReconVendor**
> VendorRecon200Response pGESReconVendor(VendorReconRequest)

This API allows you to fetch vendor reconciliation details by using different filters. Use the appropriate filters based on your requirements. After you receive a VENDOR_SETTLEMENT_SUCCESS webhook confirmation, wait 15 minutes before you call this API endpoint.  - **View Split Order Details Using Settlement ID**: Retrieve details of split orders within a settlement by Settlement ID.  - **Vendor Recon for a Time Period**: Fetch reconciliation details for all vendors within a specific time interval.  - **Vendor Recon Using Vendor ID & Time Interval**: Get reconciliation details for a specific vendor within a given time interval. 

### Example

```typescript
import {
    ReconciliationApi,
    Configuration,
    VendorReconRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new ReconciliationApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD. (default to '2026-01-01')
let VendorReconRequest: VendorReconRequest; //Vendor Recon Request body.
let x_request_id: string; //Request ID for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to Cashfree. (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.  (optional) (default to undefined)
let Content_Type: string; //application/json. (optional) (default to undefined)

const { status, data } = await apiInstance.pGESReconVendor(
    x_api_version,
    VendorReconRequest,
    x_request_id,
    x_idempotency_key,
    Content_Type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **VendorReconRequest** | **VendorReconRequest**| Vendor Recon Request body. | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD. | defaults to '2026-01-01'|
| **x_request_id** | [**string**] | Request ID for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to Cashfree. | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.  | (optional) defaults to undefined|
| **Content_Type** | [**string**] | application/json. | (optional) defaults to undefined|


### Return type

**VendorRecon200Response**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Terminal created. |  -  |
|**400** | Vendor Recon Failure Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

