# ManageSubscriptionPaymentRequest

Request body to manage a subscription payment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_id** | **string** | The unique ID which was used to create subscription. | [default to undefined]
**payment_id** | **string** | The unique ID which was used to create payment. | [default to undefined]
**action** | **string** | Action to be performed on the payment. Possible values - CANCEL, RETRY. | [default to undefined]
**action_details** | [**ManageSubscriptionPaymentRequestActionDetails**](ManageSubscriptionPaymentRequestActionDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ManageSubscriptionPaymentRequest } from 'cashfree-pg';

const instance: ManageSubscriptionPaymentRequest = {
    subscription_id,
    payment_id,
    action,
    action_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
