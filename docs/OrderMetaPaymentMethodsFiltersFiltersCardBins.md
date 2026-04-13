# OrderMetaPaymentMethodsFiltersFiltersCardBins

Allowed card bins for the order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | It accepts value of \&quot;ALLOW\&quot; and allows only those bins present in it\&#39;s neighbouring parameter \&quot;values\&quot; | [optional] [default to undefined]
**values** | **Array&lt;string&gt;** | List of card bins to be allowed for the order | [optional] [default to undefined]

## Example

```typescript
import { OrderMetaPaymentMethodsFiltersFiltersCardBins } from 'cashfree-pg';

const instance: OrderMetaPaymentMethodsFiltersFiltersCardBins = {
    action,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
