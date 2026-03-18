# SettlementReconEntityDataInnerOrderDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_id** | **string** | Unique order ID. Alphanumeric and only \&#39;-\&#39; and \&#39;_\&#39; allowed. | [optional] [default to undefined]
**order_amount** | **number** | The amount which was passed at the order creation time. | [optional] [default to undefined]
**order_currency** | **string** | Order Curreny type - INR. | [optional] [default to undefined]
**order_tags** | **object** | The order tags provided during order creation | [optional] [default to undefined]

## Example

```typescript
import { SettlementReconEntityDataInnerOrderDetails } from 'cashfree-pg';

const instance: SettlementReconEntityDataInnerOrderDetails = {
    order_id,
    order_amount,
    order_currency,
    order_tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
