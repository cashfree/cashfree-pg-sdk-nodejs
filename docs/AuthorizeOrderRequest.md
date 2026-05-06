# AuthorizeOrderRequest

Request to capture or void transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | Type of authorisation to run. Available options are &#x60;CAPTURE&#x60;, &#x60;VOID&#x60;. | [default to undefined]
**amount** | **number** | The amount you want to capture. This is required only when action is &#x60;CAPTURE&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { AuthorizeOrderRequest } from 'cashfree-pg';

const instance: AuthorizeOrderRequest = {
    action,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
