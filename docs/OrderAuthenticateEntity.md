# OrderAuthenticateEntity

Success response for submitting or resending OTP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cf_payment_id** | **string** | Cashfree payment ID for which this request was sent. | [optional] [default to undefined]
**action** | **string** | The action that was requested. | [optional] [default to undefined]
**authenticate_status** | **string** | Status of this action - will be either success or failed. If the action is success, you should still call [payment status API](https://www.cashfree.com/docs/api-reference/payments/latest/payments/get) to verify the final payment status. | [optional] [default to undefined]
**payment_message** | **string** | Human readable message which describes the status in more detail. | [optional] [default to undefined]

## Example

```typescript
import { OrderAuthenticateEntity } from 'cashfree-pg';

const instance: OrderAuthenticateEntity = {
    cf_payment_id,
    action,
    authenticate_status,
    payment_message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
