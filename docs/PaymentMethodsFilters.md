# PaymentMethodsFilters

Filter for Payment Methods

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_methods** | **Array&lt;string&gt;** | Array of payment methods to be filtered. This is optional, by default all payment methods will be returned. Possible values in [ \&#39;debit_card\&#39;, \&#39;credit_card\&#39;, \&#39;prepaid_card\&#39;, \&#39;corporate_credit_card\&#39;, \&#39;upi\&#39;, \&#39;wallet\&#39;, \&#39;netbanking\&#39;, \&#39;banktransfer\&#39;, \&#39;paylater\&#39;, \&#39;paypal\&#39;, \&#39;debit_card_emi\&#39;, \&#39;credit_card_emi\&#39;, \&#39;upi_credit_card\&#39;, \&#39;upi_ppi\&#39;, \&#39;cardless_emi\&#39;, \&#39;account_based_payment\&#39; ]  | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodsFilters } from 'cashfree-pg';

const instance: PaymentMethodsFilters = {
    payment_methods,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
