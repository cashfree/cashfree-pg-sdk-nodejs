# CreateSubscriptionRefundRequest

Request body to create a subscription refund.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cf_payment_id** | **number** | Cashfree subscription payment reference number. | [optional] [default to undefined]
**subscription_id** | **string** | A unique ID passed by merchant for identifying the subscription. | [default to undefined]
**payment_id** | **string** | A unique ID passed by merchant for identifying the transaction. | [optional] [default to undefined]
**refund_id** | **string** | A unique ID passed by merchant for identifying the refund. | [default to undefined]
**refund_amount** | **number** | The amount to be refunded. Can be partial or full amount of the payment. | [default to undefined]
**refund_note** | **string** | Refund note. | [optional] [default to undefined]
**refund_speed** | **string** | Refund speed. Can be INSTANT or STANDARD. UPI supports only STANDARD refunds, Enach and Pnach supports only INSTANT refunds. | [optional] [default to undefined]

## Example

```typescript
import { CreateSubscriptionRefundRequest } from 'cashfree-pg';

const instance: CreateSubscriptionRefundRequest = {
    cf_payment_id,
    subscription_id,
    payment_id,
    refund_id,
    refund_amount,
    refund_note,
    refund_speed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
