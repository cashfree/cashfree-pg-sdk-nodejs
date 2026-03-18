# PaymentWebhookErrorEntity

error details present in the webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **string** |  | [optional] [default to undefined]
**error_description** | **string** |  | [optional] [default to undefined]
**error_reason** | **string** |  | [optional] [default to undefined]
**error_source** | **string** |  | [optional] [default to undefined]
**error_code_raw** | **string** |  | [optional] [default to undefined]
**error_description_raw** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentWebhookErrorEntity } from 'cashfree-pg';

const instance: PaymentWebhookErrorEntity = {
    error_code,
    error_description,
    error_reason,
    error_source,
    error_code_raw,
    error_description_raw,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
