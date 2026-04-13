# SubscriptionEligibilityRequestFilters

Filters to refine eligible payment method selection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_methods** | **Array&lt;string&gt;** | Possbile values in array - enach, pnach, upi, card. | [optional] [default to undefined]

## Example

```typescript
import { SubscriptionEligibilityRequestFilters } from 'cashfree-pg';

const instance: SubscriptionEligibilityRequestFilters = {
    payment_methods,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
