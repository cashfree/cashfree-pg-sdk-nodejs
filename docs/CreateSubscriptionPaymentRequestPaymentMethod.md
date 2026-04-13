# CreateSubscriptionPaymentRequestPaymentMethod

Payment method. Can be one of [\"upi\", \"enach\", \"pnach\", \"card\"]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | Channel. can be link | [optional] [default to undefined]
**upi_id** | **string** |  | [optional] [default to undefined]
**account_bank_code** | **string** | Account bank code | [optional] [default to undefined]
**account_holder_name** | **string** | Account holder name | [optional] [default to undefined]
**account_ifsc** | **string** | Account IFSC | [optional] [default to undefined]
**account_number** | **string** | Account number | [optional] [default to undefined]
**account_type** | **string** | Account type | [optional] [default to undefined]
**auth_mode** | **string** | Authentication mode. can be debit_card, aadhaar, or net_banking | [optional] [default to undefined]
**mandate_creation_date** | **string** | Mandate creation date | [optional] [default to undefined]
**mandate_start_date** | **string** | Mandate start date | [optional] [default to undefined]
**card_cvv** | **string** | Card CVV | [optional] [default to undefined]
**card_expiry_mm** | **string** | Card expiry month | [optional] [default to undefined]
**card_expiry_yy** | **string** | Card expiry year | [optional] [default to undefined]
**card_holder_name** | **string** | Card holder name | [optional] [default to undefined]
**card_network** | **string** | Card network | [optional] [default to undefined]
**card_number** | **string** | Card number | [optional] [default to undefined]
**card_type** | **string** | Card type | [optional] [default to undefined]

## Example

```typescript
import { CreateSubscriptionPaymentRequestPaymentMethod } from 'cashfree-pg';

const instance: CreateSubscriptionPaymentRequestPaymentMethod = {
    channel,
    upi_id,
    account_bank_code,
    account_holder_name,
    account_ifsc,
    account_number,
    account_type,
    auth_mode,
    mandate_creation_date,
    mandate_start_date,
    card_cvv,
    card_expiry_mm,
    card_expiry_yy,
    card_holder_name,
    card_network,
    card_number,
    card_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
