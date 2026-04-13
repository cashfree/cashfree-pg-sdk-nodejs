# SavedInstrumentMeta

Card instrument meta information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_network** | **string** | card scheme/network of the saved card. Example visa, mastercard | [optional] [default to undefined]
**card_bank_name** | **string** | Issuing bank name of saved card | [optional] [default to undefined]
**card_country** | **string** | Issuing country of saved card | [optional] [default to undefined]
**card_type** | **string** | Type of saved card | [optional] [default to undefined]
**card_token_details** | **object** |  | [optional] [default to undefined]

## Example

```typescript
import { SavedInstrumentMeta } from 'cashfree-pg';

const instance: SavedInstrumentMeta = {
    card_network,
    card_bank_name,
    card_country,
    card_type,
    card_token_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
