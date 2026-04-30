# CreateSubscriptionPaymentRequestPaymentMethod

Payment method. Can be one of [\"upi\", \"enach\", \"pnach\", \"card\"]. This field is not required when raising a charge. It is only mandatory when raising an authorisation. In the case of a charge, this field is ignored, and the charge will be created using the same payment method that was used for the original authorisation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upi** | [**CreateSubscriptionPaymentRequestUpiUpi**](CreateSubscriptionPaymentRequestUpiUpi.md) |  | [optional] [default to undefined]
**enach** | [**CreateSubscriptionPaymentRequestEnachEnach**](CreateSubscriptionPaymentRequestEnachEnach.md) |  | [optional] [default to undefined]
**pnach** | [**CreateSubscriptionPaymentRequestPnachPnach**](CreateSubscriptionPaymentRequestPnachPnach.md) |  | [optional] [default to undefined]
**card** | [**CreateSubscriptionPaymentRequestCardCard**](CreateSubscriptionPaymentRequestCardCard.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateSubscriptionPaymentRequestPaymentMethod } from 'cashfree-pg';

const instance: CreateSubscriptionPaymentRequestPaymentMethod = {
    upi,
    enach,
    pnach,
    card,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
