# PaymentWebhookCustomerEntity

customer details object in webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_name** | **string** |  | [optional] [default to undefined]
**customer_id** | **string** |  | [optional] [default to undefined]
**customer_email** | **string** |  | [optional] [default to undefined]
**customer_phone** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentWebhookCustomerEntity } from 'cashfree-pg';

const instance: PaymentWebhookCustomerEntity = {
    customer_name,
    customer_id,
    customer_email,
    customer_phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
