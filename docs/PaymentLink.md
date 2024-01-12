# PaymentLinks

Method | HTTP request | Description
------------- | ------------- | -------------
[**PGCancelLink**](PaymentLink.md#PGCancelLink) | **Post** /links/{link_id}/cancel | Cancel Payment Link
[**PGCreateLink**](PaymentLink.md#PGCreateLink) | **Post** /links | Create Payment Link
[**PGFetchLink**](PaymentLink.md#PGFetchLink) | **Get** /links/{link_id} | Fetch Payment Link Details
[**PGLinkFetchOrders**](PaymentLink.md#PGLinkFetchOrders) | **Get** /links/{link_id}/orders | Get Orders for a Payment Link



## PGCancelLink

> PGCancelLink(x_api_version: string, link_id: string, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<LinkEntity, any>>

Cancel Payment Link

### Example

```javascript
Cashfree.PGCancelLink("2022-09-01", "my_link_id_test").then((response) => {
    console.log('Cancel Payment Link successful:', response.data);
})
.catch((error) => {
    console.error('Error while cancelling payment link:', error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**linkId** | **string** | The payment link ID for which you want to view the details. | 
**xApiVersion** | **string** | API version to be used. Format is in YYYY-MM-DD | [default to &quot;2022-09-01&quot;]
**xRequestId** | **string** | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | 
**xIdempotencyKey** | **string** | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions. | 

### Response

```json
{
  cf_link_id: 29317867,
  link_id: 'my_link_id_test',
  link_status: 'CANCELLED',
  link_currency: 'INR',
  link_amount: 100,
  link_amount_paid: 0,
  link_partial_payments: true,
  link_minimum_partial_amount: 20,
  link_purpose: 'Payment for PlayStation 11',
  link_created_at: '2024-01-11T19:07:19+05:30',
  customer_details: {
    customer_name: 'John Doe',
    country_code: '+91',
    customer_phone: '9999999999',
    customer_email: 'john@cashfree.com'
  },
  link_meta: {
    notify_url: 'https://ee08e626ecd88c61c85f5c69c0418cb5.m.pipedream.net',
    return_url: 'https://b8af79f41056.eu.ngrok.io',
    upi_intent: 'false'
  },
  link_url: 'https://payments.cashfree.com/links/T63h9t9d77dg',
  link_expiry_time: '2024-10-14T15:04:05+05:30',
  link_notes: { key_1: 'value_1', key_2: 'value_2' },
  link_auto_reminders: false,
  link_notify: { send_email: true, send_sms: false },
  thank_you_msg: '',
  terms_and_conditions: '',
  enable_invoice: false
}
```


## PGCreateLink

> PGCreateLink(x_api_version: string, CreateLinkRequest: CreateLinkRequest, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<LinkEntity, any>>

Create Payment Link

### Example

```javascript
const request = {
    "link_amount": 100,
    "link_currency": "INR",
    "link_minimum_partial_amount": 20,
    "link_id": "my_link_id_test",
    "link_partial_payments": true,
    "customer_details": {
      "customer_name": "John Doe",
      "customer_phone": "9999999999",
      "customer_email": "john@cashfree.com"
    },
    "link_expiry_time": "2024-10-14T15:04:05+05:30",
    "link_purpose": "Payment for PlayStation 11",
    "link_notify": {
      "send_sms": false,
      "send_email": true
    },
    "link_auto_reminders": false,
    "link_notes": {
      "key_1": "value_1",
      "key_2": "value_2"
    },
    "link_meta": {
      "notify_url": "https://ee08e626ecd88c61c85f5c69c0418cb5.m.pipedream.net",
      "upi_intent": false,
      "return_url": "https://b8af79f41056.eu.ngrok.io"
    }
  }
  
Cashfree.PGCreateLink("2022-09-01", request).then((response) => {
    console.log('Payment Link creation successful:', response.data);
})
.catch((error) => {
    console.error('Error while creating payment link:', error);
});
```

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xApiVersion** | **string*** | API version to be used. Format is in YYYY-MM-DD | [default to &quot;2022-09-01&quot;]
**createLinkRequest** | **CreateLinkRequest*** | Request Body to Create Payment Links | 
**xRequestId** | **string** | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | 
**xIdempotencyKey** | **string** | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions. | 

### Response

```json
{
  cf_link_id: 29317867,
  link_id: 'my_link_id_test',
  link_status: 'ACTIVE',
  link_currency: 'INR',
  link_amount: 100,
  link_amount_paid: 0,
  link_partial_payments: true,
  link_minimum_partial_amount: 20,
  link_purpose: 'Payment for PlayStation 11',
  link_created_at: '2024-01-11T19:07:19+05:30',
  customer_details: {
    customer_name: 'John Doe',
    country_code: '+91',
    customer_phone: '9999999999',
    customer_email: 'john@cashfree.com'
  },
  link_meta: {
    notify_url: 'https://ee08e626ecd88c61c85f5c69c0418cb5.m.pipedream.net',
    payment_methods: '',
    return_url: 'https://b8af79f41056.eu.ngrok.io',
    upi_intent: 'false'
  },
  link_url: 'https://payments.cashfree.com/links/T63h9t9d77dg',
  link_expiry_time: '2024-10-14T15:04:05+05:30',
  link_notes: { key_1: 'value_1', key_2: 'value_2' },
  link_auto_reminders: false,
  link_notify: { send_email: true, send_sms: false },
  thank_you_msg: '',
  terms_and_conditions: '',
  enable_invoice: false
}
```


## PGFetchLink

> PGFetchLink(x_api_version: string, link_id: string, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<LinkEntity, any>>

Fetch Payment Link Details

### Example

```javascript
Cashfree.PGFetchLink("2022-09-01", "my_link_id_test").then((response) => {
    console.log('Fetching Payment Link successful:', response.data);
})
.catch((error) => {
    console.error('Error while fetching payment link:', error);
});
```

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**linkId** | **string*** | The payment link ID for which you want to view the details. | 
**xApiVersion** | **string*** | API version to be used. Format is in YYYY-MM-DD | [default to &quot;2022-09-01&quot;]
**xRequestId** | **string** | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | 
**xIdempotencyKey** | **string** | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions. | 

### Response
```json
{
  cf_link_id: 29317867,
  customer_details: {
    customer_name: 'John Doe',
    country_code: '+91',
    customer_phone: '9999999999',
    customer_email: 'john@cashfree.com'
  },
  entity: 'link',
  link_amount: 100,
  link_amount_paid: 0,
  link_auto_reminders: false,
  link_created_at: '2024-01-11T19:07:19+05:30',
  link_currency: 'INR',
  link_expiry_time: '2024-10-14T15:04:05+05:30',
  link_id: 'my_link_id_test',
  link_meta: {
    notify_url: 'https://ee08e626ecd88c61c85f5c69c0418cb5.m.pipedream.net',
    return_url: 'https://b8af79f41056.eu.ngrok.io',
    upi_intent: 'false'
  },
  link_minimum_partial_amount: 20,
  link_notes: { key_1: 'value_1', key_2: 'value_2' },
  link_notify: { send_email: true, send_sms: false },
  link_partial_payments: true,
  link_purpose: 'Payment for PlayStation 11',
  link_status: 'ACTIVE',
  link_url: 'https://payments.cashfree.com/links/T63h9t9d77dg'
}
```


## PGLinkFetchOrders

> PGLinkFetchOrders(x_api_version: string, link_id: string, x_request_id?: string, x_idempotency_key?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<OrderEntity[], any>>

Get Orders for a Payment Link



### Example

```javascript
Cashfree.PGLinkFetchOrders("2022-09-01", "my_link_id_test_01").then((response) => {
    console.log('Fetching Link Orders successful:', response.data);
})
.catch((error) => {
    console.error('Error while fetching Link Orders:', error);
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**linkId** | **string*** | The payment link ID for which you want to view the details. | 
**xApiVersion** | **string*** | API version to be used. Format is in YYYY-MM-DD | [default to &quot;2022-09-01&quot;]
**xRequestId** | **string** | Request id for the API call. Can be used to resolve tech issues. Communicate this in your tech related queries to cashfree | 
**xIdempotencyKey** | **string** | An idempotency key is a unique identifier you include with your API call. If the request fails or times out, you can safely retry it using the same key to avoid duplicate actions. | 

### Response
```json
[
  {
    cf_order_id: 2586071113,
    customer_details: {
      customer_id: null,
      customer_name: 'John Doe',
      customer_email: 'john@cashfree.com',
      customer_phone: '+919999999999',
      customer_uid: null
    },
    entity: 'order',
    link_id: 'my_link_id_test_01',
    order_amount: 1,
    order_currency: 'INR',
    order_expiry_time: '2024-01-11T19:26:28+05:30',
    order_id: 'CFPay_c63hatm02j0g_3eef46m9il',
    order_note: 'payment_link_29324360',
    order_splits: [],
    order_status: 'PAID',
    order_tags: {
      cf_link_id: '29324360',
      key_1: 'value_1',
      key_2: 'value_2',
      link_id: 'my_link_id_test_01'
    },
    payment_session_id: 'session_GAyx5_ZSKXQyPfIiya6uJoAs7eDrdDtcFbp--rqK9rrGNAnOCiOjVIoptu7Td5UJQhxTKykQcUS7-6y5Rw_YSTc4y69QLeLs__WvWZnE89Ix',
    payments: {
      url: 'https://api.cashfree.com/pg/orders/CFPay_c63hatm02j0g_3eef46m9il/payments'
    },
    refunds: {
      url: 'https://api.cashfree.com/pg/orders/CFPay_c63hatm02j0g_3eef46m9il/refunds'
    },
    settlements: {
      url: 'https://api.cashfree.com/pg/orders/CFPay_c63hatm02j0g_3eef46m9il/settlements'
    },
    terminal_data: null
  }
]
```

