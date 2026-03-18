# AuthorizationDetailsPaymentMethod

Payment method used for the authorization. Can be one of [\"upi\", \"enach\", \"pnach\", \"card\"]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | Can be link. | [optional] [default to undefined]
**upi_id** | **string** |  | [optional] [default to undefined]
**upi_instrument** | **string** |  | [optional] [default to undefined]
**upi_instrument_number** | **string** |  | [optional] [default to undefined]
**upi_payer_account_number** | **string** |  | [optional] [default to undefined]
**upi_payer_ifsc** | **string** |  | [optional] [default to undefined]
**auth_mode** | **string** | Auth mode. Can be debit_card, aadhaar, or net_banking. | [optional] [default to undefined]
**account_type** | **string** |  | [optional] [default to undefined]
**account_number** | **string** |  | [optional] [default to undefined]
**account_ifsc** | **string** |  | [optional] [default to undefined]
**account_holder_name** | **string** |  | [optional] [default to undefined]
**account_bank_code** | **string** |  | [optional] [default to undefined]
**mandate_creation_date** | **string** |  | [optional] [default to undefined]
**mandate_start_date** | **string** |  | [optional] [default to undefined]
**card_number** | **string** | Card number | [optional] [default to undefined]
**card_network** | **string** | Card network | [optional] [default to undefined]
**card_type** | **string** | Card type (e.g., credit_card) | [optional] [default to undefined]
**card_sub_type** | **string** | Card subtype (e.g., R) | [optional] [default to undefined]
**card_country** | **string** | Country of the card (e.g., IN) | [optional] [default to undefined]
**card_bank_name** | **string** | Bank name on card | [optional] [default to undefined]
**card_network_reference_id** | **string** | Network reference ID | [optional] [default to undefined]
**instrument_id** | **string** | Unique identifier for card instrument | [optional] [default to undefined]

## Example

```typescript
import { AuthorizationDetailsPaymentMethod } from 'cashfree-pg';

const instance: AuthorizationDetailsPaymentMethod = {
    channel,
    upi_id,
    upi_instrument,
    upi_instrument_number,
    upi_payer_account_number,
    upi_payer_ifsc,
    auth_mode,
    account_type,
    account_number,
    account_ifsc,
    account_holder_name,
    account_bank_code,
    mandate_creation_date,
    mandate_start_date,
    card_number,
    card_network,
    card_type,
    card_sub_type,
    card_country,
    card_bank_name,
    card_network_reference_id,
    instrument_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
