# SubscriptionEligibilityRequest

Request body to fetch subscription eligibile payment method details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queries** | [**SubscriptionEligibilityRequestQueries**](SubscriptionEligibilityRequestQueries.md) |  | [default to undefined]
**filters** | [**SubscriptionEligibilityRequestFilters**](SubscriptionEligibilityRequestFilters.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SubscriptionEligibilityRequest } from 'cashfree-pg';

const instance: SubscriptionEligibilityRequest = {
    queries,
    filters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
