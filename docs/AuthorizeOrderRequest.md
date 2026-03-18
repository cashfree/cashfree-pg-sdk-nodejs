# AuthorizeOrderRequest

Request to capture or void transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | Type of authorization to run. Can be one of \&#39;CAPTURE\&#39; , \&#39;VOID\&#39; | [optional] [default to undefined]
**amount** | **number** | The amount if you are running a \&#39;CAPTURE\&#39; | [optional] [default to undefined]

## Example

```typescript
import { AuthorizeOrderRequest } from 'cashfree-pg';

const instance: AuthorizeOrderRequest = {
    action,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
