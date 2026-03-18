# CardEMI

Payment method for card emi

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | The channel for card payments will always be \&quot;link\&quot; | [default to undefined]
**card_number** | **string** | Customer card number. | [default to undefined]
**card_holder_name** | **string** | Customer name mentioned on the card. | [optional] [default to undefined]
**card_expiry_mm** | **string** | Card expiry month. | [default to undefined]
**card_expiry_yy** | **string** | Card expiry year. | [default to undefined]
**card_cvv** | **string** | CVV mentioned on the card. | [default to undefined]
**card_alias** | **string** | Card alias as returned by Cashfree Vault API | [optional] [default to undefined]
**card_bank_name** | **string** | Card bank name, required for EMI payments. This is the bank user has selected for EMI. One of [\&quot;hdfc, \&quot;kotak\&quot;, \&quot;icici\&quot;, \&quot;rbl\&quot;, \&quot;bob\&quot;, \&quot;standard chartered\&quot;, \&quot;axis\&quot;, \&quot;au\&quot;, \&quot;yes\&quot;, \&quot;sbi\&quot;, \&quot;fed\&quot;, \&quot;hsbc\&quot;, \&quot;citi\&quot;, \&quot;amex\&quot;] | [default to undefined]
**emi_tenure** | **number** | EMI tenure selected by the user | [default to undefined]

## Example

```typescript
import { CardEMI } from 'cashfree-pg';

const instance: CardEMI = {
    channel,
    card_number,
    card_holder_name,
    card_expiry_mm,
    card_expiry_yy,
    card_cvv,
    card_alias,
    card_bank_name,
    emi_tenure,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
