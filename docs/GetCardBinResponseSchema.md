# GetCardBinResponseSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_name** | **string** | Issuing bank name of the card. For example &#x60;hdfc bank&#x60;, &#x60;icici bank&#x60;, &#x60;axis bank&#x60;. | [optional] [default to undefined]
**country_code** | **string** | Issuing country of the card. For example &#x60;in&#x60;, &#x60;us&#x60;. | [optional] [default to undefined]
**scheme** | **string** | Card scheme/network of the card. For example &#x60;visa&#x60;, &#x60;mastercard&#x60;, &#x60;rupay&#x60;, &#x60;amex&#x60;, &#x60;diners&#x60;. | [optional] [default to undefined]
**sub_type** | **string** | Sub-type of card. Available options are &#x60;retail&#x60;, &#x60;premium&#x60; and &#x60;corporate&#x60;. | [optional] [default to undefined]
**type** | **string** | Type of card. Available options are &#x60;credit&#x60;, &#x60;debit&#x60; and &#x60;prepaid&#x60;. | [optional] [default to undefined]

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
