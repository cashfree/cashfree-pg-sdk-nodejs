# SubscriptionCustomerDetails

Subscription customer details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_name** | **string** | Name of the customer. | [optional] [default to undefined]
**customer_email** | **string** | Email of the customer. | [default to undefined]
**customer_phone** | **string** | Phone number of the customer. | [default to undefined]
**customer_bank_account_holder_name** | **string** | Bank holder name of the customer. | [optional] [default to undefined]
**customer_bank_account_number** | **string** | Bank account number of the customer. | [optional] [default to undefined]
**customer_bank_ifsc** | **string** | IFSC code of the customer. | [optional] [default to undefined]
**customer_bank_code** | **string** | Bank code of the customer. Refer to https://www.npci.org.in/PDF/nach/live-members-e-mandates/Live-Banks-in-API-E-Mandate.pdf | [optional] [default to undefined]
**customer_bank_account_type** | **string** | Bank account type of the customer. | [optional] [default to undefined]

## Example

```typescript
import { SubscriptionCustomerDetails } from 'cashfree-pg';

const instance: SubscriptionCustomerDetails = {
    customer_name,
    customer_email,
    customer_phone,
    customer_bank_account_holder_name,
    customer_bank_account_number,
    customer_bank_ifsc,
    customer_bank_code,
    customer_bank_account_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
