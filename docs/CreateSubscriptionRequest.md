# CreateSubscriptionRequest

Request parameters to create a new subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_id** | **string** | A unique ID for the subscription. It can include alphanumeric characters, underscore, dot, hyphen, and space. Maximum characters allowed is 250. | [default to undefined]
**customer_details** | [**SubscriptionCustomerDetails**](SubscriptionCustomerDetails.md) |  | [default to undefined]
**plan_details** | [**CreateSubscriptionRequestPlanDetails**](CreateSubscriptionRequestPlanDetails.md) |  | [default to undefined]
**authorization_details** | [**CreateSubscriptionRequestAuthorizationDetails**](CreateSubscriptionRequestAuthorizationDetails.md) |  | [optional] [default to undefined]
**subscription_meta** | [**CreateSubscriptionRequestSubscriptionMeta**](CreateSubscriptionRequestSubscriptionMeta.md) |  | [optional] [default to undefined]
**subscription_expiry_time** | **string** | Expiry date for the subscription. Cashfree stores timestamps in IST, but you can provide them in a valid ISO 8601 time format.  For IST this &#x60;2025-06-01T10:20:12+05:30&#x60; translates to &#x60;2025-06-01 10:20:12&#x60;    For UTC this &#x60;2025-06-01T10:20:12Z&#x60; translates to &#x60;2025-06-01 15:50:12+05:30&#x60;. | [optional] [default to undefined]
**subscription_first_charge_time** | **string** | Time at which the first charge will be made for the subscription after authorization. Applicable only for PERIODIC plans. Cashfree stores timestamps in IST, but you can provide them in a valid ISO 8601 time format.  For IST this &#x60;2025-06-01T10:20:12+05:30&#x60; translates to &#x60;2025-06-01 10:20:12&#x60;    For UTC this &#x60;2025-06-01T10:20:12Z&#x60; translates to &#x60;2025-06-01 15:50:12+05:30&#x60;. | [optional] [default to undefined]
**subscription_tags** | **object** | Custom tags for this subscription. You can include up to 10 entries as string key-value pairs. Use any key names that suit your integration. A commonly used key is psp_note, which sets the note displayed to the customer in their payment service provider (PSP) app or on their statement. When using psp_note, the value must be between 1 and 255 characters. | [optional] [default to undefined]
**subscription_payment_splits** | [**Array&lt;SubscriptionPaymentSplitItem&gt;**](SubscriptionPaymentSplitItem.md) | Payment splits for the subscription. | [optional] [default to undefined]
**cf_order_id** | **string** | Cashfree order ID for the subscription. | [optional] [default to undefined]

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
    subscription_tags,
    subscription_payment_splits,
    cf_order_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
