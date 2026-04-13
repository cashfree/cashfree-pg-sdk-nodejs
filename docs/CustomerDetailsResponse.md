# CustomerDetailsResponse

The customer details that are necessary. Note that you can pass dummy details if your use case does not require the customer details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **string** | A unique identifier for the customer. Use alphanumeric values only. | [optional] [default to undefined]
**customer_email** | **string** | Customer email address. | [optional] [default to undefined]
**customer_phone** | **string** | Customer phone number. | [optional] [default to undefined]
**customer_name** | **string** | Name of the customer. | [optional] [default to undefined]
**customer_bank_account_number** | **string** | Customer bank account. Required if you want to do a bank account check (TPV) | [optional] [default to undefined]
**customer_bank_ifsc** | **string** | Customer bank IFSC. Required if you want to do a bank account check (TPV) | [optional] [default to undefined]
**customer_bank_code** | **number** | Customer bank code. Required for net banking payments, if you want to do a bank account check (TPV) | [optional] [default to undefined]
**customer_uid** | **string** | Customer identifier at Cashfree. You will get this when you create/get customer | [optional] [default to undefined]

## Example

```typescript
import { CustomerDetailsResponse } from 'cashfree-pg';

const instance: CustomerDetailsResponse = {
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
