# RateLimitError

Error when rate limit is breached for your api

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** |  | [optional] [default to undefined]
**code** | **string** |  | [optional] [default to undefined]
**type** | **string** | rate_limit_error | [optional] [default to undefined]

## Example

```typescript
import { RateLimitError } from 'cashfree-pg';

const instance: RateLimitError = {
    message,
    code,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
