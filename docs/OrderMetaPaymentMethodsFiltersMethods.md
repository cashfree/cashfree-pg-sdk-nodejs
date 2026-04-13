# OrderMetaPaymentMethodsFiltersMethods

Allowed payment modes for this order. credit_card, debit_card, netbanking, paylater, etc are the values that can be passed to this parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | It accepts value of \&quot;ALLOW\&quot; and allows only those modes present in it\&#39;s neighbouring parameter \&quot;values\&quot; | [optional] [default to undefined]
**values** | **Array&lt;string&gt;** | The accepted entries for this paramter are \&quot;debit_card, credit_card, prepaid_card, upi, wallet, netbanking, banktransfer, paylater, paypal, debit_card_emi, credit_card_emi, upi_credit_card, upi_ppi, cardless_emi, account_based_payment, corporate_credit_card, sbc_debit_card, sbc_emandate, sbc_upi, sbc_credit_card\&quot; | [optional] [default to undefined]

## Example

```typescript
import { OrderMetaPaymentMethodsFiltersMethods } from 'cashfree-pg';

const instance: OrderMetaPaymentMethodsFiltersMethods = {
    action,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
