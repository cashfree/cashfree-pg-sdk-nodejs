# SubscriptionPaymentEntity

The response returned in Get, Create or Manage Subscription Payment APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_details** | [**AuthorizationDetails**](AuthorizationDetails.md) |  | [optional] [default to undefined]
**cf_payment_id** | **string** | Cashfree subscription payment reference number | [optional] [default to undefined]
**cf_subscription_id** | **string** | Cashfree subscription reference number | [optional] [default to undefined]
**cf_txn_id** | **string** | Cashfree subscription payment transaction ID | [optional] [default to undefined]
**cf_order_id** | **string** | Cashfree subscription payment order ID | [optional] [default to undefined]
**failure_details** | [**SubscriptionPaymentEntityFailureDetails**](SubscriptionPaymentEntityFailureDetails.md) |  | [optional] [default to undefined]
**payment_amount** | **number** | The charge amount of the payment. | [optional] [default to undefined]
**payment_id** | **string** | A unique ID passed by merchant for identifying the transaction. | [optional] [default to undefined]
**payment_initiated_date** | **string** | The date on which the payment was initiated. | [optional] [default to undefined]
**payment_remarks** | **string** | Payment remarks. | [optional] [default to undefined]
**payment_schedule_date** | **string** | The date on which the payment is scheduled to be processed. | [optional] [default to undefined]
**payment_status** | **string** | Status of the payment. | [optional] [default to undefined]
**payment_type** | **string** | Payment type. Can be AUTH or CHARGE. | [optional] [default to undefined]
**retry_attempts** | **number** | Retry attempts. | [optional] [default to undefined]
**subscription_id** | **string** | A unique ID passed by merchant for identifying the subscription. | [optional] [default to undefined]

## Example

```typescript
import { SubscriptionPaymentEntity } from 'cashfree-pg';

const instance: SubscriptionPaymentEntity = {
    authorization_details,
    cf_payment_id,
    cf_subscription_id,
    cf_txn_id,
    cf_order_id,
    failure_details,
    payment_amount,
    payment_id,
    payment_initiated_date,
    payment_remarks,
    payment_schedule_date,
    payment_status,
    payment_type,
    retry_attempts,
    subscription_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
