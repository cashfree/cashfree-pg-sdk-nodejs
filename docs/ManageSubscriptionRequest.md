# ManageSubscriptionRequest

Request body to manage a subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_id** | **string** | The unique ID which was used to create subscription. | [default to undefined]
**action** | **string** | Action to be performed on the subscription. Possible values - CANCEL, PAUSE, ACTIVATE, CHANGE_PLAN. | [default to undefined]
**action_details** | [**ManageSubscriptionRequestActionDetails**](ManageSubscriptionRequestActionDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ManageSubscriptionRequest } from 'cashfree-pg';

const instance: ManageSubscriptionRequest = {
    subscription_id,
    action,
    action_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
