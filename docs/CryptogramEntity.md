# CryptogramEntity

Crytogram Card object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instrument_id** | **string** | instrument_id of saved instrument | [optional] [default to undefined]
**token_requestor_id** | **string** | TRID issued by card networks | [optional] [default to undefined]
**card_number** | **string** | token pan number | [optional] [default to undefined]
**card_expiry_mm** | **string** | token pan expiry month | [optional] [default to undefined]
**card_expiry_yy** | **string** | token pan expiry year | [optional] [default to undefined]
**cryptogram** | **string** | cryptogram | [optional] [default to undefined]
**card_display** | **string** | last 4 digits of original card number | [optional] [default to undefined]

## Example

```typescript
import { CryptogramEntity } from 'cashfree-pg';

const instance: CryptogramEntity = {
    instrument_id,
    token_requestor_id,
    card_number,
    card_expiry_mm,
    card_expiry_yy,
    cryptogram,
    card_display,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
