# EligibilityFetchPaymentMethodsRequest

eligibilty request to find eligible payment method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queries** | [**PaymentMethodsQueries**](PaymentMethodsQueries.md) |  | [default to undefined]
**filters** | [**PaymentMethodsFilters**](PaymentMethodsFilters.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EligibilityFetchPaymentMethodsRequest } from 'cashfree-pg';

const instance: EligibilityFetchPaymentMethodsRequest = {
    queries,
    filters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
