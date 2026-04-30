# PayOrderAuthorizeOnlyRequestAuthorizationData

Details required for authorization, received in authentication response from processor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_token** | **string** |  | [optional] [default to undefined]
**directory_server_transaction_id** | **string** |  | [optional] [default to undefined]
**three_ds_server_transaction_id** | **string** |  | [optional] [default to undefined]
**eci** | **string** |  | [optional] [default to undefined]
**token_number** | **string** |  | [optional] [default to undefined]
**token_expiry_year** | **string** |  | [optional] [default to undefined]
**token_expiry_month** | **string** |  | [optional] [default to undefined]
**token_cryptogram** | **string** |  | [optional] [default to undefined]
**transaction_type** | **string** | One of ALT_ID, TOKEN, APPLE_PAY, Indicator for authentication mode. | [optional] [default to undefined]

## Example

```typescript
import { PayOrderAuthorizeOnlyRequestAuthorizationData } from 'cashfree-pg';

const instance: PayOrderAuthorizeOnlyRequestAuthorizationData = {
    authentication_token,
    directory_server_transaction_id,
    three_ds_server_transaction_id,
    eci,
    token_number,
    token_expiry_year,
    token_expiry_month,
    token_cryptogram,
    transaction_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
