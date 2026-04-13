# SubscriptionEntity

The response returned for Get, Create or Manage Subscription APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorisation_details** | [**AuthorizationDetails**](AuthorizationDetails.md) |  | [optional] [default to undefined]
**cf_subscription_id** | **string** | Cashfree subscription reference number | [optional] [default to undefined]
**customer_details** | [**SubscriptionCustomerDetails**](SubscriptionCustomerDetails.md) |  | [optional] [default to undefined]
**plan_details** | [**PlanEntity**](PlanEntity.md) |  | [optional] [default to undefined]
**subscription_expiry_time** | **string** | Time at which the subscription will expire. | [optional] [default to undefined]
**subscription_first_charge_time** | **string** | Time at which the first charge will be made for the subscription. Applicable only for PERIODIC plans. | [optional] [default to undefined]
**subscription_id** | **string** | A unique ID passed by merchant for identifying the subscription. | [optional] [default to undefined]
**subscription_meta** | [**SubscriptionEntitySubscriptionMeta**](SubscriptionEntitySubscriptionMeta.md) |  | [optional] [default to undefined]
**subscription_note** | **string** | Note for the subscription. | [optional] [default to undefined]
**subscription_session_id** | **string** | Subscription Session Id. | [optional] [default to undefined]
**subscription_payment_splits** | [**Array&lt;SubscriptionPaymentSplitItem&gt;**](SubscriptionPaymentSplitItem.md) | Payment splits for the subscription. | [optional] [default to undefined]
**subscription_status** | **string** | Status of the subscription. | [optional] [default to undefined]
**subscription_tags** | **object** | Tags for the subscription. | [optional] [default to undefined]

## Example

```typescript
import { SubscriptionEntity } from 'cashfree-pg';

const instance: SubscriptionEntity = {
    authorisation_details,
    cf_subscription_id,
    customer_details,
    plan_details,
    subscription_expiry_time,
    subscription_first_charge_time,
    subscription_id,
    subscription_meta,
    subscription_note,
    subscription_session_id,
    subscription_payment_splits,
    subscription_status,
    subscription_tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
