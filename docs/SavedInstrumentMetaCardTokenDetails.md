# SavedInstrumentMetaCardTokenDetails

Card token information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**par** | **string** | The [PAR (Primary Account Reference)](https://www.cashfree.com/docs/payments/features/payment-account-reference) for the plain card. | [optional] [default to undefined]
**expiry_month** | **string** | Token expiry month. | [optional] [default to undefined]
**expiry_year** | **string** | Token expiry year. | [optional] [default to undefined]

## Example

```typescript
import { SavedInstrumentMetaCardTokenDetails } from 'cashfree-pg';

const instance: SavedInstrumentMetaCardTokenDetails = {
    par,
    expiry_month,
    expiry_year,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
