# SavedInstrumentMeta

Card instrument meta information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_network** | **string** | Card scheme/network of the saved card. Available options are &#x60;visa&#x60;, &#x60;mastercard&#x60;, &#x60;rupay&#x60;, &#x60;amex&#x60;, and &#x60;diners&#x60;. | [optional] [default to undefined]
**card_bank_name** | **string** | Issuing bank name of the saved card. For example, &#x60;HDFC BANK&#x60;, &#x60;AXIS BANK&#x60;, or &#x60;ICICI BANK&#x60;. | [optional] [default to undefined]
**card_country** | **string** | Issuing country of the saved card. For example, &#x60;IN&#x60;. | [optional] [default to undefined]
**card_type** | **string** | Type of the saved card. Available options are &#x60;credit_card&#x60;, &#x60;debit_card&#x60;, and &#x60;prepaid_card&#x60;. | [optional] [default to undefined]
**card_sub_type** | **string** | Subtype of the saved card. R indicates retail, P indicates premium, and C indicates corporate. Available options are &#x60;R&#x60;, &#x60;P&#x60;, and &#x60;C&#x60;. | [optional] [default to undefined]
**card_token_details** | [**SavedInstrumentMetaCardTokenDetails**](SavedInstrumentMetaCardTokenDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SavedInstrumentMeta } from 'cashfree-pg';

const instance: SavedInstrumentMeta = {
    card_network,
    card_bank_name,
    card_country,
    card_type,
    card_sub_type,
    card_token_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
