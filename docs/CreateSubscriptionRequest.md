# CreateSubscriptionRequest

Request body to create a new subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_id** | **string** | A unique ID for the subscription. It can include alphanumeric characters, underscore, dot, hyphen, and space. Maximum characters allowed is 250. | [default to undefined]
**customer_details** | [**SubscriptionCustomerDetails**](SubscriptionCustomerDetails.md) |  | [default to undefined]
**plan_details** | [**CreateSubscriptionRequestPlanDetails**](CreateSubscriptionRequestPlanDetails.md) |  | [default to undefined]
**authorization_details** | [**CreateSubscriptionRequestAuthorizationDetails**](CreateSubscriptionRequestAuthorizationDetails.md) |  | [optional] [default to undefined]
**subscription_meta** | [**CreateSubscriptionRequestSubscriptionMeta**](CreateSubscriptionRequestSubscriptionMeta.md) |  | [optional] [default to undefined]
**subscription_expiry_time** | **string** | Expiry date for the subscription. | [optional] [default to undefined]
**subscription_first_charge_time** | **string** | Time at which the first charge will be made for the subscription after authorization. Applicable only for PERIODIC plans. | [optional] [default to undefined]
**subscription_note** | **string** | Note for the subscription. | [optional] [default to undefined]
**subscription_tags** | **object** | Tags for the subscription. | [optional] [default to undefined]
**subscription_payment_splits** | [**Array&lt;SubscriptionPaymentSplitItem&gt;**](SubscriptionPaymentSplitItem.md) | Payment splits for the subscription. | [optional] [default to undefined]

## Example

```typescript
import { CreateSubscriptionRequest } from 'cashfree-pg';

const instance: CreateSubscriptionRequest = {
    subscription_id,
    customer_details,
    plan_details,
    authorization_details,
    subscription_meta,
    subscription_expiry_time,
    subscription_first_charge_time,
    subscription_note,
    subscription_tags,
    subscription_payment_splits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
