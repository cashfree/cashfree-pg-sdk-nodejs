# ApiError

Error at cashfree\'s server

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** |  | [optional] [default to undefined]
**code** | **string** |  | [optional] [default to undefined]
**help** | **string** |  | [optional] [default to undefined]
**type** | **string** | api_error | [optional] [default to undefined]

## Example

```typescript
import { ApiError } from 'cashfree-pg';

const instance: ApiError = {
    message,
    code,
    help,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
