# SubscriptionPaymentRefundEntity

Get/Create Subscription Payment Refund Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **string** | A unique ID passed by merchant for identifying the transaction. | [optional] [default to undefined]
**cf_payment_id** | **string** | Cashfree subscription payment reference number. | [optional] [default to undefined]
**refund_id** | **string** | A unique ID passed by merchant for identifying the refund. | [optional] [default to undefined]
**cf_refund_id** | **string** | Cashfree subscription payment refund reference number. | [optional] [default to undefined]
**refund_amount** | **number** | The refund amount. | [optional] [default to undefined]
**refund_note** | **string** | Refund note. | [optional] [default to undefined]
**refund_speed** | **string** | Refund speed. Can be INSTANT or NORMAL. | [optional] [default to undefined]
**refund_status** | **string** | Status of the refund. | [optional] [default to undefined]

## Example

```typescript
import { SubscriptionPaymentRefundEntity } from 'cashfree-pg';

const instance: SubscriptionPaymentRefundEntity = {
    payment_id,
    cf_payment_id,
    refund_id,
    cf_refund_id,
    refund_amount,
    refund_note,
    refund_speed,
    refund_status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
