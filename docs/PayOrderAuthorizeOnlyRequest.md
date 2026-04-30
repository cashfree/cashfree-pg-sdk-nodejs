# PayOrderAuthorizeOnlyRequest

Complete object for the authorize only api that uses authorization data object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_session_id** | **string** |  | [default to undefined]
**authorization_data** | [**PayOrderAuthorizeOnlyRequestAuthorizationData**](PayOrderAuthorizeOnlyRequestAuthorizationData.md) |  | [default to undefined]

## Example

```typescript
import { PayOrderAuthorizeOnlyRequest } from 'cashfree-pg';

const instance: PayOrderAuthorizeOnlyRequest = {
    payment_session_id,
    authorization_data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
