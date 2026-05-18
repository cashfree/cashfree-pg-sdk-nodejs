# AuthResponseUpi

Payment method upi.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | Can be link, qrcode, or collect. | [optional] [default to undefined]
**upi_id** | **string** | Virtual payment address (UPI ID) of the user. | [optional] [default to undefined]
**upi_instrument** | **string** | UPI instrument used for payment. | [optional] [default to undefined]
**upi_instrument_number** | **string** | Unique number representing the UPI instrument. | [optional] [default to undefined]
**upi_payer_account_number** | **string** | Account number of the UPI payer. | [optional] [default to undefined]
**upi_payer_ifsc** | **string** | IFSC code of the UPI payer\&#39;s bank. | [optional] [default to undefined]

## Example

```typescript
import { AuthResponseUpi } from 'cashfree-pg';

const instance: AuthResponseUpi = {
    channel,
    upi_id,
    upi_instrument,
    upi_instrument_number,
    upi_payer_account_number,
    upi_payer_ifsc,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
