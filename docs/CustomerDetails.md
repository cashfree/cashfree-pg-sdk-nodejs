# CustomerDetails

The customer details that are necessary. Note that you can pass dummy details if your use case does not require the customer details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **string** | A unique identifier for the customer. Use alphanumeric values only. | [default to undefined]
**customer_email** | **string** | Customer email address. | [optional] [default to undefined]
**customer_phone** | **string** | Customer phone number. To accommodate international phone numbers, ensure the number is prefixed with a \&#39;+\&#39; to override the 10-digit limitation. | [default to undefined]
**customer_name** | **string** | Name of the customer. | [optional] [default to undefined]
**customer_bank_account_number** | **string** | Customer\&#39;s bank account number. This field is required only if you want to perform a bank account check (TPV). | [optional] [default to undefined]
**customer_bank_ifsc** | **string** | Customer\&#39;s bank IFSC. Required if you want to do a bank account check (TPV). | [optional] [default to undefined]
**customer_bank_code** | **number** | Customer\&#39;s bank code. Required for net banking payments, if you want to do a bank account check (TPV). | [optional] [default to undefined]
**customer_uid** | **string** | Customer\&#39;s identifier at Cashfree. You will get this when you create/get customer. | [optional] [default to undefined]

## Example

```typescript
import { CustomerDetails } from 'cashfree-pg';

const instance: CustomerDetails = {
    customer_id,
    customer_email,
    customer_phone,
    customer_name,
    customer_bank_account_number,
    customer_bank_ifsc,
    customer_bank_code,
    customer_uid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
