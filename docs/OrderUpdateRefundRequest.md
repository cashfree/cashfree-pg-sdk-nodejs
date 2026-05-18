# OrderUpdateRefundRequest

update refund request object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refund_status** | **string** | Allowed values: [\&quot;CANCELLED\&quot;]. | [default to undefined]
**remarks** | **string** | Add remarks for your reference. | [optional] [default to undefined]

## Example

```typescript
import { OrderUpdateRefundRequest } from 'cashfree-pg';

const instance: OrderUpdateRefundRequest = {
    refund_status,
    remarks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
