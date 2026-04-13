# Card

Card Payment method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | The channel for card payments can be \&quot;link\&quot; or \&quot;post\&quot;. Post is used for seamless OTP payments where merchant captures OTP on their own page. | [default to undefined]
**card_number** | **string** | Customer card number for plain card transactions. Token pan number for tokenized card transactions. | [optional] [default to undefined]
**card_holder_name** | **string** | Customer name mentioned on the card. | [optional] [default to undefined]
**card_expiry_mm** | **string** | Card expiry month for plain card transactions. Token expiry month for tokenized card transactions. | [optional] [default to undefined]
**card_expiry_yy** | **string** | Card expiry year for plain card transactions. Token expiry year for tokenized card transactions. | [optional] [default to undefined]
**card_cvv** | **string** | CVV mentioned on the card. | [optional] [default to undefined]
**instrument_id** | **string** | instrument id of saved card. Required only to make payment using saved instrument. | [optional] [default to undefined]
**cryptogram** | **string** | cryptogram received from card network. Required only for tokenized card transactions. | [optional] [default to undefined]
**token_requestor_id** | **string** | TRID issued by card networks. Required only for tokenized card transactions. | [optional] [default to undefined]
**token_reference_id** | **string** | Token Reference Id provided by Diners for Guest Checkout Token.  Required only for Diners cards. | [optional] [default to undefined]
**token_type** | **string** |  | [optional] [default to undefined]
**card_display** | **string** | last 4 digits of original card number. Required only for tokenized card transactions. | [optional] [default to undefined]
**card_alias** | **string** | Card alias as returned by Cashfree Vault API. | [optional] [default to undefined]
**card_bank_name** | **string** | One of [\&quot;Kotak\&quot;, \&quot;ICICI\&quot;, \&quot;RBL\&quot;, \&quot;BOB\&quot;, \&quot;Standard Chartered\&quot;]. Card bank name, required for EMI payments. This is the bank user has selected for EMI | [optional] [default to undefined]
**address_line_one** | **string** | First line of the address. | [optional] [default to undefined]
**address_line_two** | **string** | Second line of the address. | [optional] [default to undefined]
**city** | **string** | City Name. | [optional] [default to undefined]
**zip_code** | **string** | Pin Code/Zip Code. | [optional] [default to undefined]
**country** | **string** | Country Name. | [optional] [default to undefined]
**country_code** | **string** | Country Code. Should be in ISO 2 format (ie. US for United States) | [optional] [default to undefined]
**state** | **string** | State Name. | [optional] [default to undefined]
**state_code** | **string** | State Code. Should be in ISO 2 format (ie. FL for Florida) | [optional] [default to undefined]
**emi_tenure** | **number** | EMI tenure selected by the user | [optional] [default to undefined]

## Example

```typescript
import { Card } from 'cashfree-pg';

const instance: Card = {
    channel,
    card_number,
    card_holder_name,
    card_expiry_mm,
    card_expiry_yy,
    card_cvv,
    instrument_id,
    cryptogram,
    token_requestor_id,
    token_reference_id,
    token_type,
    card_display,
    card_alias,
    card_bank_name,
    address_line_one,
    address_line_two,
    city,
    zip_code,
    country,
    country_code,
    state,
    state_code,
    emi_tenure,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
