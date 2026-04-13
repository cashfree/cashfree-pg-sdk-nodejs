# CartDetails

The cart details that are necessary like shipping address, billing address and more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_note** | **string** |  | [optional] [default to undefined]
**shipping_charge** | **number** |  | [optional] [default to undefined]
**cart_name** | **string** | Name of the cart. | [optional] [default to undefined]
**customer_shipping_address** | [**CartAddress**](CartAddress.md) |  | [optional] [default to undefined]
**customer_billing_address** | [**CartAddress**](CartAddress.md) |  | [optional] [default to undefined]
**cart_items** | [**Array&lt;CartItem&gt;**](CartItem.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CartDetails } from 'cashfree-pg';

const instance: CartDetails = {
    customer_note,
    shipping_charge,
    cart_name,
    customer_shipping_address,
    customer_billing_address,
    cart_items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
