# PGReconciliation

Method | HTTP request | Description
------------- | ------------- | -------------
[**PGFetchRecon**](PGReconciliation.md#PGFetchRecon) | **Post** /recon | PG Reconciliation



## PGFetchRecon

> PGFetchRecon(x_api_version: string, FetchReconRequest: FetchReconRequest, Content_Type?: string, x_request_id?: string, x_idempotency_key?: string, Accept?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReconEntity, any>>

PG Reconciliation ([Docs](https://docs.cashfree.com/reference/pgfetchrecon))



### Example

```javascript
const request = {
    "pagination": {
      "limit": 10,
      "cursor": "eyJzZWFyY2hBZnRlciI6eyJsaXN0IjpbMTg4NjcxNDVdLCJlbXB0eSI6ZmFsc2V9LCJyZWNvbkFQSVR5cGUiOiJMRURHRVIifQ=="
    },
    "filters": {
      "start_date": "2022-07-20T00:00:00Z",
      "end_date": "2022-07-21T23:59:59Z"
    }
  }
 Cashfree.PGFetchRecon("2022-09-01", request, "application/json", null, null, "application/json").then((response) => {
    console.log('Fetch Recon successful:', response.data);
})
.catch((error) => {
    console.error('Error while fetching:', error);
});
```

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xApiVersion** | **string** | API version to be used. Format is in YYYY-MM-DD | [default to &quot;2022-09-01&quot;]
**fetchReconRequest** | [**FetchReconRequest**](FetchReconRequest.md) | Request Body for the reconciliation | 
**contentType** | **string** | application/json | 
**xRequestId** | **string** | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | 

**accept** | **string** | application/json | 

### Response

```json
{
  "cursor": "cursor-uid",
  "limit": 9,
  "data": [
    {
      "cf_settlement_id": 45345,
      "settlement_date": "2022-08-16T14:45:24+05:30",
      "sale_type": "CREDIT",
      "event_amount": 3000,
      "amount_settled": 2796.46,
      "event_settlement_amount": 2800,
      "event_currency": "INR",
      "payment_till": "2022-08-16T14:45:00+05:30",
      "event_id": "45345",
      "event_type": "SETTLEMENT",
      "service_charge": 0,
      "service_tax": 0,
      "settlement_utr": "PGI45345",
      "payment_from": "2022-08-16T14:14:55+05:30",
      "settlement_initiated_on": "2022-08-16T14:45:24+05:30",
      "adjustment": -200,
      "settlement_tax": 0.54,
      "event_time": "2022-08-16T14:45:07+05:30",
      "settlement_charge": 3,
      "entity": "recon",
      "remarks": "Settled",
      "event_status": "PAID",
      "settlement_type": "INSTANT_SETTLEMENT",
      "payment_group": "CREDIT_CARD"
    },
    {
      "cf_settlement_id": 45356,
      "settlement_date": "2022-08-16T14:45:14+05:30",
      "sale_type": "CREDIT",
      "event_amount": 0,
      "amount_settled": 0,
      "event_settlement_amount": 0,
      "event_currency": "INR",
      "payment_till": "2022-08-16T14:45:14+05:30",
      "event_id": "45356",
      "event_type": "SETTLEMENT",
      "service_charge": 0,
      "service_tax": 0,
      "settlement_utr": "",
      "payment_from": "2022-08-16T14:45:14+05:30",
      "adjustment": 0,
      "settlement_tax": 0,
      "event_time": "2022-08-16T14:45:14+05:30",
      "settlement_charge": 0,
      "entity": "recon",
      "remarks": "No eligible transactions to settle",
      "event_status": "PAID",
      "settlement_type": "INSTANT_SETTLEMENT",
      "payment_group": "CREDIT_CARD"
    },
    {
      "cf_settlement_id": 45373,
      "settlement_date": "2022-08-16T14:45:38+05:30",
      "sale_type": "CREDIT",
      "event_amount": 0,
      "amount_settled": 0,
      "event_settlement_amount": 0,
      "event_currency": "INR",
      "payment_till": "2022-08-16T14:45:38+05:30",
      "event_id": "45373",
      "event_type": "SETTLEMENT",
      "service_charge": 0,
      "service_tax": 0,
      "settlement_utr": "",
      "payment_from": "2022-08-16T14:45:38+05:30",
      "adjustment": 0,
      "settlement_tax": 0,
      "event_time": "2022-08-16T14:45:38+05:30",
      "settlement_charge": 0,
      "entity": "recon",
      "remarks": "No eligible transactions to settle",
      "event_status": "PAID",
      "settlement_type": "INSTANT_SETTLEMENT",
      "payment_group": "CREDIT_CARD"
    },
    {
      "cf_settlement_id": 45406,
      "split_service_charge": 0,
      "sale_type": "DEBIT",
      "event_amount": 3067.26,
      "payment_service_charge": 0,
      "event_settlement_amount": 3067.26,
      "event_type": "DISPUTE",
      "order_amount": 3000,
      "payment_service_tax": 0,
      "closed_in_favor_of": "MERCHANT",
      "dispute_resolved_on": "2022-08-16 14:53:15",
      "event_status": "CLOSED",
      "settlement_date": "2022-08-16T14:45:24+05:30",
      "customer_phone": "8281554863",
      "dispute_note": "tesr",
      "event_currency": "INR",
      "event_id": "272",
      "settlement_utr": "PGI45406",
      "customer_email": "manideep.ellur@cashfree.com",
      "dispute_category": "1402-Duplicate Processing",
      "customer_name": "Manideep",
      "split_service_tax": 0,
      "vendor_commission": 0,
      "order_id": "order_1527072DQpGNwTMBlnAc1GfxmWalriHBG",
      "entity": "recon",
      "event_time": "2022-08-16T14:52:55+05:30",
      "payment_group": "CREDIT_CARD"
    },
    {
      "cf_settlement_id": 45406,
      "split_service_charge": 0,
      "sale_type": "CREDIT",
      "event_amount": 3067.26,
      "payment_service_charge": 0,
      "event_settlement_amount": 3067.26,
      "event_type": "DISPUTE_REVERSAL",
      "order_amount": 3000,
      "payment_service_tax": 0,
      "closed_in_favor_of": "MERCHANT",
      "dispute_resolved_on": "2022-08-16 14:53:15",
      "event_status": "CLOSED",
      "settlement_date": "2022-08-16T14:45:24+05:30",
      "customer_phone": "8281554863",
      "dispute_note": "tesr",
      "event_currency": "INR",
      "event_id": "272",
      "settlement_utr": "PGI45406",
      "customer_email": "manideep.ellur@cashfree.com",
      "dispute_category": "1402-Duplicate Processing",
      "customer_name": "Manideep",
      "split_service_tax": 0,
      "vendor_commission": 0,
      "order_id": "order_1527072DQpGNwTMBlnAc1GfxmWalriHBG",
      "entity": "recon",
      "event_time": "2022-08-16T14:52:55+05:30",
      "payment_group": "CREDIT_CARD"
    },
    {
      "cf_settlement_id": 45345,
      "event_id": "45345",
      "event_type": "OTHER_ADJUSTMENT",
      "sale_type": "CREDIT",
      "event_amount": 3000,
      "adjustment_remarks": "INSTANT_SETTLEMENT_COMPUTE",
      "event_currency": "INR",
      "event_time": "2022-08-16T14:45:07+05:30",
      "entity": "recon",
      "event_settlement_amount": 3000,
      "payment_group": "CREDIT_CARD"
    },
    {
      "cf_settlement_id": 45345,
      "event_id": "45345",
      "event_type": "OTHER_ADJUSTMENT",
      "sale_type": "DEBIT",
      "event_amount": 3,
      "adjustment_remarks": "INSTANT_SETTLEMENT_CHARGE",
      "event_currency": "INR",
      "event_time": "2022-08-16T14:45:21+05:30",
      "entity": "recon",
      "event_settlement_amount": 3,
      "payment_group": "CREDIT_CARD"
    },
    {
      "cf_settlement_id": 45345,
      "event_id": "45345",
      "event_type": "OTHER_ADJUSTMENT",
      "sale_type": "DEBIT",
      "event_amount": 0.54,
      "adjustment_remarks": "INSTANT_SETTLEMENT_TAX",
      "event_currency": "INR",
      "event_time": "2022-08-16T14:45:21+05:30",
      "entity": "recon",
      "event_settlement_amount": 0.54
    },
    {
      "cf_settlement_id": 45345,
      "event_id": "45345",
      "event_type": "OTHER_ADJUSTMENT",
      "sale_type": "DEBIT",
      "event_amount": 2796.46,
      "adjustment_remarks": "INSTANT_SETTLEMENT_SWEEP",
      "event_currency": "INR",
      "event_time": "2022-08-16T14:45:21+05:30",
      "entity": "recon",
      "event_settlement_amount": 2796.46,
      "payment_group": "CREDIT_CARD"
    }
  ]
}
```

