# CreateCustomerRequest

Request body to create a customer at cashfree

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_phone** | **string** | Customer Phone Number | [default to undefined]
**customer_email** | **string** | Customer Email | [optional] [default to undefined]
**customer_name** | **string** | Customer Name | [optional] [default to undefined]

## Example

```typescript
import { CreateCustomerRequest } from 'cashfree-pg';

const instance: CreateCustomerRequest = {
    customer_phone,
    customer_email,
    customer_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
