# PaymentMethodOthersInPaymentsEntity

payment method others object in payment entity. Returned for payment modes without a dedicated payment_method object, for example UPI_CREDIT_LINE.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**others** | **object** |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodOthersInPaymentsEntity } from 'cashfree-pg';

const instance: PaymentMethodOthersInPaymentsEntity = {
    others,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
