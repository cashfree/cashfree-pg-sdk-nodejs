# ExtendedCustomerDetails

Recent Customer details associated with the order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **string** | A unique identifier for the customer. Use alphanumeric values only. | [optional] [default to undefined]
**customer_email** | **string** | Customer email address. | [optional] [default to undefined]
**customer_phone** | **string** | Customer phone number. | [optional] [default to undefined]
**customer_name** | **string** | Name of the customer. | [optional] [default to undefined]
**customer_uid** | **string** | Customer identifier at Cashfree. You will get this when you create/get customer | [optional] [default to undefined]

## Example

```typescript
import { ExtendedCustomerDetails } from 'cashfree-pg';

const instance: ExtendedCustomerDetails = {
    customer_id,
    customer_email,
    customer_phone,
    customer_name,
    customer_uid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
