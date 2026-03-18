# CreateOrderRequest

Request body to create an order at cashfree

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_id** | **string** | Order identifier present in your system. Alphanumeric, \&#39;_\&#39; and \&#39;-\&#39; only | [optional] [default to undefined]
**order_amount** | **number** | Bill amount for the order. Provide upto two decimals. 10.15 means Rs 10 and 15 paisa | [default to undefined]
**order_currency** | **string** | Currency for the order. INR if left empty. Contact care@cashfree.com to enable new currencies. | [default to undefined]
**cart_details** | [**CartDetails**](CartDetails.md) |  | [optional] [default to undefined]
**customer_details** | [**CustomerDetails**](CustomerDetails.md) |  | [default to undefined]
**terminal** | [**TerminalDetails**](TerminalDetails.md) |  | [optional] [default to undefined]
**order_meta** | [**OrderMeta**](OrderMeta.md) |  | [optional] [default to undefined]
**order_expiry_time** | **string** | Time after which the order expires. Customers will not be able to make the payment beyond the time specified here. We store timestamps in IST, but you can provide them in a valid ISO 8601 time format. Example 2021-07-02T10:20:12+05:30 for IST, 2021-07-02T10:20:12Z for UTC | [optional] [default to undefined]
**order_note** | **string** | Order note for reference. | [optional] [default to undefined]
**order_tags** | **{ [key: string]: string; }** | Custom Tags in thr form of {\&quot;key\&quot;:\&quot;value\&quot;} which can be passed for an order. A maximum of 10 tags can be added | [optional] [default to undefined]
**order_splits** | [**Array&lt;VendorSplit&gt;**](VendorSplit.md) | If you have Easy split enabled in your Cashfree account then you can use this option to split the order amount. | [optional] [default to undefined]
**products** | [**Products**](Products.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateOrderRequest } from 'cashfree-pg';

const instance: CreateOrderRequest = {
    order_id,
    order_amount,
    order_currency,
    cart_details,
    customer_details,
    terminal,
    order_meta,
    order_expiry_time,
    order_note,
    order_tags,
    order_splits,
    products,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
