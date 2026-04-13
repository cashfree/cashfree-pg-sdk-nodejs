# PayOrderRequest

Complete object for the pay api that uses payment method objects

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_session_id** | **string** |  | [default to undefined]
**payment_method** | [**PayOrderRequestPaymentMethod**](PayOrderRequestPaymentMethod.md) |  | [default to undefined]
**save_instrument** | **boolean** |  | [optional] [default to undefined]
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
