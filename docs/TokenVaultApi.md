# TokenVaultApi

All URIs are relative to *https://sandbox.cashfree.com/pg*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**pGCustomerDeleteInstrument**](#pgcustomerdeleteinstrument) | **DELETE** /customers/{customer_id}/instruments/{instrument_id} | Delete Saved Card Instrument|
|[**pGCustomerFetchInstrument**](#pgcustomerfetchinstrument) | **GET** /customers/{customer_id}/instruments/{instrument_id} | Fetch Specific Saved Card Instrument|
|[**pGCustomerFetchInstruments**](#pgcustomerfetchinstruments) | **GET** /customers/{customer_id}/instruments?instrument_type&#x3D;card | Fetch All Saved Card Instrument|
|[**pGCustomerInstrumentsFetchCryptogram**](#pgcustomerinstrumentsfetchcryptogram) | **GET** /customers/{customer_id}/instruments/{instrument_id}/cryptogram | Fetch Cryptogram for a Saved Card Instrument|

# **pGCustomerDeleteInstrument**
> DeletedInstrumentEntity pGCustomerDeleteInstrument()

Use this API to delete a specific saved card stored for the customer in Cashfree’s [Token Vault](https://www.cashfree.com/docs/payments/features/token-vault).

### Example

```typescript
import {
    TokenVaultApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new TokenVaultApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD. (default to '2026-01-01')
let customer_id: string; //The customer ID provided by the merchant during the [Create Order API](https://www.cashfree.com/docs/api-reference/payments/latest/orders/create) call, used to save cards for the customer. (default to undefined)
let instrument_id: string; //The instrument_id which needs to be deleted. (default to undefined)
let x_request_id: string; //Request ID for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to Cashfree. (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.  (optional) (default to undefined)

const { status, data } = await apiInstance.pGCustomerDeleteInstrument(
    x_api_version,
    customer_id,
    instrument_id,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD. | defaults to '2026-01-01'|
| **customer_id** | [**string**] | The customer ID provided by the merchant during the [Create Order API](https://www.cashfree.com/docs/api-reference/payments/latest/orders/create) call, used to save cards for the customer. | defaults to undefined|
| **instrument_id** | [**string**] | The instrument_id which needs to be deleted. | defaults to undefined|
| **x_request_id** | [**string**] | Request ID for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to Cashfree. | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.  | (optional) defaults to undefined|


### Return type

**DeletedInstrumentEntity**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete saved card instrument object. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**502** | Bank related Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGCustomerFetchInstrument**
> InstrumentEntity pGCustomerFetchInstrument()

Use this API to fetch a specific saved card stored for the customer in Cashfree’s [Token Vault](https://www.cashfree.com/docs/payments/features/token-vault).

### Example

```typescript
import {
    TokenVaultApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new TokenVaultApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD. (default to '2026-01-01')
let customer_id: string; //The customer ID provided by the merchant during the [Create Order API](https://www.cashfree.com/docs/api-reference/payments/latest/orders/create) call, used to save cards for the customer. (default to undefined)
let instrument_id: string; //The instrument_id of the saved instrument which needs to be queried. (default to undefined)
let x_request_id: string; //Request ID for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to Cashfree. (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.  (optional) (default to undefined)

const { status, data } = await apiInstance.pGCustomerFetchInstrument(
    x_api_version,
    customer_id,
    instrument_id,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD. | defaults to '2026-01-01'|
| **customer_id** | [**string**] | The customer ID provided by the merchant during the [Create Order API](https://www.cashfree.com/docs/api-reference/payments/latest/orders/create) call, used to save cards for the customer. | defaults to undefined|
| **instrument_id** | [**string**] | The instrument_id of the saved instrument which needs to be queried. | defaults to undefined|
| **x_request_id** | [**string**] | Request ID for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to Cashfree. | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.  | (optional) defaults to undefined|


### Return type

**InstrumentEntity**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Saved card instrument object. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**502** | Bank related Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGCustomerFetchInstruments**
> Array<InstrumentEntityForAllSavedCard> pGCustomerFetchInstruments()

Use this API to fetch all saved cards stored for the customer in Cashfree’s [Token Vault](https://www.cashfree.com/docs/payments/features/token-vault).

### Example

```typescript
import {
    TokenVaultApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new TokenVaultApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD. (default to '2026-01-01')
let customer_id: string; //The customer ID provided by the merchant during the [Create Order API](https://www.cashfree.com/docs/api-reference/payments/latest/orders/create) call, used to save cards for the customer. (default to undefined)
let instrument_type: 'card'; //Payment mode or type of saved instrument. (default to undefined)
let x_request_id: string; //Request ID for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to Cashfree. (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.  (optional) (default to undefined)

const { status, data } = await apiInstance.pGCustomerFetchInstruments(
    x_api_version,
    customer_id,
    instrument_type,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD. | defaults to '2026-01-01'|
| **customer_id** | [**string**] | The customer ID provided by the merchant during the [Create Order API](https://www.cashfree.com/docs/api-reference/payments/latest/orders/create) call, used to save cards for the customer. | defaults to undefined|
| **instrument_type** | [**&#39;card&#39;**]**Array<&#39;card&#39; &#124; &#39;11184809&#39;>** | Payment mode or type of saved instrument. | defaults to undefined|
| **x_request_id** | [**string**] | Request ID for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to Cashfree. | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.  | (optional) defaults to undefined|


### Return type

**Array<InstrumentEntityForAllSavedCard>**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Contains list of all saved cards for the customer. Merchants are advised to filter out saved cards basis token expiry sent in API response, to only show active saved cards/tokens on their checkout. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pGCustomerInstrumentsFetchCryptogram**
> CryptogramEntity pGCustomerInstrumentsFetchCryptogram()

Use this API to retrieve the token and cryptogram for a specific saved card stored in Cashfree\'s [Token Vault](https://www.cashfree.com/docs/payments/features/token-vault). 

### Example

```typescript
import {
    TokenVaultApi,
    Configuration
} from 'cashfree-pg';

const configuration = new Configuration();
const apiInstance = new TokenVaultApi(configuration);

let x_api_version: string; //API version to be used. Format is in YYYY-MM-DD. (default to '2026-01-01')
let customer_id: string; //The customer ID provided by the merchant during the [Create Order API](https://www.cashfree.com/docs/api-reference/payments/latest/orders/create) call, used to save cards for the customer. (default to undefined)
let instrument_id: string; //Identifier for the specific card to fetch its details. (default to undefined)
let x_request_id: string; //Request ID for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to Cashfree. (optional) (default to undefined)
let x_idempotency_key: string; //An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.  (optional) (default to undefined)

const { status, data } = await apiInstance.pGCustomerInstrumentsFetchCryptogram(
    x_api_version,
    customer_id,
    instrument_id,
    x_request_id,
    x_idempotency_key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **x_api_version** | [**string**] | API version to be used. Format is in YYYY-MM-DD. | defaults to '2026-01-01'|
| **customer_id** | [**string**] | The customer ID provided by the merchant during the [Create Order API](https://www.cashfree.com/docs/api-reference/payments/latest/orders/create) call, used to save cards for the customer. | defaults to undefined|
| **instrument_id** | [**string**] | Identifier for the specific card to fetch its details. | defaults to undefined|
| **x_request_id** | [**string**] | Request ID for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to Cashfree. | (optional) defaults to undefined|
| **x_idempotency_key** | [**string**] | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions.  | (optional) defaults to undefined|


### Return type

**CryptogramEntity**

### Authorization

[XPartnerAPIKey](../README.md#XPartnerAPIKey), [XClientSecret](../README.md#XClientSecret), [XPartnerMerchantID](../README.md#XPartnerMerchantID), [XClientID](../README.md#XClientID), [XClientSignatureHeader](../README.md#XClientSignatureHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Cryptogram object for a saved card. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**400** | Bad request error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**401** | Authentication Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**404** | Resource Not found. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**409** | Resource already present. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**422** | Idempotency error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**429** | Rate Limit Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**500** | API related Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |
|**502** | Bank related Error. |  * x-api-version -  <br>  * x-ratelimit-limit -  <br>  * x-ratelimit-remaining -  <br>  * x-ratelimit-retry -  <br>  * x-ratelimit-type -  <br>  * x-request-id -  <br>  * x-idempotency-key -  <br>  * x-idempotency-replayed -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

