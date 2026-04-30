# OrderPaymentMethodFilters

Filters for this order. Card bins, card schemes, card issuing bank and card suffixes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_emi_tenure** | **number** | Allowed card EMI tenure for the order. | [optional] [default to undefined]
**card_emi_bins** | **Array&lt;number&gt;** | Allowed card EMI bins for the order. | [optional] [default to undefined]
**card_emi_schemes** | **Array&lt;string&gt;** | Allowed card EMI schemes for the order. | [optional] [default to undefined]
**card_emi_suffix** | **Array&lt;number&gt;** | Allowed card EMI suffixes for the order. | [optional] [default to undefined]
**card_emi_issuing_bank** | **Array&lt;string&gt;** | Allowed card EMI issuing bank for the order. | [optional] [default to undefined]
**card_bins** | **Array&lt;number&gt;** | Allowed card bins for the order. | [optional] [default to undefined]
**card_schemes** | **Array&lt;string&gt;** | Allowed card schemes for the order. | [optional] [default to undefined]
**card_suffix** | **Array&lt;number&gt;** | Allowed card suffixes for the order. | [optional] [default to undefined]
**card_issuing_bank** | **Array&lt;string&gt;** | Allowed card issuing bank for the order. | [optional] [default to undefined]

## Example

```typescript
import { OrderPaymentMethodFilters } from 'cashfree-pg';

const instance: OrderPaymentMethodFilters = {
    card_emi_tenure,
    card_emi_bins,
    card_emi_schemes,
    card_emi_suffix,
    card_emi_issuing_bank,
    card_bins,
    card_schemes,
    card_suffix,
    card_issuing_bank,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
