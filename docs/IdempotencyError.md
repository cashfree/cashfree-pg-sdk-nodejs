# IdempotencyError

Error when idempotency fails. Different request body with the same idempotent key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** |  | [optional] [default to undefined]
**help** | **string** |  | [optional] [default to undefined]
**code** | **string** |  | [optional] [default to undefined]
**type** | **string** | idempotency_error | [optional] [default to undefined]

## Example

```typescript
import { IdempotencyError } from 'cashfree-pg';

const instance: IdempotencyError = {
    message,
    help,
    code,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
