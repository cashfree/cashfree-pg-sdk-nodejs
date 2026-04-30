# PayOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_session_id** | **string** | Unique identifier for the payment session, returned in the response of the Create Order API. | [default to undefined]
**payment_method** | [**PayOrderRequestPaymentMethod**](PayOrderRequestPaymentMethod.md) |  | [default to undefined]
**save_instrument** | **boolean** | Send as **true** if the customer has given consent to save or tokenise the card; otherwise, send as false. | [optional] [default to undefined]
**offer_id** | **string** | This is required if any offers needs to be applied to the order. | [optional] [default to undefined]

## Example

```typescript
import { PayOrderRequest } from 'cashfree-pg';

const instance: PayOrderRequest = {
    payment_session_id,
    payment_method,
    save_instrument,
    offer_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
