# PaymentWebhookOrderEntity

order entity in webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_id** | **string** |  | [optional] [default to undefined]
**order_amount** | **number** |  | [optional] [default to undefined]
**order_currency** | **string** |  | [optional] [default to undefined]
**order_tags** | **{ [key: string]: string; }** | Custom Tags in thr form of {\&quot;key\&quot;:\&quot;value\&quot;} which can be passed for an order. A maximum of 10 tags can be added | [optional] [default to undefined]

## Example

```typescript
import { PaymentWebhookOrderEntity } from 'cashfree-pg';

const instance: PaymentWebhookOrderEntity = {
    order_id,
    order_amount,
    order_currency,
    order_tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
