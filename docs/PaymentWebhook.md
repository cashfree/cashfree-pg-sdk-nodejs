# PaymentWebhook

payment webhook object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PaymentWebhookDataEntity**](PaymentWebhookDataEntity.md) |  | [optional] [default to undefined]
**event_time** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentWebhook } from 'cashfree-pg';

const instance: PaymentWebhook = {
    data,
    event_time,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
