# ChargesEntity

Charges accociated with the order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipping_charges** | **number** | Shipping charge of the order | [optional] [default to undefined]
**cod_handling_charges** | **number** | COD handling fee for order | [optional] [default to undefined]

## Example

```typescript
import { ChargesEntity } from 'cashfree-pg';

const instance: ChargesEntity = {
    shipping_charges,
    cod_handling_charges,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
