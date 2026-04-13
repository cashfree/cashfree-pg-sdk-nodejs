# CreateSubscriptionPaymentResponse

The response returned is Create Subscription Auth or Charge APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cf_payment_id** | **string** | Cashfree subscription payment reference number | [optional] [default to undefined]
**failure_details** | [**SubscriptionPaymentEntityFailureDetails**](SubscriptionPaymentEntityFailureDetails.md) |  | [optional] [default to undefined]
**payment_amount** | **number** | The charge amount of the payment. | [optional] [default to undefined]
**payment_id** | **string** | A unique ID passed by merchant for identifying the transaction. | [optional] [default to undefined]
**payment_initiated_date** | **string** | The date on which the payment was initiated. | [optional] [default to undefined]
**payment_status** | **string** | Status of the payment. | [optional] [default to undefined]
**payment_type** | **string** | Payment type. Can be AUTH or CHARGE. | [optional] [default to undefined]
**subscription_id** | **string** | A unique ID passed by merchant for identifying the subscription. | [optional] [default to undefined]
**data** | **object** | Contains a payload for auth app links in case of AUTH. For charge, the payload is empty. | [optional] [default to undefined]
**payment_method** | **string** | Payment method used for the authorization. | [optional] [default to undefined]

## Example

```typescript
import { CreateSubscriptionPaymentResponse } from 'cashfree-pg';

const instance: CreateSubscriptionPaymentResponse = {
    cf_payment_id,
    failure_details,
    payment_amount,
    payment_id,
    payment_initiated_date,
    payment_status,
    payment_type,
    subscription_id,
    data,
    payment_method,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
