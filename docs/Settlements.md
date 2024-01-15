# Settlements

Method | HTTP request | Description
------------- | ------------- | -------------
[**PGOrderFetchSettlement**](Settlements.md#PGOrderFetchSettlement) | **Get** /orders/{order_id}/settlements | Get Settlements by Order ID



## PGOrderFetchSettlement

> PGOrderFetchSettlement(x_api_version: string, order_id: string, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SettlementEntity, any>>

Get Settlements by Order ID ([Docs](https://docs.cashfree.com/reference/pgorderfetchsettlement)

### Example

```javascript
Cashfree.PGOrderFetchSettlement("2022-09-01", "order-12-127").then((response) => {
    console.log('Settlement Details Fetch successful:', response.data);
})
.catch((error) => {
    console.error('Error while fetching settlement details:', error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**orderId** | **string** | The id which uniquely identifies your order | 
**xApiVersion** | **string** | API version to be used. Format is in YYYY-MM-DD | [default to &quot;2022-09-01&quot;]
**xRequestId** | **string** | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | 


### Response

```json
{
  "cf_payment_id": 553338,
  "order_id": "order-12-127",
  "entity": "settlement",
  "order_amount": 100,
  "payment_time": "2021-07-13T13:13:59+05:30",
  "service_charge": 10,
  "service_tax": 1.8,
  "settlement_amount": 88.2,
  "cf_settlement_id": 6121238,
  "transfer_id": 238,
  "transfer_time": "2021-07-25T12:57:52+05:30",
  "transfer_utr": "N87912312",
  "order_currency": "INR",
  "settlement_currency": "INR"
}
```

