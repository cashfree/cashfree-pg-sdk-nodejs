# ManageSubscriptionRequestActionDetails

Details of the action to be performed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_scheduled_time** | **string** | Next scheduled time for the action. Required for ACTIVATE action. | [optional] [default to undefined]
**plan_id** | **string** | Plan ID to update. Required for CHANGE_PLAN action. | [optional] [default to undefined]

## Example

```typescript
import { ManageSubscriptionRequestActionDetails } from 'cashfree-pg';

const instance: ManageSubscriptionRequestActionDetails = {
    next_scheduled_time,
    plan_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
