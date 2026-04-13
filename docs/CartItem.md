# CartItem

Each item in the cart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **string** | Unique identifier of the item | [optional] [default to undefined]
**item_name** | **string** | Name of the item | [optional] [default to undefined]
**item_description** | **string** | Description of the item | [optional] [default to undefined]
**item_tags** | **Array&lt;string&gt;** | Tags attached to that item | [optional] [default to undefined]
**item_details_url** | **string** | Item details url | [optional] [default to undefined]
**item_image_url** | **string** | Item image url | [optional] [default to undefined]
**item_original_unit_price** | **number** | Original price | [optional] [default to undefined]
**item_discounted_unit_price** | **number** | Discounted Price | [optional] [default to undefined]
**item_currency** | **string** | Currency of the item. | [optional] [default to undefined]
**item_quantity** | **number** | Quantity if that item | [optional] [default to undefined]

## Example

```typescript
import { CartItem } from 'cashfree-pg';

const instance: CartItem = {
    item_id,
    item_name,
    item_description,
    item_tags,
    item_details_url,
    item_image_url,
    item_original_unit_price,
    item_discounted_unit_price,
    item_currency,
    item_quantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
