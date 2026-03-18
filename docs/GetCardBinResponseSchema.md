# GetCardBinResponseSchema

Response body to get card bin details for a card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_name** | **string** | Name of the bank. | [optional] [default to undefined]
**country_code** | **string** | Country code describes uniquely a country. | [optional] [default to undefined]
**scheme** | **string** | Scheme of the bank linked with the card. | [optional] [default to undefined]
**sub_type** | **string** | Subtype of the card. | [optional] [default to undefined]
**type** | **string** | Describes the type of the card. | [optional] [default to undefined]

## Example

```typescript
import { GetCardBinResponseSchema } from 'cashfree-pg';

const instance: GetCardBinResponseSchema = {
    bank_name,
    country_code,
    scheme,
    sub_type,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
