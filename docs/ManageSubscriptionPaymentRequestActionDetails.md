# ManageSubscriptionPaymentRequestActionDetails

Details of the action to be performed. Needed for retry action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_scheduled_time** | **string** | Next scheduled time for the retry of the FAILED payment. Required for retry action. | [optional] [default to undefined]

## Example

```typescript
import { ManageSubscriptionPaymentRequestActionDetails } from 'cashfree-pg';

const instance: ManageSubscriptionPaymentRequestActionDetails = {
    next_scheduled_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
