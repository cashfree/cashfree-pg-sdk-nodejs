# ApiError502

Error when there is error at partner bank

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** |  | [optional] [default to undefined]
**help** | **string** |  | [optional] [default to undefined]
**code** | **string** | &#x60;bank_processing_failure&#x60; will be returned here to denote failure at bank.  | [optional] [default to undefined]
**type** | **string** | api_error | [optional] [default to undefined]

## Example

```typescript
import { ApiError502 } from 'cashfree-pg';

const instance: ApiError502 = {
    message,
    help,
    code,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
