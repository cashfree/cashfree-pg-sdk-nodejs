# EligibilityMethodItemEntityDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_types** | **Array&lt;string&gt;** | List of account types associated with the payment method. (e.g. SAVINGS or CURRENT) | [optional] [default to undefined]
**frequent_bank_details** | [**Array&lt;SubscriptionBankDetails&gt;**](SubscriptionBankDetails.md) | List of the most frequently used banks. | [optional] [default to undefined]
**all_bank_details** | [**Array&lt;SubscriptionBankDetails&gt;**](SubscriptionBankDetails.md) | Details about all banks associated with the payment method. | [optional] [default to undefined]
**available_handles** | [**Array&lt;EligibilityMethodItemEntityDetailsAvailableHandlesInner&gt;**](EligibilityMethodItemEntityDetailsAvailableHandlesInner.md) | List of supported VPA handles. | [optional] [default to undefined]
**allowed_card_types** | **Array&lt;string&gt;** | List of allowed card types. (e.g. DEBIT_CARD, CREDIT_CARD) | [optional] [default to undefined]

## Example

```typescript
import { EligibilityMethodItemEntityDetails } from 'cashfree-pg';

const instance: EligibilityMethodItemEntityDetails = {
    account_types,
    frequent_bank_details,
    all_bank_details,
    available_handles,
    allowed_card_types,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
