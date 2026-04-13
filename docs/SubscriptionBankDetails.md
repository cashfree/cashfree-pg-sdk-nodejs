# SubscriptionBankDetails

Bank details object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_id** | **string** | ID of the bank. | [optional] [default to undefined]
**bank_name** | **string** | Name of the bank. | [optional] [default to undefined]
**account_auth_modes** | **Array&lt;string&gt;** | List of account authentication modes supported by the bank. (e.g. DEBIT_CARD, NET_BANKING, AADHAAR) | [optional] [default to undefined]

## Example

```typescript
import { SubscriptionBankDetails } from 'cashfree-pg';

const instance: SubscriptionBankDetails = {
    bank_id,
    bank_name,
    account_auth_modes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
