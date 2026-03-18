# PARRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_number** | **string** | Card number, between 15 and 19 digits. | [default to undefined]
**card_cvv** | **string** | Card CVV, 3 or 4 digits. | [default to undefined]
**card_expiry_mm** | **string** | Two-digit card expiry month (01-12). | [default to undefined]
**card_expiry_yy** | **string** | Two-digit card expiry year. | [default to undefined]
**card_type** | **string** | Card type; allowed value is PLAIN_CARD. | [default to undefined]

## Example

```typescript
import { PARRequest } from 'cashfree-pg';

const instance: PARRequest = {
    card_number,
    card_cvv,
    card_expiry_mm,
    card_expiry_yy,
    card_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
