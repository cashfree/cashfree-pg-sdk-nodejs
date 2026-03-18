# OrderMetaOfferFilters

Allow or deny specific offers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | Defines whether to allow or deny the specified offers. | [optional] [default to undefined]
**values** | **Array&lt;string&gt;** | List of offer identifiers. | [optional] [default to undefined]

## Example

```typescript
import { OrderMetaOfferFilters } from 'cashfree-pg';

const instance: OrderMetaOfferFilters = {
    action,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
