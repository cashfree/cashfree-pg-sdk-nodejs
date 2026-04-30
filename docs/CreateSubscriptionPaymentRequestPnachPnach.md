# CreateSubscriptionPaymentRequestPnachPnach


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_bank_code** | **string** | Account bank code. Consists of the first four alphabetic characters of the IFSC. | [optional] [default to undefined]
**account_holder_name** | **string** | Account holder name. | [optional] [default to undefined]
**account_ifsc** | **string** | Account IFSC. Complete 11-character alphanumeric code. | [optional] [default to undefined]
**account_number** | **string** | Account number. | [optional] [default to undefined]
**account_type** | **string** | Account type. | [optional] [default to undefined]
**channel** | **string** | Channel. can be post. | [optional] [default to undefined]
**mandate_creation_date** | **string** | Mandate creation date. | [optional] [default to undefined]
**mandate_start_date** | **string** | Mandate start date. | [optional] [default to undefined]

## Example

```typescript
import { CreateSubscriptionPaymentRequestPnachPnach } from 'cashfree-pg';

const instance: CreateSubscriptionPaymentRequestPnachPnach = {
    account_bank_code,
    account_holder_name,
    account_ifsc,
    account_number,
    account_type,
    channel,
    mandate_creation_date,
    mandate_start_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
