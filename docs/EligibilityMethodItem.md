# EligibilityMethodItem

Eligibile payment method object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eligibility** | **boolean** | Indicates whether the payment method is eligible. | [optional] [default to undefined]
**entity_type** | **string** | Type of entity (e.g., \&quot;payment_methods\&quot;). | [optional] [default to undefined]
**entity_value** | **string** | Payment method (e.g., enach, pnach, upi, card). | [optional] [default to undefined]
**entity_details** | [**EligibilityMethodItemEntityDetails**](EligibilityMethodItemEntityDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EligibilityMethodItem } from 'cashfree-pg';

const instance: EligibilityMethodItem = {
    eligibility,
    entity_type,
    entity_value,
    entity_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
