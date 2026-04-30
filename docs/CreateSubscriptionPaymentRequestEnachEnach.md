# CreateSubscriptionPaymentRequestEnachEnach


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_bank_code** | **string** | Account bank code (mandatory). Consists of the first four alphabetic characters of the IFSC. | [optional] [default to undefined]
**account_holder_name** | **string** | Account holder name. | [optional] [default to undefined]
**account_ifsc** | **string** | Account IFSC (optional). Complete 11-character alphanumeric code. | [optional] [default to undefined]
**account_number** | **string** | Account number. | [optional] [default to undefined]
**account_type** | **string** | Account type. | [optional] [default to undefined]
**auth_mode** | **string** | Authentication mode. can be &#x60;debit_card&#x60;, &#x60;aadhaar&#x60;, or &#x60;net_banking&#x60;. | [optional] [default to undefined]
**channel** | **string** | Channel. can be link. | [optional] [default to undefined]

## Example

```typescript
import { CreateSubscriptionPaymentRequestEnachEnach } from 'cashfree-pg';

const instance: CreateSubscriptionPaymentRequestEnachEnach = {
    account_bank_code,
    account_holder_name,
    account_ifsc,
    account_number,
    account_type,
    auth_mode,
    channel,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
