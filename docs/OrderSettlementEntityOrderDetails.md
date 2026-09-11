# OrderSettlementEntityOrderDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_id** | **string** | Unique order ID. | [optional] [default to undefined]
**order_amount** | **number** | The amount which was passed at the order creation time. | [optional] [default to undefined]
**order_currency** | **string** | Currency of the order. | [optional] [default to undefined]
**order_tags** | **object** | The order tags provided during order creation. | [optional] [default to undefined]

## Example

```typescript
import { OrderSettlementEntityOrderDetails } from 'cashfree-pg';

const instance: OrderSettlementEntityOrderDetails = {
    order_id,
    order_amount,
    order_currency,
    order_tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
