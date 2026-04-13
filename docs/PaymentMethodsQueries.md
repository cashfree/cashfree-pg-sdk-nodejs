# PaymentMethodsQueries

Payment Method Query Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the order. | [optional] [default to undefined]
**order_id** | **string** | OrderId of the order. Either of &#x60;order_id&#x60; or &#x60;order_amount&#x60; is mandatory. | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodsQueries } from 'cashfree-pg';

const instance: PaymentMethodsQueries = {
    amount,
    order_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
