# LinkSubscriptionEntity

Payment link subscription object for recurring payments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_details** | [**LinkPlanEntity**](LinkPlanEntity.md) |  | [optional] [default to undefined]
**authorization_amount_refund** | **boolean** | Indicates whether the authorization amount should be refunded to the customer automatically. Merchants can use this field to specify if the authorized funds should be returned to the customer after authorization of the subscription. | [optional] [default to undefined]
**subscription_expiry_time** | **string** | Time at which the subscription will expire. | [optional] [default to undefined]
**subscription_first_charge_time** | **string** | Time at which the first charge for the subscription will be processed. | [optional] [default to undefined]

## Example

```typescript
import { LinkSubscriptionEntity } from 'cashfree-pg';

const instance: LinkSubscriptionEntity = {
    plan_details,
    authorization_amount_refund,
    subscription_expiry_time,
    subscription_first_charge_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
