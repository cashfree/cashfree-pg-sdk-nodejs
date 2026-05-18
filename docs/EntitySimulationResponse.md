# EntitySimulationResponse

Entity simulation contains payment_status and payment_error_code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_status** | **string** | Payment status. | [default to undefined]
**payment_error_code** | **string** | Payment error code. | [optional] [default to undefined]

## Example

```typescript
import { EntitySimulationResponse } from 'cashfree-pg';

const instance: EntitySimulationResponse = {
    payment_status,
    payment_error_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
