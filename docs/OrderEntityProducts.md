# OrderEntityProducts

Configurations for the products like One Click Checkout, Verify and Pay, if they are enabled for your account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**one_click_checkout** | [**ProductDetailsEntity**](ProductDetailsEntity.md) |  | [optional] [default to undefined]
**verify_pay** | [**ProductDetailsEntity**](ProductDetailsEntity.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderEntityProducts } from 'cashfree-pg';

const instance: OrderEntityProducts = {
    one_click_checkout,
    verify_pay,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
