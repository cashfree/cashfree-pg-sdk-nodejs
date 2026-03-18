# ExtendedCartDetails

The cart details that are necessary like shipping address, billing address and more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the cart. | [optional] [default to undefined]
**items** | [**Array&lt;CartItem&gt;**](CartItem.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExtendedCartDetails } from 'cashfree-pg';

const instance: ExtendedCartDetails = {
    name,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
