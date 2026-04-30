# PARRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_number** | **string** | The card number, containing 15 to 19 numeric digits without spaces or special characters. | [default to undefined]
**card_cvv** | **string** | The Card Verification Value (CVV), a 3-digit code for most cards (Visa, Mastercard) and a 4-digit code for American Express, used for transaction authentication. | [default to undefined]
**card_expiry_mm** | **string** | The two-digit expiry month (01-12), indicating when the card will expire. | [default to undefined]
**card_expiry_yy** | **string** | The two-digit expiry year, representing the last two digits of the card’s expiration year. | [default to undefined]
**card_type** | **string** | Specifies the type of card, with the only accepted value being &#x60;PLAIN_CARD&#x60;. | [optional] [default to undefined]

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
