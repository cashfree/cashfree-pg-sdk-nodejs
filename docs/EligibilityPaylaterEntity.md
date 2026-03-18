# EligibilityPaylaterEntity

Eligible paylater payment method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eligibility** | **boolean** |  | [optional] [default to undefined]
**entity_type** | **string** |  | [optional] [default to undefined]
**entity_value** | **string** |  | [optional] [default to undefined]
**entity_details** | [**PaylaterEntity**](PaylaterEntity.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EligibilityPaylaterEntity } from 'cashfree-pg';

const instance: EligibilityPaylaterEntity = {
    eligibility,
    entity_type,
    entity_value,
    entity_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
