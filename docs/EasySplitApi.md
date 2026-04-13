# EasySplitApi

All URIs are relative to *https://sandbox.cashfree.com/pg*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**pGESCreateAdjustment**](#pgescreateadjustment) | **POST** /easy-split/vendors/{vendor_id}/adjustment | Create Adjustment|
|[**pGESCreateOnDemandTransfer**](#pgescreateondemandtransfer) | **POST** /easy-split/vendors/{vendor_id}/transfer | Create On Demand Transfer|
|[**pGESCreateVendors**](#pgescreatevendors) | **POST** /easy-split/vendors | Create vendor|
|[**pGESDownloadVendorsDocs**](#pgesdownloadvendorsdocs) | **GET** /easy-split/vendor-docs/{vendor_id}/download/{doc_type} | Download Vendor Documents|
|[**pGESFetchVendors**](#pgesfetchvendors) | **GET** /easy-split/vendors/{vendor_id} | Get Vendor All Details|
|[**pGESGetVendorBalance**](#pgesgetvendorbalance) | **GET** /easy-split/vendors/{vendor_id}/balances | Get On Demand Balance|
|[**pGESGetVendorBalanceTransferCharges**](#pgesgetvendorbalancetransfercharges) | **GET** /easy-split/amount/{amount}/charges | Get Vendor Balance Transfer Charges|
|[**pGESGetVendorsDocs**](#pgesgetvendorsdocs) | **GET** /easy-split/vendor-docs/{vendor_id} | Get Vendor All Documents Status|
|[**pGESOrderRecon**](#pgesorderrecon) | **POST** /split/order/vendor/recon | Get Split and Settlement Details by OrderID v2.0|
|[**pGESUpdateVendors**](#pgesupdatevendors) | **PATCH** /easy-split/vendors/{vendor_id} | Update vendor Details|
|[**pGESUploadVendorsDocs**](#pgesuploadvendorsdocs) | **POST** /easy-split/vendor-docs/{vendor_id} | Upload Vendor Docs|
|[**pGOrderSplitAfterPayment**](#pgordersplitafterpayment) | **POST** /easy-split/orders/{order_id}/split | Split After Payment|
|[**pGOrderStaticSplit**](#pgorderstaticsplit) | **POST** /easy-split/static-split | Create Static Split Configuration|
|[**pGSplitOrderRecon**](#pgsplitorderrecon) | **GET** /easy-split/orders/{order_id} | Get Split and Settlement Details by OrderID|

# **pGESCreateAdjustment**
> VendorAdjustmentSuccessResponse pGESCreateAdjustment()

The Create Adjustment API will create a adjustment request either from vendor to the merchant or from merchant to the vendor.

### Example

```typescript
import {
    EasySplitApi,
    Configuration,
    VendorAdjustmentRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new EasySplitApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let vendor_id: string; //The id which uniquely identifies your vendor. (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)
let VendorAdjustmentRequest: VendorAdjustmentRequest; //Vendor Adjustment Request Body. (optional)

const { status, data } = await apiInstance.pGESCreateAdjustment(
    x_api_version,
    vendor_id,
    x_request_id,
    x_idempotency_key,
    VendorAdjustmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **VendorAdjustmentRequest** | **VendorAdjustmentRequest**| Vendor Adjustment Request Body. | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **vendor_id** | [**string**] | The id which uniquely identifies your vendor. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**VendorAdjustmentSuccessResponse**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Vendor Adjustment Success Response. |  -  |
|**400** | Adjust Vendor Balance Failure Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGESCreateOnDemandTransfer**
> AdjustVendorBalanceResponse pGESCreateOnDemandTransfer()

The Create On Demand Transfer API will create a new on-demand request either from to the merchant or from to the vendor.

### Example

```typescript
import {
    EasySplitApi,
    Configuration,
    AdjustVendorBalanceRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new EasySplitApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let vendor_id: string; //The id which uniquely identifies your vendor. (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)
let AdjustVendorBalanceRequest: AdjustVendorBalanceRequest; //Adjust Vendor Balance Request Body. (optional)

const { status, data } = await apiInstance.pGESCreateOnDemandTransfer(
    x_api_version,
    vendor_id,
    x_request_id,
    x_idempotency_key,
    AdjustVendorBalanceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **AdjustVendorBalanceRequest** | **AdjustVendorBalanceRequest**| Adjust Vendor Balance Request Body. | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **vendor_id** | [**string**] | The id which uniquely identifies your vendor. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**AdjustVendorBalanceResponse**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Adjust Vendor Balance Success Response. |  -  |
|**400** | Adjust Vendor Balance Failure Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGESCreateVendors**
> CreateVendorResponse pGESCreateVendors()

Use this API to create a new vendor to your EasySplit account along with the KYC details. Provide KYC details such as account_type, business_type, gst, cin, pan, passport number and so on.

### Example

```typescript
import {
    EasySplitApi,
    Configuration,
    CreateVendorRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new EasySplitApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)
let CreateVendorRequest: CreateVendorRequest; //Create Vendor Request Body. (optional)

const { status, data } = await apiInstance.pGESCreateVendors(
    x_api_version,
    x_request_id,
    x_idempotency_key,
    CreateVendorRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **CreateVendorRequest** | **CreateVendorRequest**| Create Vendor Request Body. | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**CreateVendorResponse**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Create Vendor Success Response. |  -  |
|**400** | Create Vendor Failure Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGESDownloadVendorsDocs**
> VendorDocumentDownloadResponse pGESDownloadVendorsDocs()

Use this API to download the uploaded KYC documents of that particular vendor. Provide the document type. Click the link from the sample request to download the KYC document.

### Example

```typescript
import {
    EasySplitApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new EasySplitApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let doc_type: string; //Mention the document type that has to be downloaded. Only an uploaded document can be downloaded. (default to undefined)
let vendor_id: string; //The id which uniquely identifies your vendor. (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.pGESDownloadVendorsDocs(
    x_api_version,
    doc_type,
    vendor_id,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **doc_type** | [**string**] | Mention the document type that has to be downloaded. Only an uploaded document can be downloaded. | defaults to undefined|
| **vendor_id** | [**string**] | The id which uniquely identifies your vendor. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**VendorDocumentDownloadResponse**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Download Vendor Docs Success Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGESFetchVendors**
> VendorEntity pGESFetchVendors()

Use this API to get the details of a specific vendor associated with your Easy Split account.

### Example

```typescript
import {
    EasySplitApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new EasySplitApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let vendor_id: string; //The id which uniquely identifies your vendor. (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.pGESFetchVendors(
    x_api_version,
    vendor_id,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **vendor_id** | [**string**] | The id which uniquely identifies your vendor. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**VendorEntity**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Vendor Success Response. |  -  |
|**400** | Get Vendor Docs Failure Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGESGetVendorBalance**
> VendorBalance pGESGetVendorBalance()

This API fetches the available amount with the merchant, vendor, and the unsettled amount for the merchant as well as the vendor.

### Example

```typescript
import {
    EasySplitApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new EasySplitApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let vendor_id: string; //The id which uniquely identifies your vendor. (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.pGESGetVendorBalance(
    x_api_version,
    vendor_id,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **vendor_id** | [**string**] | The id which uniquely identifies your vendor. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**VendorBalance**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Vendor Balance Success Response. |  -  |
|**400** | Get Vendor Docs Failure Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGESGetVendorBalanceTransferCharges**
> VendorBalanceTransferCharges pGESGetVendorBalanceTransferCharges()

This API returns the applicable service charge and service tax for a vendor balance transfer, based on the provided amount and rate type.

### Example

```typescript
import {
    EasySplitApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new EasySplitApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let amount: number; //Specify the amount for which you want to view the service charges and service taxes in the response. (default to undefined)
let rate_type: string; //Mention the type of rate for which you want to check the charges. Possible value: VENDOR_ON_DEMAND (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.pGESGetVendorBalanceTransferCharges(
    x_api_version,
    amount,
    rate_type,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **amount** | [**number**] | Specify the amount for which you want to view the service charges and service taxes in the response. | defaults to undefined|
| **rate_type** | [**string**] | Mention the type of rate for which you want to check the charges. Possible value: VENDOR_ON_DEMAND | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**VendorBalanceTransferCharges**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Vendor Balance Transfer Charges Response. |  -  |
|**400** | Get Vendor Balance Transfer Charges Failure Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGESGetVendorsDocs**
> VendorDocumentsResponse pGESGetVendorsDocs()

Use this API to fetch the details of all the KYC details of a particular vendor.

### Example

```typescript
import {
    EasySplitApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new EasySplitApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let vendor_id: string; //The id which uniquely identifies your vendor. (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.pGESGetVendorsDocs(
    x_api_version,
    vendor_id,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **vendor_id** | [**string**] | The id which uniquely identifies your vendor. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**VendorDocumentsResponse**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Vendor Docs Success Response. |  -  |
|**400** | Get Vendor Docs Failure Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGESOrderRecon**
> ESOrderReconResponse pGESOrderRecon()

Use this API to get all the split details, settled and unsettled transactions details of each vendor who were part of a particular order by providing order Id or start date and end date.

### Example

```typescript
import {
    EasySplitApi,
    Configuration,
    ESOrderReconRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new EasySplitApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)
let ESOrderReconRequest: ESOrderReconRequest; //Get Split and Settlement Details by OrderID v2.0 (optional)

const { status, data } = await apiInstance.pGESOrderRecon(
    x_api_version,
    x_request_id,
    x_idempotency_key,
    ESOrderReconRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ESOrderReconRequest** | **ESOrderReconRequest**| Get Split and Settlement Details by OrderID v2.0 | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**ESOrderReconResponse**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ES Order Recon Success Response. |  -  |
|**400** | ES Order Recon Failure Response. |  -  |
|**404** | ES Order Recon Failure Response. |  -  |
|**409** | ES Order Recon Failure Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGESUpdateVendors**
> UpdateVendorResponse pGESUpdateVendors()

Use this API to edit the existing vendor details added to your EasySplit account. You can edit vendor details such as name, email, phone number, upi details, and any of the KYC details.

### Example

```typescript
import {
    EasySplitApi,
    Configuration,
    UpdateVendorRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new EasySplitApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let vendor_id: string; //The id which uniquely identifies your vendor. (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)
let UpdateVendorRequest: UpdateVendorRequest; //Create Vendor Request Body. (optional)

const { status, data } = await apiInstance.pGESUpdateVendors(
    x_api_version,
    vendor_id,
    x_request_id,
    x_idempotency_key,
    UpdateVendorRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **UpdateVendorRequest** | **UpdateVendorRequest**| Create Vendor Request Body. | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **vendor_id** | [**string**] | The id which uniquely identifies your vendor. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**UpdateVendorResponse**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update Vendor Success Response. |  -  |
|**400** | Update Vendor Failure Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGESUploadVendorsDocs**
> UploadVendorDocumentsResponse pGESUploadVendorsDocs()

Use this API to upload KYC documents of a specific vendor.

### Example

```typescript
import {
    EasySplitApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new EasySplitApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let vendor_id: string; //The id which uniquely identifies your vendor. (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)
let doc_type: string; //Mention the type of the document you are uploading. Possible values: UIDAI_FRONT, UIDAI_BACK, UIDAI_NUMBER, DL, DL_NUMBER, PASSPORT_FRONT, PASSPORT_BACK, PASSPORT_NUMBER, VOTER_ID, VOTER_ID_NUMBER, PAN, PAN_NUMBER, GST, GSTIN_NUMBER, CIN, CIN_NUMBER, NBFC_CERTIFICATE. If the doc type ends with a number you should add the doc value else upload the doc file. (optional) (default to undefined)
let doc_value: string; //Enter the display name of the uploaded file. (optional) (default to undefined)
let file: File; //Select the document that should be uploaded or provide the path of that file. You cannot upload a file that is more than 2MB in size. (optional) (default to undefined)

const { status, data } = await apiInstance.pGESUploadVendorsDocs(
    x_api_version,
    vendor_id,
    x_request_id,
    x_idempotency_key,
    doc_type,
    doc_value,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **vendor_id** | [**string**] | The id which uniquely identifies your vendor. | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|
| **doc_type** | [**string**] | Mention the type of the document you are uploading. Possible values: UIDAI_FRONT, UIDAI_BACK, UIDAI_NUMBER, DL, DL_NUMBER, PASSPORT_FRONT, PASSPORT_BACK, PASSPORT_NUMBER, VOTER_ID, VOTER_ID_NUMBER, PAN, PAN_NUMBER, GST, GSTIN_NUMBER, CIN, CIN_NUMBER, NBFC_CERTIFICATE. If the doc type ends with a number you should add the doc value else upload the doc file. | (optional) defaults to undefined|
| **doc_value** | [**string**] | Enter the display name of the uploaded file. | (optional) defaults to undefined|
| **file** | [**File**] | Select the document that should be uploaded or provide the path of that file. You cannot upload a file that is more than 2MB in size. | (optional) defaults to undefined|


### Return type

**UploadVendorDocumentsResponse**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Upload Vendor Docs Success Response. |  -  |
|**400** | Upload Vendor Docs Failure Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGOrderSplitAfterPayment**
> SplitAfterPaymentResponse pGOrderSplitAfterPayment()

Split After Payment API splits the payments to vendors after successful payment from the customers.

### Example

```typescript
import {
    EasySplitApi,
    Configuration,
    SplitAfterPaymentRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new EasySplitApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let order_id: string; //The id which uniquely identifies your order (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)
let SplitAfterPaymentRequest: SplitAfterPaymentRequest; //Request Body to Create Split for an order. (optional)

const { status, data } = await apiInstance.pGOrderSplitAfterPayment(
    x_api_version,
    order_id,
    x_request_id,
    x_idempotency_key,
    SplitAfterPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **SplitAfterPaymentRequest** | **SplitAfterPaymentRequest**| Request Body to Create Split for an order. | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **order_id** | [**string**] | The id which uniquely identifies your order | defaults to undefined|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**SplitAfterPaymentResponse**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Split After Payment Success Response. |  -  |
|**400** | Split After Payment Failure Response. |  -  |
|**404** | Split After Payment Failure Response. |  -  |
|**409** | Split After Payment Failure Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGOrderStaticSplit**
> StaticSplitResponse pGOrderStaticSplit()

This API will create a static split scheme wherein you can define the split type and the vendor-wise split percentage.

### Example

```typescript
import {
    EasySplitApi,
    Configuration,
    StaticSplitRequest
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new EasySplitApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)
let StaticSplitRequest: StaticSplitRequest; //Static Split (optional)

const { status, data } = await apiInstance.pGOrderStaticSplit(
    x_api_version,
    x_request_id,
    x_idempotency_key,
    StaticSplitRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **StaticSplitRequest** | **StaticSplitRequest**| Static Split | |
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD | defaults to '2025-01-01'|
| **x_request_id** | [**string**] | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   | (optional) defaults to undefined|


### Return type

**StaticSplitResponse**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Static Split Success Response. |  -  |
|**400** | Static Split Failure Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGSplitOrderRecon**
> SplitOrderReconSuccessResponse pGSplitOrderRecon()

Use this API to get all the split details, settled and unsettled transactions details of each vendor who were part of a particular order by providing order Id or start date and end date.

### Example

```typescript
import {
    EasySplitApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new EasySplitApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD (default to '2025-01-01')
let order_id: string; //The id which uniquely identifies your order (default to undefined)
let x_request_id: string; //Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.   (optional) (default to undefined)

const { status, data } = await apiInstance.pGSplitOrderRecon(
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

**SplitOrderReconSuccessResponse**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Split and Settlement Details by OrderID |  -  |
|**404** | Split Order Recon Failure Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

