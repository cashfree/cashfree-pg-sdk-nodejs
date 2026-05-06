# OrderAuthenticatePaymentRequest

To use this API, Native OTP needs to be enabled for your account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**otp** | **string** | OTP collected from the customer. Mandatory only when action is SUBMIT_OTP. | [optional] [default to undefined]
**action** | **string** | Action intended for this request - can be SUBMIT_OTP or RESEND_OTP. | [default to undefined]

## Example

```typescript
import { OrderAuthenticatePaymentRequest } from 'cashfree-pg';

const instance: OrderAuthenticatePaymentRequest = {
    otp,
    action,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
