# AuthResponseEnach

Payment method enach.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | Channel. Can be link. | [optional] [default to undefined]
**auth_mode** | **string** | Auth mode. Can be debit_card, aadhaar, or net_banking. | [optional] [default to undefined]
**account_type** | **string** | Type of the bank account. | [optional] [default to undefined]
**account_number** | **string** | Bank account number. | [optional] [default to undefined]
**account_ifsc** | **string** | IFSC code of the bank account. | [optional] [default to undefined]
**account_holder_name** | **string** | Name of the account holder. | [optional] [default to undefined]
**account_bank_code** | **string** | Bank code of the account-holding bank. | [optional] [default to undefined]

## Example

```typescript
import { AuthResponseEnach } from 'cashfree-pg';

const instance: AuthResponseEnach = {
    channel,
    auth_mode,
    account_type,
    account_number,
    account_ifsc,
    account_holder_name,
    account_bank_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
