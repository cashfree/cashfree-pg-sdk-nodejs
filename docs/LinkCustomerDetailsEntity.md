# LinkCustomerDetailsEntity

Payment link customer entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_phone** | **string** | Customer phone number | [default to undefined]
**customer_email** | **string** | Customer email address | [optional] [default to undefined]
**customer_name** | **string** | Customer name | [optional] [default to undefined]
**customer_bank_account_number** | **string** | Customer Bank Account Number | [optional] [default to undefined]
**customer_bank_ifsc** | **string** | Customer Bank Ifsc | [optional] [default to undefined]
**customer_bank_code** | **number** | Customer Bank Code | [optional] [default to undefined]

## Example

```typescript
import { LinkCustomerDetailsEntity } from 'cashfree-pg';

const instance: LinkCustomerDetailsEntity = {
    customer_phone,
    customer_email,
    customer_name,
    customer_bank_account_number,
    customer_bank_ifsc,
    customer_bank_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
