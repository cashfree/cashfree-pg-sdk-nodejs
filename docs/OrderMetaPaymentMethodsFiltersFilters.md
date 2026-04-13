# OrderMetaPaymentMethodsFiltersFilters

This object takes details of all the filtering that has to be done for this order. Filters on card bins, card schemes, card issuing bank and card suffixes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_bins** | [**OrderMetaPaymentMethodsFiltersFiltersCardBins**](OrderMetaPaymentMethodsFiltersFiltersCardBins.md) |  | [optional] [default to undefined]
**card_schemes** | [**OrderMetaPaymentMethodsFiltersFiltersCardSchemes**](OrderMetaPaymentMethodsFiltersFiltersCardSchemes.md) |  | [optional] [default to undefined]
**card_suffix** | [**OrderMetaPaymentMethodsFiltersFiltersCardSuffix**](OrderMetaPaymentMethodsFiltersFiltersCardSuffix.md) |  | [optional] [default to undefined]
**card_issuing_bank** | [**OrderMetaPaymentMethodsFiltersFiltersCardIssuingBank**](OrderMetaPaymentMethodsFiltersFiltersCardIssuingBank.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderMetaPaymentMethodsFiltersFilters } from 'cashfree-pg';

const instance: OrderMetaPaymentMethodsFiltersFilters = {
    card_bins,
    card_schemes,
    card_suffix,
    card_issuing_bank,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
