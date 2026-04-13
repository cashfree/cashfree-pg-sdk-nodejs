# OrderMetaPaymentMethodsFiltersFiltersCardSuffix

Allowed card suffixes for the order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | It accepts value of \&quot;ALLOW\&quot; and allows only those suffixes present in it\&#39;s neighbouring parameter \&quot;values\&quot; | [optional] [default to undefined]
**values** | **Array&lt;string&gt;** | List of card suffixes to be allowed for the order | [optional] [default to undefined]

## Example

```typescript
import { OrderMetaPaymentMethodsFiltersFiltersCardSuffix } from 'cashfree-pg';

const instance: OrderMetaPaymentMethodsFiltersFiltersCardSuffix = {
    action,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
