# TokenVault

Method | HTTP request | Description
------------- | ------------- | -------------
[**PGCustomerDeleteInstrument**](TokenVault.md#PGCustomerDeleteInstrument) | **Delete** /customers/{customer_id}/instruments/{instrument_id} | Delete Saved Card Instrument
[**PGCustomerFetchInstrument**](TokenVault.md#PGCustomerFetchInstrument) | **Get** /customers/{customer_id}/instruments/{instrument_id} | Fetch Specific Saved Card Instrument
[**PGCustomerFetchInstruments**](TokenVault.md#PGCustomerFetchInstruments) | **Get** /customers/{customer_id}/instruments | Fetch All Saved Card Instrument
[**PGCustomerInstrumentsFetchCryptogram**](TokenVault.md#PGCustomerInstrumentsFetchCryptogram) | **Get** /customers/{customer_id}/instruments/{instrument_id}/cryptogram | Fetch cryptogram for a saved card instrument



## PGCustomerDeleteInstrument

> PGCustomerDeleteInstrument(x_api_version: string, customer_id: string, instrument_id: string, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<InstrumentEntity, any>>

Delete Saved Card Instrument

### Example

```javascript
Cashfree.PGCustomerDeleteInstrument("2022-09-01", "<customer_id>", "<instrument_id>").then((response) => {
    console.log('Instrument Delete successful:', response.data);
})
.catch((error) => {
    console.error('Error while deleting instrument:', error);
});
```

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**customerId** | **string*** | Your Customer ID that you had sent during create order API &#x60;POST/orders&#x60; | 
**instrumentId** | **string*** | The instrument_id which needs to be deleted | 
**xApiVersion** | **string*** | API version to be used. Format is in YYYY-MM-DD | [default to &quot;2022-09-01&quot;]
**xRequestId** | **string** | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | 
**xIdempotencyKey** | **string** | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions. | 

### Response

```json
{
  instrument_id: '<instrument_id>',
  instrument_type: 'card',
  instrument_uid: '<instrument_uid>',
  instrument_display: '<instrument_display>',
  instrument_meta: {
    card_network: 'visa',
    card_bank_name: 'AXIS BANK',
    card_country: 'IN',
    card_type: 'credit_card',
    card_sub_type: 'P',
    card_token_details: {
      par: '<par>',
      expiry_month: '',
      expiry_year: ''
    }
  },
  instrument_status: 'ACTIVE',
  created_at: '2024-01-03T10:45:36.000+00:00',
  afa_reference: '2369944214',
}
```

## PGCustomerFetchInstrument

> PGCustomerFetchInstrument(x_api_version: string, customer_id: string, instrument_id: string, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<InstrumentEntity, any>>

Fetch Specific Saved Card Instrument



### Example

```javascript
Cashfree.PGCustomerFetchInstrument("2022-09-01", "<customer_id>", "<instrument_id>").then((response) => {
    console.log('Instrument Fetch successful:', response.data);
})
.catch((error) => {
    console.error('Error while fetching instrument:', error);
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**customerId** | **string** | Your Customer ID that you had sent during create order API &#x60;POST/orders&#x60; | 
**instrumentId** | **string** | The instrument_id of the saved instrument which needs to be queried | 
**xApiVersion** | **string** | API version to be used. Format is in YYYY-MM-DD | [default to &quot;2022-09-01&quot;]
**xRequestId** | **string** | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | 
**xIdempotencyKey** | **string** | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions. | 

### Response
```json
{
  instrument_id: '<instrument_id>',
  instrument_type: 'card',
  instrument_uid: '<instrument_uid>',
  instrument_display: '<instrument_display>',
  instrument_meta: {
    card_network: 'visa',
    card_bank_name: 'AXIS BANK',
    card_country: 'IN',
    card_type: 'credit_card',
    card_sub_type: 'P',
    card_token_details: {
      par: '<par>',
      expiry_month: '',
      expiry_year: ''
    }
  },
  instrument_status: 'ACTIVE',
  created_at: '2024-01-03T10:45:36.000+00:00',
  afa_reference: '2369944214',
}  
```

## PGCustomerFetchInstruments

> PGCustomerFetchInstruments(x_api_version: string, customer_id: string, instrument_type: PGCustomerFetchInstrumentsInstrumentTypeEnum, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<InstrumentEntity[], any>>

Fetch All Saved Card Instrument

### Example

```javascript
Cashfree.PGCustomerFetchInstruments("2022-09-01", "<customer_id>", "card").then((response) => {
    console.log('Fetching Instruments Successful:', response.data);
})
.catch((error) => {
    console.error('Error while fetching instruments:', error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**customerId** | **string*** | Your Customer ID that you had sent during create order API &#x60;POST/orders&#x60; | 
**xApiVersion** | **string*** | API version to be used. Format is in YYYY-MM-DD | [default to &quot;2022-09-01&quot;]
**instrumentType** | **string*** | Payment mode or type of saved instrument  | 
**xRequestId** | **string** | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | 
**xIdempotencyKey** | **string** | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions. | 

### Response
```json
[
  {
    instrument_id: '<instrument_id>',
    instrument_type: 'card',
    instrument_uid: '<instrument_uid>',
    instrument_display: '<instrument_display>',
    instrument_meta: {
      card_network: 'visa',
      card_bank_name: 'AXIS BANK',
      card_country: 'IN',
      card_type: 'credit_card',
      card_sub_type: 'P',
      card_token_details: [Object]
    },
    instrument_status: 'ACTIVE',
    created_at: '2024-01-03T10:45:36.000+00:00',
    afa_reference: '2369944214',
    customer_id: '<customer_id>'
  }
]
```


## PGCustomerInstrumentsFetchCryptogram

> PGCustomerInstrumentsFetchCryptogram(x_api_version: string, customer_id: string, instrument_id: string, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<CryptogramEntity, any>>

Fetch cryptogram for a saved card instrument



### Example

```javascript
Cashfree.PGCustomerInstrumentsFetchCryptogram("2022-09-01", "<customer_id>", "<instrument_id>").then((response) => {
    console.log('Cryptogram Fetch successful:', response.data);
})
.catch((error) => {
    console.error('Error fetching cryptogram:', error);
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**customerId** | **string*** | Your Customer ID that you had sent during create order API &#x60;POST/orders&#x60; | 
**instrumentId** | **string*** | The instrument_id of the saved card instrument which needs to be queried | 
**xApiVersion** | **string*** | API version to be used. Format is in YYYY-MM-DD | [default to &quot;2022-09-01&quot;]
**xRequestId** | **string** | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | 
**xIdempotencyKey** | **string** | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions. | 

### Response

```json
{
  instrument_id: '<instrument_id>',
  token_requestor_id: '<token_requestor_id>',
  card_number: '<card_number>',
  card_expiry_mm: '05',
  card_expiry_yy: '2025',
  cryptogram: '<cryptogram>',
  card_display: '<card_display>'
}
```

