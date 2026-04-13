# OrderAuthenticatePaymentRequest

OTP to be submitted for headless/native OTP

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**otp** | **string** | OTP to be submitted | [default to undefined]
**action** | **string** | The action for this workflow. Could be either SUBMIT_OTP or RESEND_OTP | [default to undefined]

## Example

```typescript
import { OrderAuthenticatePaymentRequest } from 'cashfree-pg';

const instance: OrderAuthenticatePaymentRequest = {
    otp,
    action,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
