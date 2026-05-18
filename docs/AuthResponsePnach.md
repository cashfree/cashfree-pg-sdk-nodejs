# AuthResponsePnach

Payment method pnach.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | Channel. Can be post. | [optional] [default to undefined]
**mandate_creation_date** | **string** | Date on which the mandate was created. Cashfree stores timestamps in IST. | [optional] [default to undefined]
**mandate_start_date** | **string** | Start date of the mandate. Cashfree stores timestamps in IST. | [optional] [default to undefined]
**account_type** | **string** | Type of the bank account. | [optional] [default to undefined]
**account_number** | **string** | Bank account number. | [optional] [default to undefined]
**account_ifsc** | **string** | IFSC code of the bank account. | [optional] [default to undefined]
**account_holder_name** | **string** | Name of the account holder. | [optional] [default to undefined]
**account_bank_code** | **string** | Bank code of the account-holding bank. | [optional] [default to undefined]

## Example

```typescript
import { AuthResponsePnach } from 'cashfree-pg';

const instance: AuthResponsePnach = {
    channel,
    mandate_creation_date,
    mandate_start_date,
    account_type,
    account_number,
    account_ifsc,
    account_holder_name,
    account_bank_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
