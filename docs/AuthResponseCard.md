# AuthResponseCard

Payment method card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | Can be link. | [optional] [default to undefined]
**card_number** | **string** | Card number. | [optional] [default to undefined]
**card_network** | **string** | Card network (e.g., VISA, Mastercard). | [optional] [default to undefined]
**card_type** | **string** | Card type (e.g., credit_card). | [optional] [default to undefined]
**card_sub_type** | **string** | Card subtype (e.g., R). | [optional] [default to undefined]
**card_country** | **string** | Country of the card (e.g., IN). | [optional] [default to undefined]
**card_bank_name** | **string** | Bank name on card. | [optional] [default to undefined]
**card_network_reference_id** | **string** | Network reference ID. | [optional] [default to undefined]
**instrument_id** | **string** | Unique identifier for card instrument. | [optional] [default to undefined]

## Example

```typescript
import { AuthResponseCard } from 'cashfree-pg';

const instance: AuthResponseCard = {
    channel,
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
