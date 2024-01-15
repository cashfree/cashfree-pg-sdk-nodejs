# TokenVault

Method | HTTP request | Description
------------- | ------------- | -------------
[**PGCustomerDeleteInstrument**](TokenVault.md#PGCustomerDeleteInstrument) | **Delete** /customers/{customer_id}/instruments/{instrument_id} | Delete Saved Card Instrument
[**PGCustomerFetchInstrument**](TokenVault.md#PGCustomerFetchInstrument) | **Get** /customers/{customer_id}/instruments/{instrument_id} | Fetch Specific Saved Card Instrument
[**PGCustomerFetchInstruments**](TokenVault.md#PGCustomerFetchInstruments) | **Get** /customers/{customer_id}/instruments | Fetch All Saved Card Instrument
[**PGCustomerInstrumentsFetchCryptogram**](TokenVault.md#PGCustomerInstrumentsFetchCryptogram) | **Get** /customers/{customer_id}/instruments/{instrument_id}/cryptogram | Fetch cryptogram for a saved card instrument



## PGCustomerDeleteInstrument

> PGCustomerDeleteInstrument(x_api_version: string, customer_id: string, instrument_id: string, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<InstrumentEntity, any>>

Delete Saved Card Instrument ([Docs](https://docs.cashfree.com/reference/pgcustomerdeleteinstrument))

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


### Response

```json
{
  "customer_id": "siddhesh_desai",
  "afa_reference": "740324562",
  "instrument_id": "54deabb4-ba45-4a60-9e6a-9c016fe7ab10",
  "instrument_type": "card",
  "instrument_uid": "0d8f70838cc5af8b1cd2bc0fe71278551fd3f1101e40020d89ad22ceba4f933c",
  "instrument_display": "xxxxxxxxxxxx4375",
  "instrument_status": "ACTIVE",
  "created_at": "2021-11-11 16:57:57",
  "instrument_meta": {
    "card_network": "VISA",
    "card_bank_name": "HDFC Bank Limited",
    "card_country": "IN",
    "card_type": "DEBIT_CARD",
    "card_token_details": {
      "par": "somepar",
      "expiry_month": "12",
      "expiry_year": "23"
    }
  }
}
```

## PGCustomerFetchInstrument

> PGCustomerFetchInstrument(x_api_version: string, customer_id: string, instrument_id: string, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<InstrumentEntity, any>>

Fetch Specific Saved Card Instrument ([Docs](https://docs.cashfree.com/reference/pgcustomerfetchinstrument))



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


### Response
```json
{
  "customer_id": "siddhesh_desai",
  "afa_reference": "740324562",
  "instrument_id": "54deabb4-ba45-4a60-9e6a-9c016fe7ab10",
  "instrument_type": "card",
  "instrument_uid": "0d8f70838cc5af8b1cd2bc0fe71278551fd3f1101e40020d89ad22ceba4f933c",
  "instrument_display": "xxxxxxxxxxxx4375",
  "instrument_status": "ACTIVE",
  "created_at": "2021-11-11 16:57:57",
  "instrument_meta": {
    "card_network": "VISA",
    "card_bank_name": "HDFC Bank Limited",
    "card_country": "IN",
    "card_type": "DEBIT_CARD",
    "card_token_details": {
      "par": "somepar",
      "expiry_month": "12",
      "expiry_year": "23"
    }
  }
}
```

## PGCustomerFetchInstruments

> PGCustomerFetchInstruments(x_api_version: string, customer_id: string, instrument_type: PGCustomerFetchInstrumentsInstrumentTypeEnum, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<InstrumentEntity[], any>>

Fetch All Saved Card Instrument ([Docs](https://docs.cashfree.com/reference/pgcustomerfetchinstruments))

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


### Response
```json
[
  {
  "customer_id": "siddhesh_desai",
  "afa_reference": "740324562",
  "instrument_id": "54deabb4-ba45-4a60-9e6a-9c016fe7ab10",
  "instrument_type": "card",
  "instrument_uid": "0d8f70838cc5af8b1cd2bc0fe71278551fd3f1101e40020d89ad22ceba4f933c",
  "instrument_display": "xxxxxxxxxxxx4375",
  "instrument_status": "ACTIVE",
  "created_at": "2021-11-11 16:57:57",
  "instrument_meta": {
    "card_network": "VISA",
    "card_bank_name": "HDFC Bank Limited",
    "card_country": "IN",
    "card_type": "DEBIT_CARD",
    "card_token_details": {
      "par": "somepar",
      "expiry_month": "12",
      "expiry_year": "23"
    }
  }
}
]
```


## PGCustomerInstrumentsFetchCryptogram

> PGCustomerInstrumentsFetchCryptogram(x_api_version: string, customer_id: string, instrument_id: string, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<CryptogramEntity, any>>

Fetch cryptogram for a saved card instrument ([Docs](https://docs.cashfree.com/reference/pgcustomerinstrumentsfetchcryptogram))



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


### Response

```json
{
  "instrument_id": "54deabb4-ba45-4a60-9e6a-9c016fe7ab10",
  "token_requestor_id": "22457512314",
  "card_number": "4491365621601472",
  "card_expiry_mm": "06",
  "card_expiry_yy": "2025",
  "cryptogram": "AQBBBBBBZatIlaIAmWKSghwBBBB=",
  "card_display": "1234"
}
```

