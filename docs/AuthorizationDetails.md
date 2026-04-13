# AuthorizationDetails

Details of the authorization done for the subscription. Returned in Get subscription and auth payments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_amount** | **number** | Authorization amount for the auth payment. | [optional] [default to undefined]
**authorization_amount_refund** | **boolean** | Indicates whether the authorization amount should be refunded to the customer automatically. Merchants can use this field to specify if the authorized funds should be returned to the customer after authorization of the subscription. | [optional] [default to undefined]
**authorization_reference** | **string** | Authorization reference. UMN for UPI, UMRN for EMandate/Physical Mandate and Enrollment ID for cards. | [optional] [default to undefined]
**authorization_time** | **string** | Authorization time. | [optional] [default to undefined]
**authorization_status** | **string** | Status of the authorization. | [optional] [default to undefined]
**payment_id** | **string** | A unique ID passed by merchant for identifying the transaction. | [optional] [default to undefined]
**payment_method** | **string** | Payment method used for the authorization. | [optional] [default to undefined]

## Example

```typescript
import { AuthorizationDetails } from 'cashfree-pg';

const instance: AuthorizationDetails = {
    authorization_amount,
    authorization_amount_refund,
    authorization_reference,
    authorization_time,
    authorization_status,
    payment_id,
    payment_method,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
