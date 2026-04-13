# OrderMetaPaymentMethodsFilters

Allowed payment modes for this order. Along with multiple filters for cards can be added to this key. And this filtering will be honoured during transaction creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**methods** | [**OrderMetaPaymentMethodsFiltersMethods**](OrderMetaPaymentMethodsFiltersMethods.md) |  | [optional] [default to undefined]
**filters** | [**OrderMetaPaymentMethodsFiltersFilters**](OrderMetaPaymentMethodsFiltersFilters.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderMetaPaymentMethodsFilters } from 'cashfree-pg';

const instance: OrderMetaPaymentMethodsFilters = {
    methods,
    filters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
