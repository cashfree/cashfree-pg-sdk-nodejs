# AuthResponseUpi

Payment method upi.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | Can be link, qrcode, or collect. | [optional] [default to undefined]
**upi_id** | **string** |  | [optional] [default to undefined]
**upi_instrument** | **string** |  | [optional] [default to undefined]
**upi_instrument_number** | **string** |  | [optional] [default to undefined]
**upi_payer_account_number** | **string** |  | [optional] [default to undefined]
**upi_payer_ifsc** | **string** |  | [optional] [default to undefined]

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
