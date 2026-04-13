# CreateSubscriptionRequestAuthorizationDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_amount** | **number** | Authorization amount for the auth payment. | [optional] [default to undefined]
**authorization_amount_refund** | **boolean** | Indicates whether the authorization amount should be refunded to the customer automatically. Merchants can use this field to specify if the authorized funds should be returned to the customer after authorization of the subscription. | [optional] [default to undefined]
**payment_methods** | **Array&lt;string&gt;** | Payment methods for the subscription. enach, pnach, upi, card are possible values. | [optional] [default to undefined]

## Example

```typescript
import { CreateSubscriptionRequestAuthorizationDetails } from 'cashfree-pg';

const instance: CreateSubscriptionRequestAuthorizationDetails = {
    authorization_amount,
    authorization_amount_refund,
    payment_methods,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
