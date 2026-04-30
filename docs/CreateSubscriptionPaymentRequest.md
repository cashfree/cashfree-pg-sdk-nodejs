# CreateSubscriptionPaymentRequest

The request to be passed for the create subscription payment API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_id** | **string** | A unique ID passed by merchant for identifying the subscription. | [default to undefined]
**subscription_session_id** | **string** | Session ID for the subscription. Required only for Auth. | [optional] [default to undefined]
**payment_id** | **string** | A unique ID passed by merchant for identifying the subscription payment. | [default to undefined]
**payment_amount** | **number** | The charge amount of the payment. Required in case of charge. | [optional] [default to undefined]
**payment_schedule_date** | **string** | The date on which the payment is scheduled to be processed. This field is required for UPI and CARD payment modes. Cashfree stores timestamps in IST, but you can provide them in a valid ISO 8601 time format. For IST this &#x60;2025-06-01T10:20:12+05:30&#x60; translates to &#x60;2025-06-01 10:20:12&#x60;. For UTC this &#x60;2025-06-01T10:20:12Z&#x60; translates to &#x60;2025-06-01 15:50:12+05:30&#x60;.   Please note that only the date component is considered. Any time value provided will be ignored. | [optional] [default to undefined]
**payment_remarks** | **string** | Payment remarks. | [optional] [default to undefined]
**payment_type** | **string** | Payment type. Can be AUTH or CHARGE. | [default to undefined]
**payment_method** | [**CreateSubscriptionPaymentRequestPaymentMethod**](CreateSubscriptionPaymentRequestPaymentMethod.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateSubscriptionPaymentRequest } from 'cashfree-pg';

const instance: CreateSubscriptionPaymentRequest = {
    subscription_id,
    subscription_session_id,
    payment_id,
    payment_amount,
    payment_schedule_date,
    payment_remarks,
    payment_type,
    payment_method,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
